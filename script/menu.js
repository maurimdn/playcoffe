let $cafeteria = document.getElementById("menuCafeteria");
let cafeteria = "cafe";

let $cafesEspeciales =  document.getElementById('menuCafesEspeciales');
let cafesEspeciales = "cafés especiales";


let $desayunoMeriendas = document.getElementById("menuDesMer");
let desayunoMeriendas = "desayunosMeriendas";

let $batidos = document.getElementById("menuBatidos");
let batidos = "batidos";



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
     
     console.log(data)
     let catCafeteria = filtrarCategorias(data, cafeteria);
     pintarData(catCafeteria, $cafeteria)

     let catCafeEspeciales = filtrarCategorias(data, cafesEspeciales);
     pintarData(catCafeEspeciales, $cafesEspeciales) 

     let catDesMer = filtrarCategorias(data, desayunoMeriendas);
     pintarData(catDesMer, $desayunoMeriendas); 
      
     let catBatidos = filtrarCategorias(data, batidos);
     pintarData(catBatidos, $batidos);

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
     `<div class="menu-wrapper">
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