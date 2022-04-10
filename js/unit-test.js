// FUNCTION TO TEST THE PROCESS VAL FUNCTION
function testProcessVal(input, expRes) {
    var result = processVal(input);

    if(result === expRes) {
        outputCol = "green";
        outputVal = "==PASSED==";
    }
    else {
        outputCol = "red";
        outputVal = "xxFAILEDxx";
    }

    let opString = "Value tested: "+input+"  | Expected result: "+expRes+" <span style='color: "+outputCol+"'>"+outputVal+"<br />";
    let msg = document.getElementById("test1resOp");
    msg.innerHTML +=opString;
}

testProcessVal("Once upon a time in a land FAR FAR AWAY", "onceuponatimeinalandfarfaraway");
testProcessVal("My HUMBER ID is..... N1046987766", "myhumberidis.....n1046987766");


// FUNCTION TO CHECK THE GIVEN INPUT
function testCheckInput(input, expRes){
    var result = checkInput(input);

    if(result === expRes) {
        outputCol = "green";
        outputVal = "==PASSED==";
    }
    else {
        outputCol = "red";
        outputVal = "xxFAILEDxx";
    }

    let opString = "Value tested: "+input+"  | Expected result: "+expRes+" <span style='color: "+outputCol+"'>"+outputVal+"<br />";
    let msg = document.getElementById("test2resOp");
    msg.innerHTML +=opString;

}

testCheckInput(123, 'Input consists of a number. Please try again.');
testCheckInput('', 'Empty string');
testCheckInput('Hello123@', 'Input consists of a number. Please try again.');
testCheckInput('This IS A test stringgggggggg', 'Valid');

// FUNCTION TO TEST IF CHECK IF EXISTS FUNCTION WORKS
function testCheckIfExists(input, expRes) {
    var result = checkIfExists(input);

    if ((expRes === result) && (result === "Inexistent")){
        outputCol = "green";
        outputVal = "==PASSED==";
    } 
    else {
        for(var i = 0; i < Object.keys(result).length; i++){
            if(result[i].name === expRes){
                outputCol = "green";
                outputVal = "==PASSED==";
                break;
            }
            else {
                outputCol = "red";
                outputVal = "xxFAILEDxx";
            }
        }
    }

    let opString = "Value tested: "+input+"  | Expected result: "+expRes+" <span style='color: "+outputCol+"'>"+outputVal+"<br />";
    let msg = document.getElementById("test3resOp");
    msg.innerHTML +=opString;
}

testCheckIfExists("Co", "Congestion or runny nose");
testCheckIfExists("Cold", "Cold");
testCheckIfExists("Vomitting", "Inexistent");