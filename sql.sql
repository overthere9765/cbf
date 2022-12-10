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
create database wea;
-- permission
CREATE USER 'muser' @'localhost' IDENTIFIED BY 'uWnfj&20dsl';
CREATE USER 'muser' @'%' IDENTIFIED BY 'uWnfj&20dsl';
GRANT ALL PRIVILEGES ON *.* TO 'muser' @'localhost' IDENTIFIED BY 'PASSWORD' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'muser' @'%' IDENTIFIED BY 'PASSWORD' WITH GRANT OPTION;

GRANT ALL ON wea.* TO muser@'localhost' IDENTIFIED BY 'uWnfj&20dsl';
GRANT ALL ON wea.* TO muser@'%' IDENTIFIED BY 'uWnfj&20dsl';
GRANT ALL ON wea.* TO muser@'155.138.244.125' IDENTIFIED BY 'uWnfj&20dsl';

-- check users
select host, user, password, max_connections, max_user_connections, Grant_priv from mysql.user;
-- GRANT ALL PRIVILEGES ON `wea`.* TO 's' @'localhost';
-- change password
ALTER USER 'muser' @'%' IDENTIFIED BY 'NEW_USER_PASSWORD';
FLUSH PRIVILEGES;

-- import wea
mysql -u muser -p wea < wea.sql


-- clear data
truncate table approveds;
truncate table transfereds;
truncate table transfererrors;

select * from transfererrors;

mysql -u root -p

CREATE USER s IDENTIFIED by 'passwordS@1';
GRANT ALL ON wea.* TO 's'@'localhost';

FLUSH PRIVILEGES;
EXIT