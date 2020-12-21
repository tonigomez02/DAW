/*let nomDona = "Maria"
let nomHome = "Toni"

alert(`Hola ${nomDona} i ${nomHome}`)*/

/*
let meuNom = prompt ("Quin es el teu nom")
document.write(`El teu nom es ${meuNom}`)*/

/*
let x = parseInt(prompt("Donem un numero"))
let y = parseInt(prompt("Donem un altre numero"))

if(x > y){
    document.write(x)
}else{
    document.write(y)
}*/

/*
let nom = prompt("Quin es el teu nom?")
let edad = parseInt(prompt("Quina es la teva edad?"))
let estatura = parseFloat(prompt("Quina es la teva estatura?"))
let estatCivil = prompt("Quin es el teu estat civil?")

if(estatCivil == "casat"){
    document.write(`${nom} ${edad} ${estatura} ${estatCivil}`)
}else{
    document.write(`${nom}<br> ${edad}<br> ${estatura}<br> ${estatCivil}<br>`)
}*/

/*
let z = parseInt(prompt("Escriu un numero"))
let v = parseInt(prompt("Escriu un altre numero"))

let result = z + v
document.write(`El resultat es ${result}`)*/

/*
let paraula = prompt("Escriu una paraula")
    document.write(paraula.length)
*/

/*
let arrData = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"]

for(i = 0; i< arrData.length; i++){
    document.write(`<h3>${arrData[i]}</h3>`)
}
*/

let nota = parseInt(prompt("Quina es la teva nota"))

switch(nota){
    case 10: document.write(`La teva nota es excel·lent`)
    break
    case 9: document.write(`La teva nota es excel·lent`)
    break
    case 8: document.write(`La teva nota es notable`)
    break
    case 7: document.write(`La teva nota es notable`)
    break
    case 6: document.write(`La teva nota està bé`)
    break
    case 5: document.write(`La teva nota es suficient`)
    break
    case 4 && 3 && 2 && 1 && 0: document.write(`La teva nota es lamentable, te pot retirar`)
    break
    default: document.write(`Passem un paràmetre que pugui llegir`)

}
