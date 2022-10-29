const http =require('http')
const router = require('./router.js')
require('dotenv').config()


const server = http.createServer((peticion,respuesta)=>{
    console.log(peticion.url);
    switch(peticion.url){
        case '/1':
            //router.index(peticion,respuesta)

            const yargs = require('yargs').option('n2',{alias:'n2',type:'number'}).check((argv,options)=>{
                if(argv.n2<0){
                    throw 'El numero debe ser mayor que cero'
                }else{
                    return true
                }
            })

            let multiplicacion = 1*yargs.argv.n2
            respuesta.writeHead(200,{'Content-Type':'text/plain'});
            respuesta.write(`La multiplicacion es: ${multiplicacion}`);
            break
        case '/2':
            const yargs1 = require('yargs').option('n2',{alias:'n2',type:'number'}).check((argv,options)=>{
                if(argv.n2<0){
                    throw 'El numero debe ser mayor que cero'
                }else{
                    return true
                }
            })

            let multiplicacion2 = 2*yargs1.argv.n2
            respuesta.writeHead(200,{'Content-Type':'text/plain'});
            respuesta.write(`La multiplicacion es: ${multiplicacion2}`);
            break
        case '/3':
            const yargs2 = require('yargs').option('n2',{alias:'n2',type:'number'}).check((argv,options)=>{
                if(argv.n2<0){
                    throw 'El numero debe ser mayor que cero'
                }else{
                    return true
                }
            })

            let multiplicacion3 = 3*yargs2.argv.n2
            respuesta.writeHead(200,{'Content-Type':'text/plain'});
            respuesta.write(`La multiplicacion es: ${multiplicacion3}`);
            break
        
        case '/4':
            const yargs3 = require('yargs').option('n2',{alias:'n2',type:'number'}).check((argv,options)=>{
                if(argv.n2<0){
                    throw 'El numero debe ser mayor que cero'
                }else{
                    return true
                }
            })

            let multiplicacion4 = 4*yargs3.argv.n2
            respuesta.writeHead(200,{'Content-Type':'text/plain'});
            respuesta.write(`La multiplicacion es: ${multiplicacion4}`);
            break
        case '/5':
                const yargs4 = require('yargs').option('n2',{alias:'n2',type:'number'}).check((argv,options)=>{
                    if(argv.n2<0){
                        throw 'El numero debe ser mayor que cero'
                    }else{
                        return true
                    }
                })
    
                let multiplicacion5 = 5*yargs4.argv.n2
                respuesta.writeHead(200,{'Content-Type':'text/plain'});
                respuesta.write(`La multiplicacion es: ${multiplicacion5}`);
                break
        case '/6':
                    const yargs5 = require('yargs').option('n2',{alias:'n2',type:'number'}).check((argv,options)=>{
                        if(argv.n2<0){
                            throw 'El numero debe ser mayor que cero'
                        }else{
                            return true
                        }
                    })
        
                    let multiplicacion6 = 6*yargs5.argv.n2
                    respuesta.writeHead(200,{'Content-Type':'text/plain'});
                    respuesta.write(`La multiplicacion es: ${multiplicacion6}`);
                    break
        case '/7':
                        const yargs6 = require('yargs').option('n2',{alias:'n2',type:'number'}).check((argv,options)=>{
                            if(argv.n2<0){
                                throw 'El numero debe ser mayor que cero'
                            }else{
                                return true
                            }
                        })
            
                        let multiplicacion7 = 7*yargs6.argv.n2
                        respuesta.writeHead(200,{'Content-Type':'text/plain'});
                        respuesta.write(`La multiplicacion es: ${multiplicacion7}`);
                        break
        case '/8':
                            const yargs7 = require('yargs').option('n2',{alias:'n2',type:'number'}).check((argv,options)=>{
                                if(argv.n2<0){
                                    throw 'El numero debe ser mayor que cero'
                                }else{
                                    return true
                                }
                            })
                
                            let multiplicacion8 = 8*yargs7.argv.n2
                            respuesta.writeHead(200,{'Content-Type':'text/plain'});
                            respuesta.write(`La multiplicacion es: ${multiplicacion8}`);
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