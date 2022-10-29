const yargs = require('yargs').option('n1',{alias:'n1',type:'number'}).option('n2',{alias:'n2',type:'number'}).check((argv,options)=>{
    if(argv.n1<0 || argv.n2<0){
        throw 'El numero debe ser mayor que cero'
    }else{
        return true
    }
})

let multiplicacion = yargs.argv.n1*yargs.argv.n2


function index(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write(`La multiplicacion de los numeros ${n1} y ${n2} es: ${multiplicacion}`);
}

//METODO GET, POST, PUT o DELETE

function empleado(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(objeto));
}

module.exports={
    index,
    empleado
}