exec 3>&1
exec > $LOGFILE
echo “Log this”
echo “Log that”
exec 1>&3 3>&-
