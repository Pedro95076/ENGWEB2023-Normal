<!DOCTYPE html>
<html>
<head>
  <title>Registro</title>
</head>
<body>
  <h1>Registro</h1>
  <table>
    <tr>
      <th>_id</th>
      <th>Freguesia</th>
      <th>Espécie</th>
      <th>Estado</th>
      <th>Número de intervenções</th>
    </tr>
    <tr>
      <td><%= registro._id %></td>
      <td><%= registro.freguesia %></td>
      <td><%= registro.especie %></td>
      <td><%= registro.estado %></td>
      <td><%= registro.intervencoes %></td>
    </tr>
  </table>
  <a href="/">Voltar à página principal</a>
</body>
</html>
