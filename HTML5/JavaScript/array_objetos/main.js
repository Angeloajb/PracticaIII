const alumnos = [
    {
        legajo:234,
        usuario:'abriceño',
        password: '123abc',
        telefono:{
            celular:2995312552,
            fijo:2994770456
        }
    },
    {
        legajo:235,
        usuario:'sofia',
        password: '456dfg',
        telefono:{
            celular:2995314365,
            fijo:2994773278
        }
    }
]


alumnos.forEach(element => {
   console.log(element.usuario)
});