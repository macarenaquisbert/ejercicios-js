/**
 * Consultemos por consola los siguientes valores:
    1. Consulta el valor ("Super Hero Squad") de la propiedad squadName.
    2. Consulta el valor que dice "Madame Uppercut" (ayuda:
    objeto-propiedad-arreglo-propiedad).
    3. Consulta el valor que dice "Superhuman reflexes".
    4. Consulta el valor "39" de la propiedad age de Madame Uppercut.
 */
const superHeroes = {
"squadName" : "Super Hero Squad",
"homeTown" : "Metro City",
"formed" : 2016,
"secretBase" : "Super tower",
"active" : true,
"members" : [
    {
    "name" : "Molecule Man",
    "age" : 29,
    "secretIdentity" : "Dan Jukes",
    "powers" : ["Radiation resistance","Turning tiny","Radiation blast"]
    },
        {
        "name" : "Madame Uppercut",
        "age" : 39,
        "secretIdentity" : "Jane Wilson",
        "powers" : ["Million tonne punch","Damage resistance","Superhuman reflexes"]
        }
    ]
}
document.write("<br>" + superHeroes.squadName + "<br>");
document.write(superHeroes.members[1].name + "<br>");
document.write(superHeroes.members[1].powers[2] + "<br>");
document.write(superHeroes.members[1].age);