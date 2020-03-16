#!/bin/bash

#
# https://medium.com/@svinkle/start-a-local-live-reload-web-server-with-one-command-72f99bc6e855
#
# install:  npm install -g browser-sync
#

#
# file: ~/.bashrc or ~/.bash_profile or even ~/.profile
#

clear
LOCAL_IP=`ipconfig getifaddr en0`
browser-sync start -s -f . --no-notify --host ${LOCAL_IP} --port 9000

#
# other options: browser-sync start --server --files . --no-open --no-ui --port 3000
#                browser-sync start -s -f . — no-notify — host `hostname -I` — port 9000
#

#
# usage: in the site's folder, type serve
#
