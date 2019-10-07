./stopFabric.sh
./teardownFabric.sh
./teardownAllDocker.sh
1
docker rmi $(docker images dev-* -q)
composer card delete -c admin@picert 
composer card delete -c PeerAdmin@fabric-network 
