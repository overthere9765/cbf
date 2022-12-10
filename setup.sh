# install nodejs
sudo apt update
sudo apt install nodejs
sudo apt install npm
npm i pm2 -g
npm i nodemon -g
node -v

mkdir data
# install LAMP
sudo -- sh -c 'apt update && apt upgrade'
sudo apt install apache2 php libapache2-mod-php php-gd php-mysql
sudo ufw allow in "WWW Full"
sudo ufw allow www
sudo ufw allow https
sudo ufw status
sudo systemctl start apache2.service
sudo systemctl status apache2.service

sudo apt install mariadb-server
mysql -u root -p
sudo mysql_secure_installation
sudo ufw allow 1000/tcp
sudo ufw allow 3000/tcp
sudo ufw allow 3001/tcp
# public database
sudo iptables -A INPUT -p tcp --destination-port 3306 -j ACCEPT
sudo iptables -A INPUT -p tcp --destination-port 3001 -j ACCEPT
sudo ufw allow 3306/tcp

# start service
sudo systemctl start mysql
sudo systemctl status mysql

# import database 
mysql -u muser -p wea < wea.sql

# backup database
mysqldump wea > wea.sql 