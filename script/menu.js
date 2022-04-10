let $cafeteria = document.getElementById("cafeteria");
let cafeteria = "cafetería";

let $cafesEspeciales =  document.getElementById('cafésEspeciales');
let cafesEspeciales = "cafésEspeciales";


let $batidos = document.getElementById("batidos");
let batidos = "batidos";


let $desayunosMeriendas = document.getElementById("desayunosMeriendas");
let desayunosMeriendas = "desayunosMeriendas";



let $delicias = document.getElementById("delicias");
let delicias = "delicias";

let $sandwiches = document.getElementById("sandwiches");
let sandwiches = "sandwiches"

let $bebidas = document.getElementById("bebidas");
let bebidas = "bebidas";

let $picadas = document.getElementById("picadas");
let picadas = "picadas";

let $copasHeladas = document.getElementById("copasHeladas");
let copasHeladas = "copasHeladas";

let $plato = document.getElementById("plato");
let plato = "plato";

let $pizzas = document.getElementById("pizzas");
let pizzas = "pizzas";

let $guarniciones = document.getElementById("guarniciones");
let guarniciones = "guarniciones";
// LOAD PAGINA
window.addEventListener("load",()=>{
    fetchData() 
   })


// FETCH DATA
   const fetchData = async()=>{
     try{
    //  const response = await fetch("https://sheetsu.com/apis/v1.0su/b9a36553efe8")
     const response = await fetch("script/productos.json")

     const data = await response.json()
     
     
     let catCafeteria = filtrarCategorias(data, cafeteria);
     pintarData(catCafeteria, $cafeteria)
     
     let catCafesEspeciales = filtrarCategorias(data, cafesEspeciales);
     pintarData(catCafesEspeciales, $cafesEspeciales);

      let catBatidos = filtrarCategorias(data, batidos);
     pintarData(catBatidos, $batidos);
     
     let catDesayunosMeriendas = filtrarCategorias(data, desayunosMeriendas);
     pintarData(catDesayunosMeriendas, $desayunosMeriendas);

    

     let catDelicias = filtrarCategorias(data, delicias);
     pintarData(catDelicias, $delicias);
     
     let catBebidas = filtrarCategorias(data, bebidas);
     pintarData(catBebidas, $bebidas);
     
     let catPicadas = filtrarCategorias(data, picadas);
     pintarData(catPicadas, $picadas);


     let catSandwiches = filtrarCategorias(data, sandwiches);
     pintarData(catSandwiches, $sandwiches);

     let catPlato = filtrarCategorias(data, plato);
     pintarData(catPlato, $plato);

     let catPizzas = filtrarCategorias(data, pizzas);
     pintarData(catPizzas, $pizzas);

     let catGuarniciones = filtrarCategorias(data, guarniciones);
     pintarData(catGuarniciones, $guarniciones);

    

     let catCopasHeladas = filtrarCategorias(data, copasHeladas);     
     pintarData(catCopasHeladas, $copasHeladas)


     }catch(error){console.log(error)}
   }


  function filtrarCategorias(data, filId){
    let filterId =  filId;
    return data.filter(x => x.categoría === filterId)
  }

  function pintarData(data, idRef) {
  let referenciaId = idRef;
  let productsHTML = '';
  data.forEach(data => {
      productsHTML +=    
     `
     <div class="menu-wrapper">
       <div class="menu-item--container">
         <div class="menu-item">
             <h4 class="item-title">${data.producto}</h4>
             <p class="item-description">${data.descripción}</p>
         </div>
         <div class="menu-item--price">
             <p class="item-price">${data.precio}</p>
         </div>
       </div>
      </div>`
  });
 referenciaId.innerHTML = productsHTML;
}