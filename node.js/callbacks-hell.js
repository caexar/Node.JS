const empleado = [ 
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

const getEmpleado = (id, callback) => {

    const empleado = empleado.find(e => e.id === id)?.nombre

    if(empleado){
        callback(null, empleado);
    }else{
        callback(`empleado con la id ${id} no existe`);
    }
}

const getSalario = (id, callback) =>{
    const salario = salarios.find(s => s.id === id)?.salario

    if (salario) {
        callback(null, salario)
    } else {
        callback(`el salario de la id ${id} no existe`);
    }
}



//console.log(salarios);