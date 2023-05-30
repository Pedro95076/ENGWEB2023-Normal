var axios = require('axios');

// Lista de plantas
module.exports.list = () => {
  return axios.get('http://localhost:3000/plantas?_sort=nome')
    .then(resposta => {
      return resposta.data;
    })
    .catch(erro => {
      return erro;
    });
};

module.exports.getPlanta = id => {
  return axios.get('http://localhost:3000/plantas/' + id)
    .then(resposta => {
      return resposta.data;
    })
    .catch(erro => {
      return erro;
    });
};

module.exports.addPlanta = p => {
  return axios.post('http://localhost:3000/plantas', p)
    .then(resposta => {
      return resposta.data;
    })
    .catch(erro => {
      return erro;
    });
};

module.exports.updatePlanta = p => {
  return axios.put('http://localhost:3000/plantas/' + p.id, p)
    .then(resposta => {
      return resposta.data;
    })
    .catch(erro => {
      return erro;
    });
};

module.exports.deletePlanta = id => {
  return axios.delete('http://localhost:3000/plantas/' + id)
    .then(resposta => {
      return resposta.data;
    })
    .catch(erro => {
      return erro;
    });
};
