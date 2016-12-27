#!/usr/bin/env bash

original_dir=`pwd`
cd ./node_modules/.bin
if [ $? != '0' ]; then
echo Fail to setupenv. This script should be executed in the project root directory.
return
fi;

local_bin=`pwd`;
cd $original_dir;

if [ $PATH != *$local_bin* ]
then
  export PATH=$local_bin:$PATH;
fi