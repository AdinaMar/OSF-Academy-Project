

const num= document.querySelector("#number");
const plus = document.querySelector("#increment");
const minus = document.querySelector("#decrement");

const mulCalc = document.querySelector("#calc");
const mulCalc2 = document.querySelector("#calcSecond")


plus.addEventListener("click", function() {
    valueCount = num.value;
    valueCount ++;
    num.value = valueCount;
    mulCalc.innerHTML = "$ "  + 2195 * num.value;
    subTotal();
}
)

minus.addEventListener("click", function() {

    valueCount = num.value;
    if(num.value > 0) {
    valueCount --;
    num.value = valueCount;
    mulCalc.innerHTML = "$ "  + 2195 * num.value;
    subTotal();
    } else {
        num.value = 0;
        
    }
}
)


const numfirst= document.querySelector("#numberfirst");
const plusfirst = document.querySelector("#incrementfirst");
const minusfirst = document.querySelector("#decrementfirst");


plusfirst.addEventListener("click", function() {
    valueCount = numfirst.value;
    valueCount ++;
    numfirst.value = valueCount;

    mulCalc2.innerHTML = "$ "  + 2195 * numfirst.value;


}
)

minusfirst.addEventListener("click", function() {

    valueCount = numfirst.value;
    if(numfirst.value > 0) {
    valueCount --;
    numfirst.value = valueCount;
    mulCalc2.innerHTML = "$ "  + 2195 * numfirst.value;
    } else {
        numfirst.value = 0;
    }
}
)

////////////////////////////
/*const cartPrice = document.querySelector("#cartPrice");
cartPrice.innerHTML = */
////////////////x functionality
const removingCart = () =>{
const btnDanger = document.getElementsByClassName("btn-danger");

for(var i = 0; i < btnDanger.length; i++) {
     btnDanger[i].addEventListener("click", removeCart)
}
        var quantityInputs = document.getElementsByClassName("numbers-calc");
        for(var i = 0; i < quantityInputs.length; i++) {
            var input = quantityInputs[i];
            input.addEventListener("change", quantityChange);
        }
}

document.addEventListener("DOMContentLoaded", removingCart);


///////////
const quantityChange = (event) => {
var input = event.target
if(isNaN(input.value) || input.value <= 0){
    input.value =1;
    
}
subTotal();
}

const removeCart = (event) => {  
event.target.parentElement.remove();
subTotal();


}
///////////////////////////calc subtotal

const subTotal = () => {
    var firstTotal = document.getElementsByClassName("first-part")[0];
    var cartFirsts = firstTotal.getElementsByClassName("first");
    var total = 0;
    for(var i = 0; i < cartFirsts.length; i++) {
      var cartFirst = cartFirsts[i];
      var priceP = cartFirst.getElementsByClassName("first-calc")[0];
      var inputEl = cartFirst.getElementsByClassName("numbers-calc")[0];
     console.log(priceP, inputEl);

     var priceTot = parseFloat(priceP.innerText.replace("$", ""));
     var quantityEl = inputEl.value;
     total = total + priceTot * quantityEl;
    
}


const radioButtons = document.getElementsByClassName("radio-button");
var totalCart = 0;
for (var i = 0; i<radioButtons.length; i++){
    
    if(radioButtons[i].checked) {
        totalCart =  + radioButtons[i].value + total;
        console.log(radioButtons[i].value);

    }
    document.getElementById("total").innerText = "$" + totalCart;
}

document.getElementById("cartPrice").innerText = "$" + total;
}

