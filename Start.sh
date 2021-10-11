#!/bin/bash
#这里使用的前提是通过ssh设置免密登录3
scp ./Deploy.sh root@110.42.210.34:/hx/vue_tools.sh
ssh -tt root@110.42.210.34 << eeooff
sh /hx/vue_tools.sh
exit
eeooff
echo done
