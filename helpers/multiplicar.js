const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {// Por defecto la base será 5    

    try {    
        let salida, consola = '';
    
        for(let i = 1; i <= hasta; i++){
            //res = base * i;
            salida += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${base} ${'x'.brightBlue} ${i} ${'='.brightBlue} ${base * i}\n`);
        }

        if(listar){
            console.log('====================='.rainbow);
            console.log(' ==='.rainbow, 'Tabla del'.brightBlue, colors.brightYellow(base), '==='.rainbow);
            console.log('====================='.rainbow);
            
            console.log(consola);
        }    
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return`tabla-${base}.txt`;
        
    } catch (err) {
        throw err;
    }    
}

module.exports = {
    crearArchivo
}