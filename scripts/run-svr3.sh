#!/bin/bash
docker run -d --name mysql -p 3307:3306 -p 33061:33060 $1
