(() => {


    //Definición de variables
    const enviarBtn = document.getElementById("enviar");
    const usuariohtml = document.getElementById("usuario");
    const passworhtml = document.getElementById("password");

    const contenedorArticulos = document.querySelector("#contenedor-articulos");
    const articulosDb = [
        {
            img: 'https://www.trabajo.gob.hn/wp-content/uploads/2024/06/DSC_8275-1024x487.jpg',
            title: 'Es Oficial: SIHCAL ya fue publicado en la Gaceta',
            date: 'feb, 1 2024 | Noticias',
            description: 'Hola como estamos'
        },

        {
            img: 'https://www.trabajo.gob.hn/wp-content/uploads/2024/06/Imagen-de-WhatsApp-2024-05-17-a-las-14.57.56_b25ac2a1-1024x828.jpg',
            title: 'Muchos exitos ministra',
            date: 'Jun 30, 2024 | Noticias',
            description: 'Seria, enfocada y altamente responsable de la investidura confiada a su persona por la primera mujer presidenta de Honduras, Xiomara Castro Sarmiento. Así se describe la fructífera gestión de la Abogada y Dra. Lesly Sarahí Cerna durante su paso por la Secretaría de...'
        }
    ]

    enviarBtn.addEventListener("click", (evento) => {
        if (usuariohtml.value != " " && passworhtml.value != " ") {
            alert("Bienvenido" + usuariohtml.value, + " ingresado");
        }
        else {
            alert("Ingrese los datos porfa");
        }

    })

    const agregarArticulos = (articulo) => {
        let{ img,title,date,description} = articulo;
        contenedorArticulos.innerHTML += `<article>
                <img src= "${img}" alt="imagen de la gaceta">
                <h2>${title}</h2>
                <p>${date}</p>
                <p>${description}</p>
            </article>`;
    }

    articulosDb.map((articulo) => {
        agregarArticulos(articulo);
    });
    



})();

/*    let objeto = {
       nombre: "Otoniel",
       email: "oaguirre@trabajo.gob.hn",
       saludar: (saludo) => {
           console.log("Hola" + saludo);
       }
   }

   console.log(objeto);
   console.log(objeto.saludar("PERROS")) */