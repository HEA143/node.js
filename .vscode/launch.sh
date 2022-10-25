#!/bin/bash
r=${1:(-5)}
echo $r
if [ $r = .html ]; then #  this is the snag
    explorer.exe "http://localhost:3000/$1"
else
    node $1
fi
