#!/bin/bash
# docker ps -a| grep vue_tools | awk '{print $1}' 这里会找到vue_tools字符串在的那行 并会找到以空格分隔的第一段字符串 也就是容器的id
if test -z "$(docker ps -a| grep vue_tools | awk '{print $1}')"; then
	echo "The result is empty."
else
  echo "The result is not empty and ready to remove it.."
	# 停止容器
	docker stop `docker ps -a| grep vue_tools | awk '{print $1}' `
	# 删除容器
	docker rm   `docker ps -a| grep vue_tools | awk '{print $1}' `
	# 删除容器镜像
	docker rmi -f registry.cn-hangzhou.aliyuncs.com/rancher_k8s_ks02/k8s:vue_tools
fi
#获取容器镜像
docker pull registry.cn-hangzhou.aliyuncs.com/rancher_k8s_ks02/k8s:vue_tools
# 运行容器，这里给容器命名为vue_tools
docker run -d -p 8088:80 --name=vue_tools registry.cn-hangzhou.aliyuncs.com/rancher_k8s_ks02/k8s:vue_tools
