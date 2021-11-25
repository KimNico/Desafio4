let express= require("express");
let app = express();
let {Router}= express;
const PORT= 8080;
let path= require("path");

let router1= new Router;
let router2= new Router;
let router3= new Router;
let router4= new Router;
let router5= new Router;

let prod =[];

router1.get("/",(req,res,next)=>{
        res.json(prod);
})
router2.get("/",(res,req,next)=>{
    let {id}= req.params;
    let respuesta = null;
        if(prod.length>0){
            prod.forEach(element => {
                if(Number(id)){
                    respuesta=element;
                }
            });
        }
    res.json(respuesta);
})

router3.post("/",(res,req,next)=>{
    console.log("hola");
    prod.push(req.query.nuevo);
    res.json(prod);
})
router4.put("/",(res,req,next)=>{
    res.json(prod);
})
router5.delete("/",(res,req,next)=>{
    let resp=[];
    for (const key in prod) {
        if(prod[key].id==id){
            prod.splice(key, 1);
        }
    }
    let contenido = JSON.stringify(prod, null,2);
    prod= contenido
    return resp;
    
})


app.use("/productos",router1);
app.use("/prodId/:id",router2);
app.use("/nuevoProducto",router3);
app.use("/api/productos/:id",router4);
app.use("/deleteId:id",router5);


app.listen(PORT,()=>{
    
    console.log(`My server: https://localhost:${PORT}`)
})
