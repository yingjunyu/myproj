# myproj

##5月8日

>1、实现了从指定的sinablog网址获取blog的连接和文字信息。
>2、实现了将获取到的连接和文字信息存入：1）、mysql数据库；2）、mongodb数据库。可选。
>3、在congfig.js中实现了对：1）、mysql数据库连接的配置；2）、mongodb数据库连接的配置；3）、sinablog网址的配置；4）、服务器端口（下一步开发预留）；5）、定时执行更新任务时间设置（下一步开发预留）。
>4、在model.js中使用了mongoose实现了对mongodb的模型定义。
>5、update目录下read.js实现了获取数据的代码，save.js实现了保存数据的代码，all-1.js可执行数据获取保存的工作，使用命令node all-1.js即可。