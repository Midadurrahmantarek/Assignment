function kilometerToMeter(km){
    if(km>= 0){
        var meter = km * 1000;
        return meter;
    }
    else{
        console.log("Please Input a vaild number");
        return undefined;
        
    }
}
var result = kilometerToMeter(4);


//end km to m.

//budgetcal start...



function budgetCalculator(clock,phone,laptop){
    if(clock>= 0 && phone>= 0 && laptop>=0){
        var clockPrice = clock * 50;
        var phonePrice = phone * 100
        var laptopPrice = laptop * 500;
        var total = clockPrice + phonePrice+ laptopPrice ;
    }
    else{
        console.log("Please Input a vaild number");
        return undefined;
    }
     return total; 
}
var result = budgetCalculator(10,3,2);


// end budget cal

// hotelCost start


function hotelCost(day){
    var cost = 0;
    if(day <= 10 && day >= 0){
        cost = day *100;
    }
    else if(day <= 20 && day >= 0){
        var tendaycost = 10 * 100;
        var remainingdays = day - 10;
        var secontenDays = remainingdays * 80;
        cost = tendaycost + secontenDays;
    }
    else if(day>=0){
        var tendaycost = 100 * 10;
        var secontenDays = 10 * 80;
        var remainingdays = day - 20;
        var lastdayscost = remainingdays * 50;
        var cost = tendaycost + secontenDays + lastdayscost;
    }
    else{
        console.log("Please Input a vaild number");
        return undefined;
    }
    return cost;
}
var totalCost = hotelCost(21);



// end

//megaFriend start

     

function megaFriend(array) {   
    var longestWord = array[0];
    for(i = 0; i <= array.length; i++){
        var element = array[i];
    
    if( element >= longestWord){
                longestWord = element;
                
            }    
        }
        return longestWord;
    }
    
        var word = megaFriend(["Jafor","Iqbal","Midad","Saiful", "Salman F Rahman", "Ronaldo"]);

