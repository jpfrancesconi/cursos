$(function() {
    console.log( "Hi Juan!" );
    // const header = document.getElementById('app-header');
    const header = $('#app-header');
    const h1 = $('h1', header[0]);
    console.log(h1);
    //$(h1).html('<h1>Ahora tiene este valor</h1>');

    // tip to acces to some elements
    // $('#app-header').find('h1')
    // $('#app-header').has('.title')
    // $('#app-header').not('.title')
    // $('p').filter('.text')

    const $a = $('<a>', {
        href: 'https://analisis.com.ar',
        target: '_blank',
        title: 'ir a analisis digital',
        text: 'ir a analisis digital'
    })
    //$('#app-body').append($a)

    $a.attr({
        href: 'https://google.com',
        html: 'Otro'
    })

    // setTimeout(() => {
    //     $('.title').toggleClass('danger')
    // }, 1500);
});

// Other way to do this before
//$(document).ready(function() {
//    alert('ready');
//});

// Examplo of wondow.onload function
// window.onload = function() {
//     alert('loaded');
// }


/* ********************************* Refinamiento de selecciones ****************************************************

$('div.foo').has('p');          // el elemento div.foo contiene elementos <p>
    $('h1').not('.bar');            // el elemento h1 no posse la clase 'bar'
    $('ul li').filter('.current');  // un item de una lista desordenada
                                    // que posse la clase 'current'
    $('ul li').first();             // el primer item de una lista desordenada
    $('ul li').eq(5);               // el sexto item de una lista desordenada, siempre empieza en 0

/** seudo selectores **/ 
/*
:button
Selecciona elementos <button> y con el atributo type='button'
:checkbox
Selecciona elementos <input> con el atributo type='checkbox'
:checked
Selecciona elementos <input> del tipo checkbox seleccionados
:disabled
Selecciona elementos del formulario que están deshabitados
:enabled
Selecciona elementos del formulario que están habilitados
:file
Selecciona elementos <input> con el atributo type='file'
:image
Selecciona elementos <input> con el atributo type='image'
:input
Selecciona elementos <input>, <textarea> y <select>
:password
Selecciona elementos <input> con el atributo type='password'
:radio
Selecciona elementos <input> con el atributo type='radio'
:reset
Selecciona elementos <input> con el atributo type='reset'
:selected
Selecciona elementos <options> que están seleccionados
:submit
Selecciona elementos <input> con el atributo type='submit'
:text
Selecciona elementos <input> con el atributo type='text'

$('#myForm :input'); // obtiene todos los elementos inputs
                         // dentro del formulario #myForm

Encadenamiento

$('#content').find('h3').eq(2).html('nuevo texto para el tercer elemento h3');


Obtener propiedades CSS

$('h1').css('fontSize'); // devuelve una cadena de caracteres como "19px"
    $('h1').css('font-size');

Establecer propiedades CSS

$('h1').css('fontSize', '100px'); // establece una propiedad individual CSS
    $('h1').css({ 
        'fontSize' : '100px',
        'color' : 'red'     
    }); // establece múltiples propiedades CSS

Trabajar con clases

var $h1 = $('h1');
    
    $h1.addClass('big');
    $h1.removeClass('big');
    $h1.toggleClass('big');
    
    if ($h1.hasClass('big')) { ... }

Métodos básicos sobre Dimensiones

$('h1').width('50px');   // establece el ancho de todos los elementos H1
    $('h1').width();         // obtiene el ancho del primer elemento H1
    
    $('h1').height('50px');  // establece el alto de todos los elementos H1
    $('h1').height();        // obtiene el alto del primer elemento H1
    
    $('h1').position();      // devuelve un objeto conteniendo
                             // información sobre la posición
                             // del primer elemento relativo al
                             // "offset" (posición) de su elemento padre

Establecer atributos

$('a').attr('href', 'index.html');
    $('a').attr({
        'title' : 'all titles are the same',
        'href' : 'index.html'
    });
**/