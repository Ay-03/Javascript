class Libro{
    constructor(titulo,autor,numPaginas){
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    describir(){
        document.body.innerHTML += "<p> Titulo : " + this.titulo +
                "<br> Autor : " + this.autor +
                "<br> Numero Paginas : " + this.numPaginas+"</p>";
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
        if(!listaLibros.includes(libro)){
            listaLibros.push(libro);
        }else{
            document.body.innerHTML += "<p> El libor ya exite </p>";
        }
    }

    eliminar(titulo){
        for(let i =0; i <= this.listaLibros.length(); i++){
            if(this.listaLibros.find(this.listaLibros[i].titulo)){
                this.listaLibros.splice(i,1);
                document.body.innerHTML += "<p> Libro encontrado y eliminado </p>";
            }else{
                document.body.innerHTML += "<p> Libro no exite </p>";
            }
        }
    }

    consultarLibro(titulo){
        for(let i =0; i <= this.listaLibros.length(); i++){
            if(this.listaLibros.find(this.listaLibros[i].titulo)){
                return this.listaLibros[i].describir;
            }else{
                 document.body.innerHTML += "<p> Titulo no exite </p>";
            }
        }
    }
    
    listarLibros(){
        for(let i =0; i <= this.listaLibros.length(); i++){
            document.body.innerHTML += "<p>"+this.listaLibros[i].describir+"</p>";
        }
    }
}


const libro = new Libro("nada","manuel",150);

const catalogo = new Catalogo(libro);
catalogo.aniadir(libro);

libro.describir();
catalogo.listarLibros();


