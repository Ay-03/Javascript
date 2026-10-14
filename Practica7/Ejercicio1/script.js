
const textoCafe = `{
  "title": "Latte",
  "description": "As the most popular coffee drink out there, the latte is made with a shot of espresso and steamed milk, with just a touch of foam. It can be ordered plain or flavored with everything from vanilla to pumpkin spice.",
  "ingredients": [
    "Espresso",
    "Steamed milk"
  ],
  "image": "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
  "id": 2
}`;

const cafe = JSON.parse(textoCafe);

console.log(cafe);
console.log(cafe.id);
console.log(cafe.ingredients);
console.log(cafe.title);

const fichaCafe = {
    id: cafe.id,
    nombre: cafe.title,
    ingredientes: cafe.ingredients,
    imagen: cafe.image
};

document.body.innerHTML += "<h3>" + cafe.title + "</h3>"+
'<img height="300" src="' + cafe.image + '">';

const fichaCafe2 = {
    id: cafe.id,
    nombre: cafe.title,
    ingredientes: cafe.ingredients
};

const fichaTexto = JSON.stringify(fichaCafe2,null,2);

console.log(fichaTexto);

document.body.innerHTML += "<pre>"+fichaTexto;
