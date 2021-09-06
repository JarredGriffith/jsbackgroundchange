let randomNumber = () => {
    return Math.floor(Math.random() * 255)
}

let button = document.getElementById("btn")

button.addEventListener("click", ()=> {
    let newColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    document.body.style.backgroundColor = newColor
    document.querySelector('.color').innerHTML = newColor
});
