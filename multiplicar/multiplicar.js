const fs = require('fs');


let listarTabla = (base, limite) => {

    for (let i = 1; i <= limite; i++)
        console.log(`${ base}*${ i } = ${base * i}`);
}


let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {


        let data = "";
        for (let i = 1; i <= 10; i++) {
            data += `${ base}*${ i } = ${base * i}\n`
                //console.log(`${ base}*${ i } = ${base * i}`);
        }

        fs.writeFile(`tablas/tabla-${ base }`, data, (err) => {
            if (err)
                return reject(err);

            return resolve(`tabla-${ base }`);

        });

    });

}


module.exports = {
    crearArchivo,
    listarTabla
}