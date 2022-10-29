
function index(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
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