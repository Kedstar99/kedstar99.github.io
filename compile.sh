#!/usr/bin/env bash
cd pug || exit
pug index.pug index.html
pug projects.pug projects.html
mv ./*.html ../
