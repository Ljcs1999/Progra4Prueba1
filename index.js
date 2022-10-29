const http =require('http')
const router = require('./router.js')
require('dotenv').config()


const server = http.createServer((peticion,respuesta)=>{
    console.log(peticion.url);
    switch(peticion.url){
        case '/1':
            //router.index(peticion,respuesta)
            
            let multiplicacion = 1*yargs.argv.n2
            respuesta.writeHead(200,{'Content-Type':'application/json'});
            respuesta.write(`La multiplicacion de los numeros 1 * ${n2} es: ${multiplicacion}`);
            break
        case '/empleado':
            router.empleado(peticion,respuesta) 
            break
        case '/about':
            respuesta.writeHead(200,{'Content-Type':'text/plain'});
            respuesta.write('Sitio desarrollado por Levi');
            break
        default:
            respuesta.writeHead(404,{'Content-Type':'text/plain'});
            respuesta.write('Pagina no disponible');
            break
    }
    respuesta.end();
})

server.listen(process.env.PORT,process.env.HOST,()=>
    console.log(`Servidor disponible: http://${process.env.HOST}:${process.env.PORT}`)
)