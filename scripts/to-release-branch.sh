if [ ! "$1" ]
then
echo Please provide a release commit message!
exit
fi

main_branch=working

git checkout releases
git merge origin/$main_branch --no-edit
npm run build
rm .gitignore
git add build
git add src
git commit -m "$1"
git checkout -- .gitignore
git push -f
git checkout $main_branch