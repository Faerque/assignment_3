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
