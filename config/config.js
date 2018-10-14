const opts = {
    base: {
        alias: 'b',
        demand: true
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require("yargs").command("listar", "Este comando me permite listar las tablas de multiplicar", opts)
    .command("crear", "Este comando me permite crear las tablas de multiplicar", opts)
    .help()
    .argv;


module.exports = {
    argv
}