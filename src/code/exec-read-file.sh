exec 3>&1
exec > $LOGFILE
exec 1>&3 3>&-

