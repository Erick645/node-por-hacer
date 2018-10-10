const opt = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const opt2 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado la tarea'
    }
}


const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', opt)
    .command('actualizar', 'Actualiza el estatus de la tarea', opt2)
    .command('borrar', 'Borra una tarea', opt)
    .help()
    .argv;

module.exports = {
    argv
}