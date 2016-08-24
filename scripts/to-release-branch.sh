if [ ! "$1" ]
then
echo Please provide a release commit message!
exit
fi

# Save the current branch
base_branch=`git rev-parse --abbrev-ref HEAD`

git checkout releases
git merge origin/$base_branch --no-edit
npm run build
rm .gitignore
git add build
git add src
git commit -m "$1"
git checkout -- .gitignore
git push -f
git checkout $base_branch