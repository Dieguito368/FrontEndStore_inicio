'use script';

document.addEventListener('DOMContentLoaded', () => {
    const paginaActual = window.location.href;

    if(paginaActual.includes('index.html')) {
        const divProductos = document.querySelectorAll('.producto');

        divProductos.forEach(divProducto => {
            const nombreProducto = divProducto.children[1].children[0].textContent;
    
            const producto = divProducto.children[0];

            producto.setAttribute('href', 'producto.html?' + nombreProducto);
        });

        
        
    } else {
        const url = window.location.href;
        const split = url.split('?')
        const nombre = split[1];

        document.querySelector('h1').textContent = nombre;
        document.querySelector('.camisa img').setAttribute('src', 'img/' + nombre + '.jpg');

        console.log(nombre);
    }


    

    
});