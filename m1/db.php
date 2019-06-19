 <?php
  session_start();
  
  $db = new mysqli("localhost","heee90","dlwngml21!","heee90");
  $db->set_charset("utf8");

  function mq($sql){
    global $db;
    return $db->query($sql);
  }

  ?>