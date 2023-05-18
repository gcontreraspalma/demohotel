const express = require('express');
const app = express();

// Objeto que contiene los datos y números de teléfono
const datosSucursales = {
  "Explorean": {
    "Celestún":{
      "telefono": 523338809200
    }, 
    "Cozumel":{
      "telefono": 529878729600
    }, 
    "Kohunlich":{
      "telefono": 525552018350
    }, 
  },
  "One":{
    "Guadalajara":{
      "Expo":{
        "telefono": 523338809200
      },
      "Periférico Norte":{
        "telefono": 523330550000 
      }
    },
    "Mexicali":{
      "telefono": 526869055100
    }
  }
}

// Ruta POST para recibir los parámetros y buscar el número de teléfono
app.get('/', (req, res) => {
  return res.status(200).json({'status': 'alive?'})
})
app.post('/buscar-telefono', (req, res) => {
  const { nombre, ubicacion, sucursal } = req.body;
  console.log(req.body)
  if (!nombre || !ubicacion ) {
    return res.status(400).json({ mensaje: 'Faltan parámetros requeridos' });
  }

  const sucursalEncontrada = datosSucursales[nombre];

  if (!sucursalEncontrada) {
    return res.status(404).json({ mensaje: 'Sucursal no encontrada' });
  }

  if(sucursal === "" || !sucursal){
    if(sucursalEncontra[ubicacion]){
      return res.json({ telefono: sucursalEncontra[ubicacion].telefono });
    } else {
      return res.status(404).json({ mensaje: 'No se encontró coincidencia' });
    }
  }else{
    if(sucursalEncontra[ubicacion] && sucursalEncontra[ubicacion][sucursal]){
      return res.json({ telefono: sucursalEncontra[ubicacion].telefono });
    } else {
      return res.status(404).json({ mensaje: 'No se encontró coincidencia' });
    }
  }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
