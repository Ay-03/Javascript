class Libro{
    constructor(titulo,autor,numPaginas){
        if (titulo === null || titulo.trim() === "" || autor === null || autor.trim() === "") {
            throw new Error("El titulo y el autor no pueden estar vacios");
        }

        let paginas = parseInt(numPaginas);
        if (isNaN(paginas) || paginas <= 0) {
            throw new RangeError("El numero de paginas debe ser un entero mayor que cero");
        }

        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = paginas;
    }
    describir(){
        document.body.innerHTML += "<p> Titulo : " + this.titulo +
                "<br> Autor : " + this.autor +
                "<br> Numero Paginas : " + this.numPaginas +"</p>";
    }
    
    esExtenso(){
        if(this.numPaginas >= 300){
            document.body.innerHTML += "<p> El libro tiene mas de 300 </p>";
        }else{
            document.body.innerHTML += "<p> El libor tiene menos de 300 </p>";
        }
    }
}

class Catalogo{
    constructor(){
        this.listaLibros = [];
    }

    aniadir(libro){
        if(!this.listaLibros.includes(libro)){
            this.listaLibros.push(libro);
            document.body.innerHTML += "<p> Libro con titlo : ["+libro.titulo+"] añadido  </p>"
        }else{
            document.body.innerHTML += "<p> El libor ya exite </p>";
        }
    }

    eliminar(titulo){
        for(let i =0; i < this.listaLibros.length; i++){
            if(this.listaLibros[i].titulo === titulo){
                this.listaLibros.splice(i,1);
                document.body.innerHTML += "<p> Libro encontrado y eliminado </p>";
                return;
            }       
        }
        document.body.innerHTML += "<p> Libro no exite </p>";
    }

    consultarLibro(titulo){
        for(let i =0; i < this.listaLibros.length; i++){
            if(this.listaLibros[i].titulo === titulo){
                return this.listaLibros[i].describir();
            }
        }
        document.body.innerHTML += "<p> Titulo : ["+titulo+"] no exite </p>";
    }
    
    listarLibros(){
        for(let i =0; i < this.listaLibros.length; i++){
            this.listaLibros[i].describir();
        }
    }
}

let miCatalogo = new Catalogo();
let libro1 = new Libro("Libro Corto", "Autor A", 299);
let libro2 = new Libro("Libro Justo", "Autor B", 300);
let libro3 = new Libro("Libro Largo", "Autor C", 500);

libro1.describir();
libro1.esExtenso();

libro2.describir();
libro2.esExtenso();

libro3.describir();
libro3.esExtenso();

document.body.innerHTML += "<h3> Añadir libros al catalogo</h3>";
miCatalogo.aniadir(libro1);
miCatalogo.aniadir(libro2);
miCatalogo.aniadir(libro3);


document.body.innerHTML += "<h3>Listar catalogo con libros</h3>";
miCatalogo.listarLibros();

document.body.innerHTML += "<h3>Consultar libros</h3>";
miCatalogo.consultarLibro("Libro Justo");
miCatalogo.consultarLibro("Harry Potter");

document.body.innerHTML += "<h3>Eliminar libros</h3>";
miCatalogo.eliminar("Libro Corto");
miCatalogo.eliminar("El Quijote");

document.body.innerHTML += "<h3>Listar catalogo final</h3>";
miCatalogo.listarLibros();


