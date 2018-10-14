const { argv } = require("./config/config");
//Destructuring
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let command = argv._[0];

console.log(argv);
switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break
    case 'crear':
        crearArchivo(argv.base).then((file) => {
            console.log(`Archivo ${ file } creado exitosamente =)`);
        }).catch(err => {
            console.log(err);
        });
        break
    default:
        'Comando no reconocido'
}