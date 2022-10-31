#!/bin/bash
if [ $fileExtname = .html ]; then #  this is the snag
    explorer.exe $URL || true
else
    node $file
fi
