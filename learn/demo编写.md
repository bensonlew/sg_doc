>demo设置

>demo拉取

### demo设置

demo设置与取消在sanger@majorbio账号下

![demo设置](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/wikis/img/demo设置.png)

* 将任务设置为demo基准任务：
  * 提交参数到前端，前端修改mysql数据库里的项目表和任务表，将项目表的is_demo改为1，任务表的is_demo改为1  #项目表的is_demo为0时，表明这个项目不是demo，为1时这个项目是demo，会在页面上项目名称后加Demo标签；任务表的is_demo同任务表


* 取消设置为demo：
  * 提交参数到前端，前端修改mysql数据库里的项目表和任务表is_demo的状态


* demo初始化:
  * 若为有参RNA项目，在将任务设置为demo的时候，前端修改mysql的is_demo状态的同时，将参数传到接口[demo_init](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/master/webroot/mainapp/controllers/submit/demo_init.py)，进行demo的备份和备份删除
  * [demo初始化接口](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/master/webroot/mainapp/controllers/submit/demo_init.py)
  * [demo初始化workflow](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/master/src/mbio/workflows/copy_demo/demo_init.py)

### demo拉取

![demo拉取](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/wikis/img/demo拉取.png)

* 拉取demo的时候前端会新建一个项目，在项目里新建一个任务，项目名称为这个demo的项目名称加上拉取的年月日，拉取的demo的任务表的is_demo为0，项目表的is_demo为1，可以根据这个状态区分出是否是拉取的demo；若项目是有参RNA，前端会提示这个demo的有效期只有一个月

* 在拉取demo时，前端将参数传到接口demo_mongodata_copy，若为有参rna项目，在拉取demo的同时，底层会再备份一份demo，保持mongo数据库备份的demo不变
* [demo拉取接口](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/master/webroot/mainapp/controllers/instant/meta/demo_mongodata_copy.py)
* [demo拉取workflow](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/master/src/mbio/workflows/copy_demo/copy_demo.py)
* [demo复制package](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/master/src/mbio/packages/rna/refrna_copy_demo.py)

### demo的复制

* demo复制用的是gevent的异步I/O模式

* gevent:
    * 一个基于协程的Python网络库，保留上一次调用时的状态，每次重新进入该过程的时候，就相当于回到上一次离开时所处逻辑流的位置。
    * gevent中用到的主要模式是Greenlet, 它是以C扩展模块形式接入Python的轻量级协程。 Greenlet全部运行在主程序操作系统进程的内部，但它们被协作式地调度。
    * 使用gevent原因：
        * 线程是系统级别的，在做切换的时候消耗是特别大的；同时线程的切换是由CPU决定的，协程是用户级别的切换，且切换是由自己控制，不受外力终止
        * 当一个greenlet遇到IO操作时，比如访问网络，就自动切换到其他的greenlet，等到IO操作完成，再在适当的时候切换回来继续执行。由于IO操作非常耗时，经常使程序处于等待状态，有了gevent为我们自动切换协程，就保证总有greenlet在运行，而不是等待IO。

```
        def exchange_ObjectId(self, key, thisObjectId):
              """
              用于替换id，key是该ID的字段名，thisObjectId是旧的ID(ObjectId类型)
              """
              if isinstance(thisObjectId, ObjectId):
                  return ObjectId(self._exchange_dict[key][str(thisObjectId)])
              else:
                  return self._exchange_dict[key][thisObjectId]  # 不是ObjectId时直接返回也是字符串
```

```
        def copy_main_details(self, collection, main_field, change_dict, others_position=[], join=True):
              greenlet = Greenlet(self._copy_main_details, collection, main_field, change_dict, others_position)
              greenlet.start()
              if join is True:
                  greenlet.join()
                  return greenlet.value
              self.all_greenlets.append(greenlet)
              return greenlet
```

```
def _copy_main_details(self, collection, main_field, change_dict, others_position=[]):
      """
      公共模块，一般用于更新detail表，根据提供的主表id字段名，和主表新旧ID字典，进行查找，再复制替换，others_position用于更新主表ID之外其他需要更新的ID
      params collection: detail表名称
      params main_field: 主表字段名称
      params change_dict: 主表新旧替换字典，一般来源于 copy_collection_with_change 的返回字典
      params others_position: detail表中除了主表还需要更新的字段，
          只能是 specimen_id,group_id
      """
      time_start = datetime.datetime.now()
      coll = self.db[collection]
      for old, new in change_dict.items():
          finds = coll.find({main_field: ObjectId(old)})
          news = []
          for i in finds:
              i.pop('_id')
              i[main_field] = ObjectId(new)
              for position in others_position:
                  i[position] = self.exchange_ObjectId(position, i[position])
              news.append(i)
          if news:
              coll.insert_many(news)
          else:
              print 'WARNING: 主表:{}没有detail表信息，请注意数据合理性,collection:{}'.format(old, collection)
      time_end = datetime.datetime.now()
      run_time = (time_end - time_start).seconds
      print "{}复制运行时间: {}s".format(collection, run_time)
```

```
def copy_collection_with_change(self, collection, change_positions=[], update_sg_status=False, targetcoll=None):
      """
      公共模块，一般用于导入主表数据，依靠task_id进行查询，修改change_positions提供的字段，相应修改ID为新的，同时更新params中的数据ID
      params collection: 主表名称
      params change_positions: 需要替换的ID,可用为specimen_id,group_id...
      params update_sg_status: 更新sg_status表
      params targetcoll: 更新到特定集合， 默认与collection参数相同
      """
      coll = self.db[collection]
      if targetcoll:
          targetcoll = self.db[targetcoll]
      else:
          targetcoll = self.db[collection]
      finds = coll.find({'task_id': self._old_task_id})
      news = []
      olds = []
      for i in finds:
          i['task_id'] = self._new_task_id
          if 'project_sn' in i:
              i['project_sn'] = self._new_project_sn
          olds.append(str(i.pop('_id')))
          for position in change_positions:
              if position in i:
                  i[position] = self.exchange_ObjectId(position, i[position])
          if 'params' in i:
              i['params'] = self.params_exchange(i['params'])
          news.append(i)
      if news:
          result = targetcoll.insert_many(news)
          if update_sg_status:
              self.insert_new_status(collection, news, result.inserted_ids)
          return dict(zip(olds, [str(one) for one in result.inserted_ids]))
      else:
          return {}
```
