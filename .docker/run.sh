#!/bin/sh -e

export PATH="${PATH}:/e2e/node_modules/.bin"

if [ -z "$1" ]; then
  npm run cy:regression -- --reporter cypress-multi-reporters --reporter-options configFile=reports.json
elif [ "$1" = "open" ]; then
  npm run cy:open
elif [ "$1" = "merge" ]; then
  junit-merge -r -d cypress/report/ -o cypress/report/merged.xml || true
else
  echo "Running $@"
  "$@"
fi
