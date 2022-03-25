let cardMenu = document.getElementById("menu")
window.addEventListener("load",()=>{
   

    fetchData()
   
   })
   
   const fetchData = async()=>{
     try{
     const response = await fetch("https://sheetsu.com/apis/v1.0su/2c25845131dc")
   
     const data = await response.json()
     console.log(data)
     pintarDatos(data)
      
     }catch(error){console.log(error)}
   }

function pintarDatos(data) {
  let productsHTML = '';
  data.forEach(data => {
      productsHTML +=
     `<div class="menu-wrapper">
      <div class="menu-item--container">
         <div class="menu-item">
             <h4 class="item-title">${data.producto}</h4>
             <p class="item-description">${data.descripcion}</p>
         </div>
         <div class="menu-item--price">
             <p class="item-price">${data.precio}</p>
         </div>
     </div>
 </div>`
  });
  document.getElementById('menu').innerHTML = productsHTML;
}