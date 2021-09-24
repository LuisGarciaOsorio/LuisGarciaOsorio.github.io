function quickgit(){
  git add .
  git commit -a -m "$*"
  git push
}
alias quickgit = '~/quickgit'

"This page was supposed to provide a quick shortcut to doing all three git functions, lines are good, but implementation needs work"