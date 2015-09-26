
# Install essential packages
sudo apt-get update
sudo apt-get upgrade
sudo apt-get -y install mc vim git 2> /dev/null
sudo apt-get -y install build-essential libbz2-dev libfreetype6-dev libgdbm-dev python-dev 2> /dev/null
sudo apt-get -y install python-virtualenv 2> /dev/null

# Configure date
echo 'TZ='Europe/Warsaw'; export TZ' > ~/.profile
sudo ntpdate-debian
# Install and Create Database
db_pass='root'
db_user='root'

sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password $db_pass"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password_again password $db_pass"
sudo apt-get -y install mysql-server 2> /dev/null
sudo apt-get -y install libmysqlclient-dev 2> /dev/null

mysqladmin -u root create rura --password=$db_pass
# Create virtualenv for python
virtualenv /home/vagrant/
if [ `grep 'venv' ~/.profile | wc -l` = 0 ]; then
echo "source bin/activate; cd project" >> ~/.profile
echo "export SECRET_KEY='7alq3tbff#!07hj3v2$m@xbxck&k1-087qx(*d&1eix-8!7u_+'" >> ~/.profile
echo "export DJANGO_SETTINGS_MODULE=config.settings.local" >> ~/.profile
echo "export DB_PASS=$db_pass" >> ~/.profile
echo "export DB_USER=$db_user" >> ~/.profile
# echo "venv" >> ~/.profile
fi
source bin/activate; pip install -r ~/project/requirements/local.txt
