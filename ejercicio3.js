class pizza {
    constructor(nombre,id,precio, ingredientes){
        this.nombre = nombre
        this.id = id
        this.precio = precio
        this.ingredientes = ingredientes
    }

    
}

const pizzas =[]



const pizza_muzarella = new pizza("muzarella",1,500,["quesomuzarrella", "salsa", "oregano", "aceituna"])
pizzas.push(pizza_muzarella)
const pizza_fuggazeta = new pizza("fuggazeta",2,550,["queso", "cebolla", "oregano", "aceituna"] )
pizzas.push(pizza_fuggazeta)
const pizza_rucula = new pizza("rucula",3,630,["queso", "rucula", "tomate", "aceituna"] )
pizzas.push(pizza_rucula) 
const pizza_jamon = new pizza("jamon",4, 620,["queso", "jamon", "oregano", "aceituna"])
pizzas.push(pizza_jamon)
const pizza_roquefort = new pizza("roquefort",5, 540, ["quesoroquefort","oregano", "aceituna"])
pizzas.push(pizza_roquefort)
const pizza_calabresa = new pizza("calabresa",6, 570, ["quesomuzarrella", "salsa", "calabreza","provenzal", "oregano", "aceituna"] )
pizzas.push(pizza_calabresa)



 
const input = document.getElementById("input")
const button = document.getElementById("button")
const h2 = document.getElementById("h2")
const h4 = document.getElementById("h4")

console.log(pizzas)




button.addEventListener("click", ()=>{
    
    renderizartexto()


})


renderizartexto = (() => {

    value = input.value

    

    const pizzaseleccionada = (pizzas.find((p) => p.id == value))

    h2.innerHTML="";
    h4.innerHTML="";


     if(pizzaseleccionada){
        var h2text = document.createTextNode(pizzaseleccionada.nombre)
        
   
        var h4text = document.createTextNode(pizzaseleccionada.precio)
        h4.appendChild(h4text)
    }else{
        var h2text = document.createTextNode("error")
    }

    h2.appendChild(h2text)


})
