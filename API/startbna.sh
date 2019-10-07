composer card create -p connection.json -u PeerAdmin -c Admin@org1.example.com-cert.pem -k 114aab0e76bf0c78308f89efc4b8c9423e31568da0c340ca187a9b17aa9a4457_sk -r PeerAdmin -r ChannelAdmin
composer card import -f PeerAdmin@fabric-network.card
composer network install -c PeerAdmin@fabric-network -a picert@0.0.6.bna
composer network start --networkName picert --networkVersion 0.0.6 -A admin -S adminpw -c PeerAdmin@fabric-network
composer card import -f admin@picert.card
composer-rest-server  -c admin@picert -n never -p 3000