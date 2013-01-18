//      Stephen Terriault
//      SDI 01_13
//      PROJECT 2


//      VARIABLES
var firstVisit = false;                                         // PROCEDURE
var memberType = ["basicMember", "fullMember", "notMember"];    // BOOLEAN
var salesGoal = 500;                                            // NUMBER
var salePrices = [45, 40, 30, 25, 20];                          // ARRAY
var say = function(message) console.log(message);               // CONSOLE.LOG
                                                                

/////////////////////////////////////////////PROCEDURE/////////////////////////////////////////
//      var firstVisit = false;
say("Welcome to Chico's, have you shopped with us before?");
    var greetCustomer = function(firstVisit){
        if (firstVisit === true){
            say("Well here we have a different sizing system, our sizing goes 0, 1, 2, and 3.");    
        } else {
            say("Welcome back, let me show you our sales that we are having today.");
        }
    };

////////////////////////////////////////BOOLEAN_FUNCTION///////////////////////////////////////
//   var memberType = ["basicMember", "fullMember", "notMember"];

var storeInfo = function (yourSize, memberType) {
    var startShopping = true; 
        if (yourSize <= 3){ 
            say("Great, let me show you the sale we have going on.");      
        } else {
            say("Sorry but the largest size we carry is a size 3.");        
        }
            if (memberType === memberType[0] || memberType[1]){
                say("Well let me check your account and see what coupons you have.");
            } else {
                say("Well we need to get you signed up than.");
            }
    return startShopping;
    };
    
////////////////////////////////////////NUMBER_FUNCTION////////////////////////////////////////
//   var amountSold = 250 ;
//   var salesGoal = 500;

var goalMet = function(amountSold){
    while (amountSold < 500){ 
        say("I need to sell $" + (salesGoal - amountSold) + " more dollars to make my sales goal for today.");
        amountSold+=25; 
    }
        say("I have finally made my sales goal of 500 dollars!");                  

return amountSold;  
};
    
////////////////////////////////////////STRING_FUNCTION////////////////////////////////////////


var shoppingFor = function(firstItem, secondItem){
    var purchaseItems = ["Yes", "no"];
    var sizeFit = ["perfectly", "a little long"];
        say("I found both the " + firstItem + " and the " + secondItem + " in a size 2.");
        say("The " + firstItem + " fit " + sizeFit[0] + " but the " + secondItem + " are " + sizeFit[1]);
    var finalDecision = (purchaseItems[0] + ", I am going to get" + firstItem + ", but" + purchaseItems[1] + " I'm going to have to pass on the " + secondItem + ", Thank you.");    
return finalDecision;
};
        
////////////////////////////////////////ARRAY_FUNCTION/////////////////////////////////////////
//   var salePrices = [45, 40, 30, 25, 20];

var saleItems = function (salePrices, bestPrice){
    for (var i = 0; i < salePrices.length; i++){
    var lowerDeal = salePrices[i];
        say("Our best deal right now is " + bestPrice + " percent off. Then the next best deal is " + lowerDeal + " percent off.");
    }
return lowerDeal;
};

////////////////////////////////////////RETURNED_VAULES////////////////////////////////////////

    storeInfo(2, memberType[2]);                  // BOOLEAN RETURN
    goalMet(250);                                 // NUMBER RETURN
    shoppingFor("blue tank top", "black jeans");  // STRING RETURN
    saleItems(salePrices, 50);                    // ARRAY RETURN