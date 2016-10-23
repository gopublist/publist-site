cd ~/htdocs/publist/
meteor build ../output
scp -P 10622 ../output/publist.tar.gz publist@tuxion.nl:/var/www/publist/publist.tar.gz
