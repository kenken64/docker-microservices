#!/bin/bash
docker inspect nginx | grep -i 'port'
