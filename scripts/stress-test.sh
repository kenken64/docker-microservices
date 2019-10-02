#!/bin/bash
# sudo npm install -g artillery --unsafe-perm=true --allow-root
artillery quick --count 2000 -n 200000000 http://172.17.0.4:8080/api/tasks
