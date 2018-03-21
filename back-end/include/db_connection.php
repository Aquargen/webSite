<?php
/**
 * Created by PhpStorm.
 * User: nikolay
 * Date: 26.02.18
 * Time: 10:32
 */

define('MYSQL_HOSTNAME', 'localhost:3306');
define('MYSQL_USERNAME', 'aquargen_admin');
define('MYSQL_PASSWORD', 'liverpool8fc');
define('MYSQL_DATABASE', 'aquargen_aquargen_db');

//require_once('mysql_db.class.php');

$db = new mysql_db();
$db->connect(MYSQL_HOSTNAME, MYSQL_USERNAME, MYSQL_PASSWORD) or die(mysql_error());
$db->select_db(MYSQL_DATABASE) or die(mysql_error());
$db->set_magic_quotes_off();

echo"Great Woork!";
?>