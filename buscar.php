<?php
$servidor="localhost";
$usuario="rosas";
$clave="Noemi123tigasi";
$base="registro";
$tabla="pedido";

$codigo-$_POST['codigo'];


$conexion=mysqli_connect($servidor,$usuario,$clave) or die ("error en la conexion del servidor");
$bases=mysqli_select_db($conexion,$base) or die ("error al conectarse con la base de datos");

$resultado=mysqli_query($conexion,"SELECT * FROM pedido where nombre='$nombre'") or die ("error al conectar con ta tabla");
while ($resultado=mysqli_fetch_array($resultado)) {
    echo $resultado['nombre']," ",$resultado['nombre'];
}
?>