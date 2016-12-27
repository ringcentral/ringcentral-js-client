if [ ! "$1" ]
then
echo Please provide a release commit message!
exit
fi

# Save the current branch
base_branch=`git rev-parse --abbrev-ref HEAD`

git checkout releases
if [ $? != "0" ]
then
	echo Fail to checkout releases branch.
	exit
fi

git merge $base_branch --no-edit

# clean all output
rm -rf build
rm -rf typings
rm src/**/*.js
rm src/**/*.js.map
rm test/**/*.js
rm test/**/*.js.map
git checkout -- typings/ringcentral.d.ts

# Build all output
. ./envsetup.sh
typings install
npm run build

# Commit output
rm .gitignore
git add build
git add src
git add test
git add typings
git checkout -- .gitignore
git commit -m "$1"

git push
git checkout $base_branch