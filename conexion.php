<?php
$servidor="localhost";
$usuario="rosas";
$clave="Noemi123tigasi";
$base="registro";
$tabla="pedido";

$codigo=$_POST['codigo'];
$nombre=$_POST['nombre'];
$correo=$_POST['correo'];
$cantidad=$_POST['cantidad'];

$conexion=mysqli_connect($servidor,$usuario,$clave) or die ("error en la conexion del servidor");
$bases=mysqli_select_db($conexion,$base) or die ("error al conectarse con la base de datos");
$insertar="insert into pedido value('$codigo','$nombre','$correo','$cantidad')";
$resultado=mysqli_query($conexion,$insertar) or die ("error al conectar con ta tabla");
mysqli_close($conexion);
echo("Los datos se han guardado exitosamente");
?>