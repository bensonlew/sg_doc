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
subprocess.check_call('gunzip -c ' + fastq + " > " + new_fastq, shell=True)
```

参数设计
-----------------------------------

```
    {"name": "fastq", "type": "infile", "format": "sequence.fastq"},  # 需要被解压的文件
    {"name": "result_path", "type": "string"} # 解压后放置的位置
``` 

运行逻辑
-----------------------------------

解压

资源配置
-----------------------------------

```
self._cpu = 2
memory = os.path.getsize(self.option('fastq').prop['path'])
n = memory / (1024 * 1024 * 1024)
n = math.ceil(n)
self._memory = '{}G'.format(int(n))
```