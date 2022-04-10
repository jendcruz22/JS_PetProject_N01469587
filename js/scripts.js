// WINDOW ON LOAD FUNCTION
window.onload = function () {

    // FUNCTION FOR WHEN THE SEARCH BUTTON IS CLICKED
    document.getElementById('searchButton').onclick = function() {

        // GET USER INPUT
        input = document.getElementById("userInput");

        var checkIp = checkInput(input.value);

        if (checkIp === "Valid") {
            // CHECK IF THE VALUE EXISTS IN THE SYSTEM
            val = checkIfExists(input.value);
            console.log(val);

            // IF THE VALUE DOESN'T EXIST IN THE SYSTEM, LET THEM KNOW
            if (val === "Inexistent"){
                document.getElementById("infoMsgDiv").style.display = "block";
                document.getElementById("infoMsg").style.color = "red";
                document.getElementById("infoMsg").innerHTML = "Symptom does not exist in our system. Contact 911 in case of emergency.";
            }

            else {
                for(i = 0; i < val.length; i++){
                    if (val[i] === false) {
                        continue;
                    }
                    else {
                        document.getElementById("symptomDescription").style.display = "block";
                        document.getElementById("yon").innerHTML = val[i].name;
                        document.getElementById("sympDesc").innerHTML = val[i].description;
                        document.getElementById("soi").href = val[i].url;
                        document.getElementById("soi").innerHTML = "Source of information: "+val[i].url;
                    }
                }
            } 
        }

        else if ( checkIp === "Input consists of a number. Please try again.") {
            document.getElementById("infoMsgDiv").style.display = "block";
            document.getElementById("infoMsg").style.color = "red";
            document.getElementById("infoMsg").innerHTML = "Invalid input";
        }

        // ELSE DISPLAY THE VALUE
        else if ( checkIp === 'Empty string') {
            document.getElementById("infoMsgDiv").style.display = "block";
            document.getElementById("infoMsg").style.color = "red";
            document.getElementById("infoMsg").innerHTML = "Please enter a valid symptom in the search bar above.";              
        }

        else {
            document.getElementById("infoMsgDiv").style.display = "block";
            document.getElementById("infoMsg").style.color = "red";
            document.getElementById("infoMsg").innerHTML = "Error! Refresh the page and try again";    
        }
        return false;
    }
}