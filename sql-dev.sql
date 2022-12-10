insert into wea.approveds (
    transactionHash,
    chainId,
    symbol,
    owner,
    spender,
    note
)
VALUES(
    '${transactionHash}',
    '${chainId}',
    '${symbol}',
    '${owner}',
    '${spender}',
    $ { note }
);

-- reset password root
use mysql;
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';
flush privileges;
quit

mysql -u root -p

-- permission
CREATE USER 'muser' @'localhost' IDENTIFIED BY 'password';
CREATE USER 'muser' @'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'muser' @'localhost'  WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'muser' @'%' WITH GRANT OPTION;

mysql -u muser -p wea < wea.sql
create database wea;


-- check users
select host, user, password, max_connections, max_user_connections, Grant_priv from mysql.user;

-- change password
ALTER USER 'muser' @'%' IDENTIFIED BY 'NEW_USER_PASSWORD';
FLUSH PRIVILEGES;

-- import wea
mysql -u muser -p wea < wea.sql

-- check tables in database
use wea;
show tables;

-- clear data
truncate table approveds;
truncate table transfereds;
truncate table transfererrors;

select * from transfererrors;
