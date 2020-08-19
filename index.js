import "./index.html";

document.getElementById("app").innerHTML = ` Hola jaja `;

class Carro {
    constructor(marca, color, velocidad, tipo, destino) {
    this.marca = marca;
    this.color = color;
    this.velocidad = velocidad;
    this.tipo = tipo;
    this.destino = destino;
    }
        armar() {
        console.log(
        `Escogiendo carro en el consesionario: ${this.marca}, ${this.tipo}, ${this.velocidad}, ${this.color} `
        );
        return this;
    }
        comprar() {
        setTimeout(() => console.log(`Compró el carro`), 1000);
        return this;
    }
        arrancar() {
        console.log(`Se montó al carro`);
        setTimeout(() => console.log(`¿A donde va? ${destino}`), 2000);
        setTimeout(() => console.log(`Enciende el carro`), 3000);
        setTimeout(() => console.log(`Pone cambio en primera`), 3000);
        setTimeout(() => console.log(`Avanza`), 5000);
        return this;
    }
        girar() {
        setTimeout(() => console.log(`Giro a la izquierda`), 5000);
        return this;
    }
        llegada() {
        setTimeout(() => console.log(`Ha llegado a su destino`), 8000);
        return this;
    }
        parquear() {
        setTimeout(() => console.log(`Parqueo con exito sin dañar el carro`), 9000);
        return this;
    }
}

const marca = prompt ("Ingrese la marca del carro");
const color = prompt ("Ingrese el color del carro");
const tipo = prompt ("Ingrese si es un carro, camioneta,etc")
const velocidad = prompt ("Ingrese la velocidad máxima del carro");
const destino = prompt ("¿A donde vas?");

const carroNuevo = new Carro(marca, color, velocidad, tipo, destino);

console.log(marca, color, velocidad, tipo);
console.log(carroNuevo.armar());
console.log(carroNuevo.comprar());
console.log(carroNuevo.arrancar());
console.log(carroNuevo.girar());
console.log(carroNuevo.llegada());
console.log(carroNuevo.parquear());

//Link CodeSandbox https://codesandbox.io/s/exciting-hamilton-geiub?file=/src/index.js