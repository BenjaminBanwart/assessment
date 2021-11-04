let yourName = "Benjamin Banwart"

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`



let gbQuantity = 0
document.getElementById('add-gb').addEventListener('click', function() {
    gbQuantity++
    updateQuantitygb(`${gbQuantity}`)
})
document.getElementById('minus-gb').addEventListener('click', function() {
    if(gbQuantity > 0) {
        gbQuantity--
    }
    updateQuantitygb(`${gbQuantity}`)
})
function updateQuantitygb(displayQuantity) {
    let gbQuantity = document.querySelector('#qty-gb')
    gbQuantity.innerHTML = displayQuantity
}




let ccQuantity = 0
document.getElementById('add-cc').addEventListener('click', function() {
    ccQuantity++
    updateQuantitycc(`${ccQuantity}`)
})
document.getElementById('minus-cc').addEventListener('click', function() {
    if(ccQuantity > 0) {
        ccQuantity--
    }
    updateQuantitycc(`${ccQuantity}`)
})
function updateQuantitycc(displayQuantity) {
    let ccQuantity = document.querySelector('#qty-cc')
    ccQuantity.innerHTML = displayQuantity
}





let ssQuantity = 0
document.getElementById('add-sugar').addEventListener('click', function() {
    ssQuantity++
    updateQuantityss(`${ssQuantity}`)
})
document.getElementById('minus-sugar').addEventListener('click', function() {
    if(ssQuantity > 0) {
        ssQuantity--
    }
    updateQuantityss(`${ssQuantity}`)
})
function updateQuantityss(displayQuantity) {
    let ssQuantity = document.querySelector('#qty-sugar')
    ssQuantity.innerHTML = displayQuantity
}


let total = 0
const totalUp = document.querySelector('#qty-total')

function addTotals() {
    total = updateTotal(`${gbQuantity}`) + updateTotal(`${ccQuantity}`) + updateTotal(`${ssQuantity}`)
}

document.querySelectorAll('.totals').addEventListener('change', function() {
    total++
    updateTotal(`${total}`)
})

function updateTotal(displayQuantity) {
    let total = document.querySelector('#qty-total')
    total.innerHTML = displayQuantity
}




















