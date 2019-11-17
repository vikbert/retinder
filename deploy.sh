#!/usr/bin/env sh
set -e
DATE=$(date '+%Y-%m-%d %H:%M:%S')


### this will build the md fiels into html static pages, then publish htmls to gh-pages branch
yarn build
cd build

git init
git add -A
git commit -m "deploy: github gh-pages $DATE"
git push -f https://github.com/vikbert/retinder.git master:gh-pages

cd -
git pull
