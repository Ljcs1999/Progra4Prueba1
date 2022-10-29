const http =require('http')
const router = require('./router.js')
require('dotenv').config()


const server = http.createServer((peticion,respuesta)=>{
    console.log(peticion.url);
    switch(peticion.url){
        case '/1':
            //router.index(peticion,respuesta)

            const yargs = require('yargs').option('n2',{alias:'n2',type:'number'}).check((argv,options)=>{
                if(argv.n1<0 || argv.n2<0){
                    throw 'El numero debe ser mayor que cero'
                }else{
                    return true
                }
            })

            let multiplicacion = 5*yargs.argv.n2
            respuesta.writeHead(200,{'Content-Type':'text/plain'});
            respuesta.write(`La multiplicacion es: ${multiplicacion}`);
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