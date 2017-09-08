<?php
$fecha=date("d-m-y");
$hora=date("h:i:s");
$destino="carolinajavierenriquez@gmail.com";
$asunto="Datos";
$desde='From:'.$_POST[email];
$mensaje="
 \n
 Nombre: $_POST[nombre]\n
 Email: $_POST[email]\n
 Consulta: $_POST[texto]\n
 Enviado: $fecha a las $hora\n
 \n
 ";
 mail($destino, $asunto, $comentario, $desde); 
 ?>