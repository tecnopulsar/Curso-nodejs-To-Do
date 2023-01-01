// const opts = {
//     base: {
//       demand: true,
//       alias: "b",
//     },
//     limite: {
//       alias: "l",
//       deafult: 10,
//     },
//   };

const argv = require("yargs")
  .command("crear", "Crea la tabla de multiplicar", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "Descripcion de la tarea por hacer",
    },
  })
  .command("actualizar", "Actualiza en consola la lista de tareas", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "Descripcion de la tarea por hacer",
    },
    completado: {
      default: true,
      alias: "c",
      desc: "Marca como completada la tarea por hacer",
    },
  })
  .command("borrar", "Borra una tarea de la lista de tareas", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "Descripcion de la tarea por borrar",
    },
  })
  .help().argv;

module.exports = {
  argv,
};
