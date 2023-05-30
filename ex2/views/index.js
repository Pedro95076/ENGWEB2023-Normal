<!DOCTYPE html>
<html>
<head>
  <title>Exercício do teste de EW2023</title>
  <style>
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>
  <h1>Exercício do teste de EW2023</h1>
  <table>
    <tr>
      <th>_id</th>
      <th>Freguesia</th>
      <th>Espécie</th>
      <th>Estado</th>
      <th>Número de intervenções</th>
    </tr>
    <% plantas.forEach(planta => { %>
      <tr>
        <td><a href="/plantas/<%= planta._id %>"><%= planta._id %></a></td>
        <td><%= planta.freguesia %></td>
        <td><a href="/especies/<%= planta.especie %>"><%= planta.especie %></a></td>
        <td><%= planta.estado %></td>
        <td><%= planta.intervencoes.length %></td>
      </tr>
    <% }) %>
  </table>
</body>
</html>
