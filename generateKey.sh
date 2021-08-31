private='private.key'
if [ ! -e "$private" ];
then
   ssh-keygen -t rsa -b 4096 -m PEM -P '' -f private.key
fi
public='public.key'
if [ ! -e "$public" ];
then
   openssl rsa -in private.key -pubout -out public.key
fi