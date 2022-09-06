var initialPrice = document.querySelector("#initial-price");


var quantity = document.querySelector("#no-of-quantity");



var currentPrice = document.querySelector("#current-price");


var output = document.querySelector("#output");



var button = document.querySelector("#button");



button.addEventListener("click",eventHandler);



function eventHandler(){

    var price = Number(initialPrice.value);
    var noOfItems = Number(quantity.value);
    var currentValue = Number(currentPrice.value);

    calculateProfitOrLoss(price,noOfItems,currentValue);
}



function calculateProfitOrLoss(initialPrice,quantity,currentPrice){
    
    
    if(initialPrice > currentPrice){
        
        var loss = (initialPrice - currentPrice)*quantity;

        var percentageOfLoss = (initialPrice/currentPrice)*100;

        showMessage(`hey the loss is ${loss} and loss percentage is ${percentageOfLoss}%`);

    }
    else if(initialPrice < currentPrice){

        var gain = (currentPrice - initialPrice)*quantity;

        var percentageOfGain = (gain/initialPrice)*100;

        showMessage(`hey the gain is ${gain} and gain percentage is ${percentageOfGain}%`);

    }
    else{
            showMessage("No Pain No Gain No Gain No Pain");
    }
  
    
}


function showMessage(msg){

    output.innerText = msg;
}