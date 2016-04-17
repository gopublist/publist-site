DID THIS on server
https://stackoverflow.com/questions/11961400/getting-rid-of-git-usr-local-lib-libz-so-1-no-version-information-available


# uname -a
Linux webapp.tygers.nl 2.6.32-042stab112.15 #1 SMP Tue Oct 20 17:22:56 MSK 2015 x86_64 x86_64 x86_64 GNU/Linux

# cat /etc/redhat-release
CentOS release 6.7 (Final)

For CentOS 7:
- https://github.com/hellstad/meteor-please

For CentOS 6:
- https://www.npmjs.com/package/mup-centos-6
- sudo chmod +x /etc/init.d/tygers-webapp


  ProxyRequests off

  <Proxy *>
     Order deny,allow
     Allow from all
  </Proxy>
  <Location />
      ProxyPass http://127.0.0.1:3000/
      ProxyPassReverse http://127.0.0.1:3000/
  </Location>

OR

<VirtualHost |IP|:80>
   ServerName cp.|DOMAIN|
   ProxyRequests Off
   ProxyPass / http://127.0.0.1:2222/
   ProxyPassReverse / http://127.0.0.1:2222/
</VirtualHost>

> 

setsebool -P httpd_can_network_connect=1
http://serverfault.com/questions/382076/apache-proxy-not-working-for-a-localhost-port

>


netstat -tlpn

> 

http://moonlightbox.logdown.com/posts/2016/02/05/linux-http-disabled-connection-for-127001

> 

npm install in `server` folder

> 

Set MONGO_URL, basically this:
http://stackoverflow.com/questions/25581301/meteor-0-9-modulus-deployment-doesnt-work-cannot-find-module-fibers




  $ (cd programs/server && npm install)
  $ export MONGO_URL='mongodb://user:password@host:port/databasename'
  $   
  $ export MAIL_URL='smtp://user:password@mailhost:port/'
  $ node main.js


> 

export PORT=80 MONGO_URL=mongodb://localhost:27017/tygersmagazine ROOT_URL=http://tygersmagazine.nl


=============================

sudo service tygers-webapp start


# setup environment variables
export MONGO_URL='mongodb://localhost'
export ROOT_URL='http://example.com'
export PORT=3000

      "ROOT_URL": "http://tygersmagazine.nl",
      "MONGO_URL": "mongodb://localhost:27017/tygersmagazine",


http://tygersmagazine.nl

mplzc6 deploy


killall node

export MONGO_URL='mongodb://localhost:27017/tygersmagazine'
export PORT=3000
export ROOT_URL='http://tygersmagazine.nl'
cd /opt/tygers-webapp/bundle/
forever stopall
forever main.js &




mplzc6 reconfig

================================================++DIT:==
================================================++DIT:==
================================================++DIT:==

# https://www.phusionpassenger.com/library/walkthroughs/deploy/meteor/aws/apache/enterprise/wheezy/deploy_app.html

meteor build ../output
scp -i your_ec2_key.pem ../output/package.tar.gz tuxion@tuxion.nl -p 10622
ssh -i your_ec2_key.pem tuxion@tuxion.nl -p 10622

sudo adduser publist

PASSWD: xnCGlxku54hMk0yuNwX3

sudo mkdir -p ~publist/.ssh
touch $HOME/.ssh/authorized_keys
sudo sh -c "cat $HOME/.ssh/authorized_keys >> ~publist/.ssh/authorized_keys"
sudo chown -R publist: ~publist/.ssh
sudo chmod 700 ~publist/.ssh
sudo sh -c "chmod 600 ~publist/.ssh/*"

sudo mkdir -p /var/www/publist.nl

cd /var/www/publist.nl
tar xzf ~/package.tar.gz
chown -R publist: .

sudo apt-get install -y mongodb

sudo -u publist -H bash -l

cd /var/www/publist.nl/bundle/programs/server
npm install --production

====================

# 1. LOKAAL

cd /var/www/publist/
meteor build ../output
scp -P 10622 ../output/publist.tar.gz publist@tuxion.nl:/var/www/publist/publist.tar.gz
> PASS xnCGlxku54hMk0yuNwX3

# 2. SERVER

sudo -u publist -H bash -l

cd /var/www/publist
tar xzf publist.tar.gz

cd /var/www/publist/bundle/programs/server
npm install --production

export MONGO_URL='mongodb://localhost:27017/publist'
export PORT=3000
export ROOT_URL='http://publist.nl'
cd /var/www/publist/bundle/
forever stopall
forever main.js &
