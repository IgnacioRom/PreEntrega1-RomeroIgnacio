//Bienvenida
alert ('Bienvenidos a Growler Café! En breve estaremos brindandole nuestra carta de productos');
function mostrarMenu() {
    const menu = `Para beber:
    Flat White = $500
    Mocha = $600
    Latte = $500
    Café Helado = $600

    Para comer:
    Roll de Canela = $650
    Porción torta del día = $900
    Medialuna Jamón y Queso = $400
    Avocado Toast = $800`;
    alert(menu);
}
// Variables y precios
let flatWhite = 500;
let mocha = 600;
let latte = 500;
let cafeHelado = 600;
let rollCanela = 650;
let tortaPorcion = 900;
let medialunaJyq = 400;
let avocadoToast = 800;
let totalBebida = 0;
let totalComida = 0;

alert('Pasemos a realizar el pedido, por favor ingrese el número del producto que desea.')

mostrarMenu();

let pedidoBebida = parseInt(prompt (`Bebidas:\n 1) Flat White\n 2) Mocha\n 3) Latte\n 4) Café Helado.\n Ingrese el número de su pedido`));

if (pedidoBebida == 1) {
    totalBebida = flatWhite;
    alert (`Usted ha pedido un Flat White, el precio es de $${flatWhite}`);
} else if (pedidoBebida == 2) {
    totalBebida = mocha;
    alert (`Usted ha pedido un Mocha, el precio es de $${mocha}`);
} else if (pedidoBebida == 3) {
    totalBebida = latte;
        alert (`Usted ha pedido un Latte, el precio es de $${latte}`);
    } else if (pedidoBebida == 4) {
        totalBebida = cafeHelado;
            alert (`Usted ha pedido un Café Helado, el precio es de $${cafeHelado}`);
        } else {
                alert ('El número ingresado no corresponde a ninguna bebida, por favor vuelva a intentarlo');
            }

let pedidoComida = parseInt(prompt (`Comidas:\n 5) Roll de Canela\n 6) Torta porción\n 7) Medialuna Jamón y Queso\n 8) Avocado Toast.\n Ingrese el número de su pedido`));

if (pedidoComida == 5) {
    totalComida = rollCanela;
    alert (`Usted ha pedido un Roll de Canela, el precio es de $${rollCanela}`);
} else if (pedidoComida == 6) {
    totalComida = tortaPorcion;
    alert (`Usted ha pedido una porción de torta, el precio es de $${tortaPorcion}`);
} else if (pedidoComida == 7) {
    totalComida = medialunaJyq;
    alert (`Usted ha pedido una Medialuna Jamón y Queso, el precio es de $${medialunaJyq}`);
} else if (pedidoComida == 8) {
    totalComida = avocadoToast;
    alert (`Usted ha pedido un Avocado Toast, el precio es de $${avocadoToast}`);
} else {
    alert ('El número ingresado no corresponde a ninguna comida, por favor vuelva a intentarlo');
}

let totalPedido = totalBebida + totalComida;

// Envio del pedido
alert ('Para continuar con el pedido, necesitamos sus datos y metodo de entrega');
let nombre = prompt ('Ingrese su nombre');
let apellido = prompt ('Ingrese su apellido');
let direccion = prompt ('Si desea recibir su pedido a domicilio, ingrese "si" de lo contrario, ingrese "no"');
if (direccion.toLowerCase() == 'si') {
    let calle = prompt ('Ingrese su calle');
    let altura = prompt ('Ingrese su altura');
    let piso = prompt ('Ingrese su piso');
    let departamento = prompt ('Ingrese su departamento');
    alert (`Todo listo ${nombre}! El costo de su pedido es $${totalPedido} y será enviado a ${calle} ${altura} ${piso} ${departamento}`);
} else {
    alert (`El costo de su pedido es $${totalPedido}. Nuestra dirección es Moreno 1835, nuestras puertas están abiertas de 8 a 00hs`);
}

alert ('Gracias por elegirnos, esperamos que disfrute su pedido!');

