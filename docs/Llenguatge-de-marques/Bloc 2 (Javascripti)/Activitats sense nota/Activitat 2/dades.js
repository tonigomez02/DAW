function changeColor(){
    let first = document.getElementsByClassName("first")
    
    first[0].style.color = "red"
    first[0].style.backgroundColor = "pink"

    let second = document.getElementsByClassName("second")

    second[0].style.color = "green"
    second[0].style.backgroundColor = "blue"
}

function createMyElement(){
    var elementLi = document.createElement("li")
    var text = document.createTextNode("Router")

    elementLi.appendChild(text)

    document.getElementById("llista").appendChild(elementLi)
}
