#!/bin/bash
cd /home/ubuntu/BookDam/server
authbind --deep pm2 start app.js
