original_dir=`pwd`
cd ./node_modules/.bin
if [ $? != '0' ]; then
echo Fail to setupenv. This script should be executed in the project root directory.
return
fi;
export PATH=`pwd`:$PATH
cd $original_dir