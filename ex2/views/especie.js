<!DOCTYPE html>
<html>
<head>
  <title>Espécie</title>
</head>
<body>
  <h1><%= especie.nome %></h1>
  <h2>Designação Científica: <%= especie.designacaoCientifica %></h2>
  <table>
    <tr>
      <th>_id</th>
      <th>Freguesia</th>
      <th>Estado</th>
      <th>Número de intervenções</th>
    </tr>
    <% especie.registros.forEach(registro => { %>
    <tr>
      <td><%= registro._id %></td>
      <td><%= registro.freguesia %></td>
      <td><%= registro.estado %></td>
      <td><%= registro.intervencoes %></td>
    </tr>
    <% }); %>
  </table>
  <a href="/">Voltar à página principal</a>
</body>
</html>
