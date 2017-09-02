> Module本身不进行分析计算，只定义运行逻辑，通过添加tool/module组合成实现一项生物信息分析功能。

### Module编写

#### 1. 初始化实例，初始化父类，设置参数，添加Tool

```
class AlphaDiversityModule(Module):
    """
    alpha多样性模块
    version 1.0
    author: qindanhua
    last_modify: 2015.12.29
    """
    ESTIMATORS_E = ['ace', 'bergerparker', 'boneh', 'bootstrap', 'bstick', 'chao', 'coverage', 'default', 'efron',
                    'geometric', 'goodscoverage', 'heip', 'invsimpson', 'jack', 'logseries', 'npshannon', 'nseqs',
                    'qstat', 'shannon', 'shannoneven', 'shen', 'simpson', 'simpsoneven', 'smithwilson', 'sobs', 'solow']
    ESTIMATORS_R = ['ace', 'bootstrap', 'chao', 'coverage', 'default', 'heip', 'invsimpson', 'jack', 'npshannon',
                    'nseqs', 'shannon', 'shannoneven', 'simpson', 'simpsoneven', 'smithwilson', 'sobs']

    def __init__(self, work_id):
        super(AlphaDiversityModule, self).__init__(work_id)
        options = [
            {"name": "otu_table", "type": "infile", "format": "meta.otu.otu_table,meta.otu.tax_summary_dir"},  # 输入文件
            {"name": "estimate_indices", "type": "string", "default": "ace,chao,shannon,simpson,coverage"},
            {"name": "rarefy_indices", "type": "string", "default": "sobs,shannon"},  # 指数类型
            {"name": "rarefy_freq", "type": "int", "default": 100},
            {"name": "level", "type": "string", "default": "otu"}  # level水平
        ]
        self.add_option(options)
        # self.rank_path = '/mnt/ilustre/users/sanger/app/meta/scripts/'
        self.perl_path = 'Perl/bin/perl'
        self.estimators = self.add_tool('meta.alpha_diversity.estimators')
        self.rarefaction = self.add_tool('meta.alpha_diversity.rarefaction')

```

#### 2. 检查参数

```
    def check_options(self):
        """
        检查参数
        """
        if not self.option("otu_table").is_set:
            raise OptionError("请选择otu表")
        for estimators in self.option('estimate_indices').split(','):
            if estimators not in self.ESTIMATORS_E:
                raise OptionError("请选择正确的指数类型")
        for estimators in self.option('rarefy_indices').split(','):
            if estimators not in self.ESTIMATORS_R:
                raise OptionError("请选择正确的指数类型")

```

#### 3. 编写运行逻辑

* on(name, function, data)

```
    def on(self, name, func, data=None):
        """
        为对象自身绑定事件处理函数

        :param name: string 事件名称

        :param func: 自定义unbound function 或bound method(对象方法或类方法),最多允许2个参数（bound method第一个参数除外,即self）,
                      bound method定义时第一个参数应该为self或cls,如:

            .. code-block:: python
                :linenos:

                class A(object):
                    def b(self,c):
                        pass
                x=A()
                obj.bind(A.b)

        function可定义为: ``def func(a,b)`` 或 ``def func(a)`` 或 ``def func()``

        #. 第一个参数运行时获取值为**EventHandler.fire**函数传递的参数

        #. 第二个参数运行时获取值为一个**event_data**字典

               * *event_data['bind_object']* 值是该方法绑定的EventObject对象

               * *event_data['event']* 值是该方法绑定的EventHandler对象

               * *event_data['data']* 是bind方法传递的data参数

        当定义时指定参数名为 *event* 时(如 ``def func(event)`` )，此时 *event* 的值为 **event_data** 字典,不区分参数位置

        :param data: 可选参数 将通过 **event_data['data']** 形式传递给运行函数
        :return:
        """
```

* on_rely

```
    def on_rely(self, rely, func, data=None):
        """
        添加自定义依赖事件，当所有依赖对象完成时次事件被触发。

        :param rely: 当个 :py:class:`biocluster.module.Module` 或  :py:class:`biocluster.agent.Agent` 对象 或其数组
        :param func:  当 rely参数中的所有对象均完成(is_end is True)时，触发此函数
        :param data:  需要传递的参数
        """
```

使用示例：
```
            self.on_rely([self.tax, self.phylo], self.run_stat)
            self.stat.on('end', self.run_alpha)
            self.stat.on('end', self.run_beta)
            self.stat.on('end', self.run_pan_core)
            self.on_rely([self.alpha, self.beta, self.pan_core], self.end)

        self.beta.on("end", self.set_output, "beta")
        self.beta.on("start", self.set_step, {'start': self.step.betadiv})
        self.beta.on("end", self.set_step, {'end': self.step.betadiv})

    def set_output(self, event):
        obj = event["bind_object"]
        # 设置QC报告文件
        if event['data'] == "sample_check":
            # self.option("otu_fasta", obj.option("otu_fasta"))
            self.move2outputdir(obj.output_dir, self.output_dir + "/QC_stat")  # 代替cp
            # os.system('cp -r ' + obj.output_dir + ' ' + self.output_dir + "/QC_stat")
            api_samples = self.api.sample
            sample_info_path = self.sample_check.output_dir + "/samples_info/samples_info.txt"
            if not os.path.isfile(sample_info_path):
                raise Exception("找不到报告文件:{}".format(sample_info_path))
            api_samples.add_samples_info(sample_info_path)
            self.spname_spid = api_samples.get_spname_spid()
```


#### 4. run开始运行


```
    def run(self):
        super(AlphaDiversityModule, self).run()
        self.estimators_run()
        self.rarefaction_run()
        self.on_rely([self.estimators, self.rarefaction], self.set_output)
```