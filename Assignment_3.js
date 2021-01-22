//https://github.com/Faerque/assignment_3

//Problem_1

function kilometerToMeter(kilometer){

    //We know 1 kilometer = 1000 meter. So, length will be multiply by 1000
    var meter = kilometer*1000;
    return meter;

}

var meters = kilometerToMeter(23);

//Problem_2

function budgetCalculator(Casio,Iphone,Macbook) {
      
    var result = Casio + Iphone + Macbook;
    return result;
  
}

var totalCost = budgetCalculator((50*3),(100*7),(500*2));


//Problem_3

function hotelCost(totalSpentDay) {
    var overallCost = 0;
    
    if(totalSpentDay <= 10){
        overallCost= totalSpentDay * 100;
    }

    else if(totalSpentDay <= 20){
        var firstTenDays = 10 * 100;
        var remaining = totalSpentDay - 10;
        var secondTenDays = remaining * 80;
        overallCost= firstTenDays + secondTenDays;
    }
    
    else{
        var firstTenDays = 10*100;
        var secondTenDays =10*80;
        var remaining = totalSpentDay - 20;
        var afterTweentyDays = remaining * 50;
        overallCost= firstTenDays + secondTenDays + afterTweentyDays;
    }

     return overallCost;  
    
    }

    var result = hotelCost(10);


//Problem_4

function megaFriend(arry){
    var buddy = arguments[0];
    for (i = 0; i < arguments.length; i++){
        if (arguments[i].length > buddy.length){
            buddy = arguments[i];
        }
    }
    return buddy;
}
var result = megaFriend("Lima", "Kima", "Jima", "Bima", "Lubana");
