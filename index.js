let countEL = document.getElementById("count-el") 
let saveEL = document.getElementById("save-el") 
let count = 0 

function increment() {
    count += 1 
    countEL.textContent = count 
    console.log(countEL)
}

function save() {
    let countStr = count + " - "
    saveEL.textContent += countStr 
    count = 0
    countEL.textContent = 0
}