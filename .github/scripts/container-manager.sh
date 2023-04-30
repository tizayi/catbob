#!/bin/bash
function start() {
  git pull origin main
  sudo docker build -t myapp_image .
  sudo docker run -d --name myapp_container myapp_image
}

function stop() {
  sudo docker stop myapp_container 
  sudo docker rm myapp_container
  sudo docker rmi myapp_image
}

function restart() {
  stop
  start
}

function_exists() {
  declare -f -F $1 > /dev/null
  return $?
}

if [ $# -lt 1 ]
then
  echo "Usage : $0 start|stop|restart "
  exit
fi

case "$1" in
  start)    function_exists start && start
          ;;
  stop)  function_exists stop && stop
          ;;
  restart)  function_exists restart && restart
          ;;
  *)      echo "Invalid command - Valid->start|stop|restart"
          ;;
esac