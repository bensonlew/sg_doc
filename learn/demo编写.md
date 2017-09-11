>demo设置
>demo拉取

### demo设置

demo设置与取消在sanger@majorbio账号下
![demo设置](img/demo设置.png)

* 将任务设置为demo：
  * 提交参数到前端，前端修改mysql数据库里的项目表和任务表，将项目表的is_demo改为1，任务表的is_demo改为1  #项目表的is_demo为0时，表明这个项目不是demo，为1时这个项目是demo，会在页面上项目名称后加Demo标签；任务表的is_demo同任务表


* 取消设置为demo：
  * 提交参数到前端，前端修改mysql数据库里的项目表和任务表is_demo的状态


* demo初始化:
  * 若为有参RNA项目，在将任务设置为demo的时候，前端修改mysql的is_demo状态的同时，将参数传到接口[demo_init](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/webroot/mainapp/controllers/submit/demo_init.py)，进行demo的备份和备份删除


拉取的demo的任务表的is_demo为0，项目表的is_demo为


在拉取demo时，将参数传到demo_mongodata_copy，进行demo的拉取
