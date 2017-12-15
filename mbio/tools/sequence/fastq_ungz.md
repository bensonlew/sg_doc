fastq_ungz
==========================

模块Path
-----------

**tools.sequence.fastq_ungz**

功能描述
-----------------------------------

因为meta.base_info调用的是file中的属性来解压文件fastq文件（file中是串行的，效率太低）所以写了这个tool专门并行解压fastq文件



主要命令及功能模块
-----------------------------------

```
 subprocess.check_output('gunzip -c ' + fastq + " > " + new_fastq, shell=True)
```

参数设计
-----------------------------------

```
{"name": "fastq", "type": "string"},  # 样品的压缩文件，当有补测样品时需要用空格连接文件名如：“a.R1.gz a1.R1.gz”
{"name": "sample_name", "type": "string"},  # 样品名
{"name": "direction", "type": "string"},	# 序列方向，1/2或r/l
{"name": "result_path", "type": "string"}  # 输出文件存放路径
``` 

运行逻辑
-----------------------------------

将样品压缩文件直接解压解压


资源配置
-----------------------------------

```
self._cpu = 2
memory = os.path.getsize(self.option('fastq').prop['path'])
n = memory / (1024 * 1024 * 1024)
n = math.ceil(n)
self._memory = '{}G'.format(int(n))
```