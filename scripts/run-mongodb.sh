#!/bin/bash
docker run -d --name mongodb -p 27017:27017 -p 28017:28017 $1
