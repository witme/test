一、ECS运行命令：
forever start -a -l /home/data/log/app.log -o /home/data/log/app.out.log -e /home/data/log/app.err.log index.js

二、path中无forever路径
在当前shell下PATH=$PATH:/home/node/bin,仅针对当前shell生效

三、
