//crear una funcion que agregue la propiedad "agotado" a cada objeto 
//con el valor true si el stock es 0 o false si no lo es
const productos = [
    { id: "1", nombre: "lapiceras", stock: 164 },
    { id: "2", nombre: "marcadores", stock: 0 },
    { id: "3", nombre: "cartulinas", stock: 25 },
    { id: "4", nombre: "cartucheras", stock: 0 },
    { id: "5", nombre: "mochilas", stock: 4 }
   ]

   function checkStock(prod){
        prod = prod.map( product => {
            product.stock == 0? product["agotado"] = true : product["agotado"]= false;
            return product;
    } );
       return prod;
   }

//con map y spread op
   function checkStock2(prod){
        prod = prod.map(product => product.stock == 0? {...product, agotado: true} : {...product, agotado: false});
        return prod;
   }

console.log(checkStock(productos));
console.log(checkStock2(productos))