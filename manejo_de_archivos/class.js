
const { Console } = require('console');
const fs = require('fs');

const productos = [];

class Contenedor
{
    
        constructor (file)
        {
            this.file = file;
            //console.log(`Trabajando con el archivo ${this.file}`);
        }
    

        save(obj) // Recibe objeto  y lo guarda en  el archivo
        {   
            (async()=>
            {
                try
                {
                    
                    productos.push(obj); // pusheo el string al array
                    const objString = JSON.stringify(productos, null, 2); // Guardar obj en String
                    await fs.promises.writeFile("./file.txt", objString); // sobreescribo el archivo
                 
                   
                }
                catch(e)
                {
                    console.log(e.message);
                }

            })()
        }

        getByid(id)
        {
            (async()=>
            {
                try
                    {
                        const read = await fs.promises.readFile('./file.txt','utf-8'); // leo el archivo
                        //console.log("leo del archivo un tipo " +  typeof read); // recibo string
                        const stringObj = JSON.parse(read); // lo convierto en obj

                        //recorrer array para saber id
                        const byId = stringObj.find((product)=>{
                        const isProduct = product.id === id;
                        return isProduct;
                        })
                        console.log (byId); // muestro el item con el id ingresado

                    
                    }
                    catch (err)
                    {
                        console.error(err);
                    }

            })()
 
        }

        getAll()
        {   
            (async()=>
            {
                try
                    {
                        const read = await fs.promises.readFile('./file.txt','utf-8'); // leo el archivo
                        console.log(typeof read)
                        const stringObj = JSON.parse(read); // lo convierto en obj
                        console.log(stringObj); // muestro el objeto con los elementos 
                                            
                    }
                    catch (err)
                    {
                        console.error(err);
                    }

            })()
        }

        deleteAll()
        {   
            const empty = []; // array vacio
            (async()=>
            {
                try
                    {
                        productos.push(empty); // pusheo el string vacio al array
                        await fs.promises.writeFile('./file.txt',productos); // sobreescribo el archivo
                        
                    }
                    catch (err)
                    {
                        console.error(err);
                    }

            })()
        }
        

        deleteById(id)
        {

            (async()=>
            {
                try
                    {
                        const read = await fs.promises.readFile('./file.txt','utf-8'); // leo el archivo
                        const stringObj = JSON.parse(read); // lo convierto en obj

                        const indexById = stringObj.findIndex((product)=> // busco el indice del item por id
                        {
                        const isProduct = product.id === id; 
                        return isProduct;
                        })

                        stringObj.splice(indexById,1); // elimino el item por su indice
            
                        const objString = JSON.stringify(stringObj,null,2);   // Guardar obj en String 
                        await fs.promises.writeFile('./file.txt',objString); // sobreescribo el archivo
                                            
                    }
                    catch (err)
                    {
                        console.error(err);
                    }

            })()

            

        }
        
    }
 

 const producto = new Contenedor("file.txt");

 const cocaCola = 
{
    id:1,
    title:'Coca Cola',
    price: 2000,
    thumbnail:'coca-cola.png'
}
 
 const pepsi = 
 {
     id:2,
     title:'Pepsi',
     price: 2000,
     thumbnail:'pepsi.png'
 }
 
 const agua = 
 {
     id:3,
     title:'Agua',
     price: 1000,
     thumbnail:'agua.png'
 }
 const cerveza = 
 {
     id:4,
     title:'Cerveza',
     price: 4000,
     thumbnail:'cerveza.png'
 }
        // Ejecucion !!!
        //    producto.save(cocaCola);
        //    producto.save(pepsi);
        //    producto.save(agua);
        //    producto.save(cerveza);

        //    producto.getByid(2);

        //    producto.getAll();

        //    producto.deleteById(2);

        //    producto.deleteAll();


 
  
  


  













