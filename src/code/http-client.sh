exec 3<>/dev/tcp/google.com/80
echo -e "GET / HTTP/1.1\r\nhost: google.com\r\nConnection: close\r\n\r\n" >&3
cat <&3 
