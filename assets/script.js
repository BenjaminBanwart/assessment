let yourName = "Benjamin Banwart"

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Gingerbread cookie code
let gbQuantity = 0
document.getElementById('add-gb').addEventListener('click', function() {
    gbQuantity++
    total++
    updateQuantitygb(`${gbQuantity}`)
})
document.getElementById('minus-gb').addEventListener('click', function() {
    if(gbQuantity > 0) {
        gbQuantity--
        total--
    }
    updateQuantitygb(`${gbQuantity}`)
})
function updateQuantitygb(displayQuantity) {
    let gbQuantity = document.querySelector('#qty-gb')
    gbQuantity.innerHTML = displayQuantity
    updateTotal(`${total}`)
}



// Chocolate chip cookie code
let ccQuantity = 0
document.getElementById('add-cc').addEventListener('click', function() {
    ccQuantity++
    total++
    updateQuantitycc(`${ccQuantity}`)
})
document.getElementById('minus-cc').addEventListener('click', function() {
    if(ccQuantity > 0) {
        ccQuantity--
        total--
    }
    updateQuantitycc(`${ccQuantity}`)
})
function updateQuantitycc(displayQuantity) {
    let ccQuantity = document.querySelector('#qty-cc')
    ccQuantity.innerHTML = displayQuantity
    updateTotal(`${total}`)
}




// Sugar sprinkle cookie code
let ssQuantity = 0
document.getElementById('add-sugar').addEventListener('click', function() {
    ssQuantity++
    total++
    updateQuantityss(`${ssQuantity}`)
})
document.getElementById('minus-sugar').addEventListener('click', function() {
    if(ssQuantity > 0) {
        ssQuantity--
        total--
    }
    updateQuantityss(`${ssQuantity}`)
})
function updateQuantityss(displayQuantity) {
    let ssQuantity = document.querySelector('#qty-sugar')
    ssQuantity.innerHTML = displayQuantity
    updateTotal(`${total}`)
}





// Total code
let total = 0
function updateTotal(displayQuantity) {
    let total = document.querySelector('#qty-total')
    total.innerHTML = displayQuantity
}




















