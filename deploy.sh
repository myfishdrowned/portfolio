#!/bin/bash
git add .
git commit -m "Remove corrupted yarn.lock file to fix Netlify deployment"
git push origin main 