/*
Crear un objeto en forma literal que cumpla con los siguientes puntos:

a. Debe contener una propiedad llamada 'meses' que almacene un array con los doce meses del año (enero, febrero, marzo, etc...).
b. El objeto tendrá un método llamado 'mostrarMeses' que imprimirá por consola los valores de dicho array mes a mes (no el array entero)
c. El objeto tendrá un método llamado 'getNumeroMes' que se le pasará el nombre del mes y retornará su número asociado (1 a 12).
d. El objeto tendrá un método llamado 'getLetrasMes' que devolverá un string con las primeras 3 letras de cada mes 
(Salida esperada => "ene feb mar abr may jun jul ago sep oct nov dic")
e. el objeto tendrá un método llamado 'getLetrasMesPersonalizado' que, a diferencia del método del punto d, recibirá por parámetro el 
numero de letras que queremos mostrar de cada mes. Si no se pasa ningun valor, el numero de letras a extraer por defecto será 3.

Crear un archivo.js y ejecutarlo con NodeJs. Ver por consola que el resultado sea el esperado
Adjuntar solucion
*/


let month = {
    months: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    mostrarMeses: function mostrarMeses() {
        for (let i = 0; i < this.months.length; i++) {
            const element = this.months[i];
            console.log(element);
        }
    },
    getNumeroMes: function getNumeroMes(month) {
        let index = this.months.indexOf(month);
        console.log(`${month} es el mes N° ${index + 1}`);
    },
    getLetraMes: function getLetaMes() {
        let iniciales = [];
        this.months.forEach(element => {
            iniciales.push(element.slice(0, 3));
        });
        for (let i = 0; i < iniciales.length; i++) {
            const element = iniciales[i];
            console.log(element);

        };
    },
    getLetraMesPersonalizado: function getLetraMesPersonalizado(index) {
        let iniciales = [];
        if (!index) {
            index = 3;
        };
        this.months.forEach(element => {
            iniciales.push(element.slice(0, index));
        });
        for (let i = 0; i < iniciales.length; i++) {
            const element = iniciales[i];
            console.log(element);

        };
    }
}

month.mostrarMeses();
month.getNumeroMes('octubre');
month.getLetraMes();
month.getLetraMesPersonalizado(4);
