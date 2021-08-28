// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min =  max - 10;

console.log(max);
console.log(min);

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); //Muestra los comentarios al cargar

    // Llena las opciones de años
});


// Funciones
function mostrarAutos() {
    autos.forEach(auto => {

        const { marca, modelo, year, puerta, transmision, precio, color  } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisiíon: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        // Insertar en el HTML
        resultado.appendChild(autoHTML);

    });
}

// Genera los años del select
function llenarSelect() {
    
}