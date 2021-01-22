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