<?php
$servidor="localhost";
$usuario="rosas";
$clave="Noemi123tigasi";
$base="registro";
$tabla="pedido";

$codigo=$_POST['codigo'];

$conexion=mysqli_connect($servidor,$usuario,$clave) or die ("error en la conexion del servidor");
$bases=mysqli_select_db($conexion,$base) or die ("error al conectarse con la base de datos");

mysqli_query($conexion,"DELETE FROM pedido where codigo='$codigo'") or die ("error al conectar con ta tabla");
mysqli_close($conexion);
echo("Los datos se han guardado exitosamente");
?>