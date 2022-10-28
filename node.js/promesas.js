const empleados = [ 
    { 
        id:1,
        nombre: "jhon"
    },
    { 
        id:2,
        nombre: "juan"
    },
    {
        id:3,
        nombre: "cesar"
    }
];

const salarios = [ 
    { 
        id:1,
        salario: 1000
    },
    { 
        id:2,
        salario: 1500
    },
    {
        id:3,
        salario: 1500
    }
];

//codificacion normal pero se puede mejorar
/*const getEmpleado = (id) => {

    
    const promesa = new Promise( (resolve, reject) =>{ 
        
        const empleado = empleados.find(e => e.id === id)?.nombre

        if (empleado) {
            resolve(empleado);
        } else {
            reject(`no existe el usuario con la id ${id}`)
        }
    });

    return promesa;
   
}*/

//simplificado y mejoramiento del codigo empleado
const getEmpleado = (id) => {

    //podemos retornar la promise inmediato para simplificarlo aun mas 
    return new Promise( (resolve, reject) =>{ 
        
        const empleado = empleados.find(e => e.id === id)?.nombre;
        //esto seria un equivalente al if Else solo que mas simplificado para ahorrar espacio y se vea mejor
        (empleado) 
            //? equivale a la ejecucion del if (no se puede cerrar ";")
            ?resolve(empleado) 
            //: equivale a la ejecucion del else (se puede o no cerrar ";")
            :reject(`no existe el usuario con la id ${id}`);
    });
   
}

const getSalario = (id) =>{ 
    return new Promise((resolve, reject) =>{ 
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario)
        ?resolve(salario)
        :reject(`no se encontro el salario con la id ${id}`)
    });
}

const id=2;

getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));