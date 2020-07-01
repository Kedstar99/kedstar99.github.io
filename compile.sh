#!/usr/bin/env bash
cd pug || exit
../node_modules/.bin/pug  index.pug index.html
../node_modules/.bin/pug  projects.pug projects.html
mv ./*.html ../
