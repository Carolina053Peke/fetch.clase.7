// Utilizamos la funcion fetch() para acceder y manipular la informacion que nos devuelve la API de Random user
fetch('https://randomuser.me/api/')
  .then(function (response) {
    return response.json(); //el metodo json extrae el contenido para utilizarlo como un objeto Javascript
  })
  .then(function (objetoJson) {
    //dentro de este bloque ejecutamos la funciones que queremos implementar con la informacion obtenida
    console.log('Imprimimos el resultado buscado');
    console.log(objetoJson);
    const randomUser = objetoJson.results[0];
    const usuario = {
      nombre: randomUser.name.first,
      apellido: randomUser.name.last,
      foto: randomUser.picture.large,
      mail: randomUser.email,
      telefono: randomUser.phone,
      lugar: randomUser.location
    }
    console.log('Nuestro usuario filtrado quedó asi:');
    console.log(usuario);
    // Utilizamos la funcion crearTarjeta()
    crearTarjeta(usuario);
  });

// Creamos una funcion para "crearTarjeta" una estructura en pantalla
// esta recibe todos los parametros dinamicos que nosotros deseemos implementar
function crearTarjeta(persona) {
  let body = document.getElementById('main');
  body.innerHTML = `
          <section class="tarjeta">
            <img src="${persona.foto}" alt="">
            <h1>Hola soy <span>${persona.nombre} ${persona.apellido}</span></h1>
            <h4>Desarrollador Web Frontend</h4>
            <hr>
            <a href="${persona.foto}">${persona.mail}</a>
            <h6>Localidad:</h6>
            <h5>${persona.lugar.city}, ${persona.lugar.country}</h5>
            <h6>Teléfono:</h6>
            <h5>${persona.telefono}</h5>
          </section>
            `;
};


