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
rm -rf build
rm -rf typings
git checkout -- typings/ringcentral.d.ts
. ./envsetup.sh
typings install
npm run build
rm .gitignore
git add build
git add src
git add typings
git commit -m "$1"
git checkout -- .gitignore
git push -f
git checkout $base_branch