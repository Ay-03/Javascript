const fecha = new Date();

// a. El día del mes.
let dia = fecha.getDate();
console.log("a. el dia del mes: ", dia);

// b. El mes. Ten en cuenta que getMonth() devuelve valores de 0 a 11.
let mes = fecha.getMonth() + 1; 
console.log("b. el mes: ", mes);

// c. El año.
let anio = fecha.getFullYear();
console.log("c. Año : ", anio);

// d. Muestra la fecha completa.
let fechaCompleta = new Intl.DateTimeFormat("es-ES").format(fecha);
console.log("d. Fecha completa: ", fechaCompleta);