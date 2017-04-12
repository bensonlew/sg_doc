Web服务
============

* [Nginx](#user-content-nginx)
* [Nginx+WSGI+webpy 配置&原理](#user-content-nginx+WSGI+webpy 配置&原理)



# Nginx

### nginx 概述

 * nginx是一个基于事件模型并且依赖于操作系统特性的服务器（譬如，在linux平台我们可以使用epoll来提高请求处理能力）；

 * nginx启动时通常会创建一个master进程和多个worker进程，其中master进程主要用来读取，加载配置文件以及管理worker进程，而work进程则是用来处理客户端请求；  

 * worker进程的数目可以在配置文件中指定，建议使用机器的cpu数作为worker进程数



### nginx 启动，关闭止以及重载配置
启动nginx服务器：

    nginx     
    nginx -c nginx_conf_path

第一个命令使用默认配置文件（通常是: /etc/nginx/nginx.conf）启动nginx，而第二个命令使用自定义配置文件启动nginx  

关闭nginx服务器：

    nginx -s stop --- 暴力的关闭服务器
    nginx -s quit --- 安全的关闭服务器

上面的两个命令的区别在于，第二个命令会让nginx处理完当前正在处理的请求，然后关闭服务器

有时候nginx正在运行，然后我们因为某些问题修改了配置文件，这时候我们希望新配置立即生效该怎么办呢？ 显然我可以们先关闭然后重新启动服务器（这时候它会加载到新的配置），但这种做法太麻烦，而且会在短时间内造成服务不可用（若没有集群）  

nginx本身提供了一种优雅的方式，使用下列命令，可以动态加载新配置：

    nginx -s reload

一旦master进程收到该信号（重载），它首先检查新配置语法的正确性，然后尝试加载它；如果一切OK，master开始用新配置去创建新的worker进程，并且告诉老的worker进程：嗨，哥么，你处理完手头的事就可以闪了；worker进程收到master程发来的该消息就会处理完正在处理的请求然后退出，之后nginx就以新配置状态运行

### nginx 提供静态资源服务
web服务器的一个重要功能就是提供静态资源服务（譬如：图片和静态网页），下面我们将编写一些配置代码，使得nginx可以提供静态资源服务

第一步：在你的机器上创建/data/www和/data/images目录，然后再这两个目录中分别添加index.html和hello.jpg文件（图片名随便）

第二步：打开配置文件（假设是nginx.conf），然后添加下面代码：

    http {
        server {
        }
    }

通常一个配置文件会包含多个server块（都内嵌在http块中），每一个server块都表示一个虚拟主机，并且这些虚拟主机有server块中的listen和server_names字段区分。一旦nginx决定使用使用哪个server块来处理请求，它将会把请求URI和server块中的location块做进一步比较  

第三步：在server块中添加location块：

    server {
        listen 8080;
        location / {
            root /data/www;
        }

        location /images/ {
            root /data;
        }
    }

若第一个location块中的"/"前缀与当前请求URI匹配（很显然匹配，任何URI都是以"/"开始），则执行location块中的命令：root；root命令用来替换根路径，也就是说你访问/index.html，在这里会被替换成/data/www/index.html  

在一个server块内可以定义多个location块，假如一个URI匹配多个location块，那么nginx将会选择那个匹配最长前缀的location块，譬如：访问/images/hello.jpg，它同时匹配两个location块（"/"和"/images/"），nginx会选择较长匹配的那个，也就是第二个location块，并且执行其中的root命令，于是请求URI被替换成：/data/images/hello.jpg

配置已经完成，赶紧试一试吧（若nginx已经在运行，可以使用nginx -s reload命令重载配置）


### nginx 代理服务器
nginx经常被用作反向代理服务器，对于一些动态请求，nginx会把它转发给那些被代理的服务器（也叫上游服务器，譬如JBOSS，Tomcat等），然后把它们处理的结果再返回给客户端；那如何配置反向代理呢？  




# Nginx+WSGI+webpy 配置&原理


### 配置

webpy代码：hello.py

```python
    #!/usr/bin/python
    import web

    urls = ("/.*", "hello")
    app = web.application(urls, globals())

    class hello:
        def GET(self):
            return 'Welcome to webpy!'

    # 这行代码非常重要
    application = app.wsgifunc()
```    
nginx配置：

```sh
    server {
        listen 80;
        location / {
            include uwsgi_params;                                                                                
            uwsgi_pass 127.0.0.1:9090;
        }   
    }   
```
uWSGI启动参数：
```sh
    uwsgi --socket 127.0.0.1:9090  \         # 监听在指定端口
          --wsgi-file hello.py \             # 部署的web应用
          --master --processes 2 \           # 创建两个worker进程处理请求
          --daemonize /var/log/uwsgi.log \   # 后台运行uWSGI，并把日志输出到指定文件
          --pidfile /var/log/uwsgi.pid       # pid文件
```    
测试配置
```sh
    $ curl http://127.0.0.1/hello.htm
    Welcome to webpy!
```    

###原理分析：
看了上述的配置，你一定很好奇，刚才那些配置究竟起什么作用，uWSGI又是什么东西以及nginx是如何转发请求的？

类似java web中servlet规范，python web开发也有自己的规范——[WSGI](http://www.python.org/dev/peps/pep-3333/)，它定义了：**web应用（或者web框架）与web服务器交互接口**，而uWSGI就是一个支持WSGI规范的web服务器，你可以把web应用部署到uWSGI中，然后当它接受到请求时，会按照WSGI定义的接口回调web应用处理（这就根我们把java web应用部署到Tomcat，然后Tomcat按照servlet规范回调我们web应用一个道理！），现在我们就看一个按照WSGI规范实现的web应用：simple_app.py
```sh    
    def simple_app(environ, start_response):
        status = '200 OK'
        response_headers = [('Content-type','text/plain')]
        start_response(status, response_headers)
        return ['Hello world!\n']

    application = simple_app # 若web应用部署在uWSGI容器中，需要这行代码
```    
其中environ是一个dict类型变量，里面主要包含各种HTTP请求头数据（类似CGI的环境变量），start_response是web服务器提供给web应用的回调接口，用来接受HTTP响应码以及HTTP响应头；最终函数返回对请求的处理结果（这里只是简单的返回一个"Hello World!"字符串）；当我们把这个web应用部署到uWSGI时，uWSGI会把接收到的请求按照指定协议解析，然后把解析的结果（譬如：HTTP各请求头数据）设置到environ变量中，接着按照WSGI规范回调web应用（uWSGI默认回调application函数，并且传递environ和start_response两个参数），最终web应用开始处理请求（各种数据库查询，各种函数调用...）并把结果返回给uWSGI；

无论是webpy还是django，由于它们都是按照WSGI规范实现的web框架，所以一定提供了类似接口供web服务器回调，譬如webpy：
```python
        def wsgifunc(self, *middleware):                                                                             
            # ...
            def wsgi(env, start_resp):
                self.load(env)
                # ...
                result = self.handle_with_processors()
                status, headers = web.ctx.status, web.ctx.headers
                start_resp(status, headers)         
                return result

            # 类似java web中的filter概念
            for m in middleware:
                wsgi = m(wsgi)
            return wsgi
```

uWSGI支持多种协议（包括HTTP协议），所以对于刚才例子，我们可以不使用nginx，而是直接把它当做HTTP服务器使用：

```sh
    # 注意这里的--http，表明采用http协议监听在80端口
    $ uwsgi --http 127.0.0.1:80 \
            --wsgi-file simple_app.py \
            --master --processes 2 \
            --daemonize /var/log/uwsgi.log \
            --pidfile /var/log/uwsgi.pid
    # 访问hello.htm
    $ curl http://127.0.0.1/hello.htm
    Hello world!
```

和Tomcat一样，由于nginx处理静态资源能力非常强悍，而且支持的并发数也高，同时能够提供负载均衡等功能，所以在生产环境中，我们通常采用nginx + uWSGI的方式部署python web应用，然后由nginx处理静态资源请求，对于“动态”请求，nginx **转发**给uWSGI处理:

    location / {
        include uwsgi_params;                                                                                
        uwsgi_pass 127.0.0.1:9090;
    }   

所以这段配置就是告诉nginx：对于满足条件的请求，请使用uwsgi协议转发给127.0.0.1:9090 处理；看到这里你也许有3个问题：
 1. uwsgi_pass和proxy_pass有什么区别？
 2. 为什么要使用uwsgi协议转发？
 3. uWSGI与uwsgi什么关系？

**问题1：** proxy_pass指令也是把请求转发给其他服务器处理，但是默认采用HTTP协议（可以理解成，nginx收到什么，它就转发什么），而当使用uswgi_pass命令时，nginx会先把请求按照按照uwsgi协议转换（http -> wsgi），然后再转发给其他服务器处理；**问题2：**为什么要要使用uwsgi协议转发？这其实是从效率上考虑的，http协议本身是一个文本协议，虽然它对人很友好（可读性强），但是对计算机来说就不太友好了，解析起来非常耗时，所以在转发之前先把转换成其他协议（通常是二进制协议，譬如这里的uwsgi)；**问题3：** uWSGI是一个支持WSGI规范的web容器，它支持多种协议，其中一个就是uwsgi协议，所以uWSGI是两个完全不同的东西，只是名称相似而已;

至此，相信你对刚才那些配置已经非常清楚，而且无论是采用uWSGI或者flup部署web应用，又或者采用uwsgi协议还是fastcgi协议，其实它们的本质是一样的，只要我们结合效率以及方便性采取一种最适合的方式即可；顺便提一下uWSGI还提供了一个工具:uwsgitop命令，用来检测自身运行状态：

    # 下载安装文件：
    https://github.com/unbit/uwsgitop.git

    # 启动uWSGI，并添加--stats参数
    uwsgi ...  --stats 127.0.0.1:9191

    # 运行uwsgitop命令
    uwsgitop 127.0.0.1:9191


你可以在另一个终端执行下面命令： for i in $(seq 100); do curl http://127.0.0.1/hello.htm; done，然后观察数据有何变化
