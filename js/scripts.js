// SYMPTOM SEARCH FUNCTION TO SEARCH FOR THE VALUE THAT THE USER HAS ENTERED
function symptomSearch() {

    var input, filter, arrayOfSymptoms, i, txtValue;
    
    // GET THE INPUT ENTERED BY THE USER IN THE SEARCH BAR
    input = document.getElementById("userInput");

    // CONVERT USER INPUT TO LOWER CASE
    filter = input.value.toLowerCase();

    // THE arrayOfSymptoms VARIABLE STORES ALL THE LIST ELEMETS HAVE THE LI TAG
    arrayOfSymptoms = document.getElementsByTagName("li");
    
    // LOOP TO CHECK IF THE INNER HTML FOR THE USER ENTERED TEXT EXISTS IN OUR LIST OF SYMPTOMS
    for (i = 0; i < arrayOfSymptoms.length; i++) {
        txtValue = arrayOfSymptoms[i].innerText;

        // IF THE SUBSTRING EXISTS IN OUR LIST OF SYMPTOMS, THAT PARTICULAR SYMPTOM WILL BE DISPLAYED
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            var elementID = i+1;
            document.getElementById("symptom"+elementID).style.display = "block";
        } 

        // IF THE SUBSTRING DOES NOT EXISTS IN OUR LIST OF SYMPTOMS, THAT PARTICULAR SYMPTOM WILL NOT BE DISPLAYED
        else {
            arrayOfSymptoms[i].style.display = "none";
            document.getElementById("infoButton").style.display = "block";
        }
        
    }    
}

// FUNCTION TO DISPLAY THE INFORMATIONAL MESSAGE
function displayInfoMsg(){
    document.getElementById("infoMsgDiv").style.display = "block";
    document.getElementById("infoMsg").innerHTML = "If this is an emergency, <span class='emgStyle'>CALL 911!</span> <br> Symptom not found. <br> Visit the <a href='https://www.cdc.gov/coronavirus/2019-ncov/your-health/about-covid-19.html'>CDC website</a> to learn more about COVID-19.";
}
 
// FUNCTION TO DISPLAY A PARTICULAR SYMPTOM'S DESCRIPTION
function showSymptomDescription(id) {
    document.getElementById('searchBox').style.display = "none";
    document.getElementById('listOfSymptoms').style.display = "none";
    document.getElementById('symptomDescription'+id).style.display = "block";
    document.getElementById('searchButton').style.display = "block";
}

jQuery(document).ready(function () {

    $("#symptom1").click(function(){
        id = 1;
        showSymptomDescription(id);
    })

    $("#symptom2").click(function(){
        id = 2;
        showSymptomDescription(id);
    })

    $("#symptom3").click(function(){
        id = 3;
        showSymptomDescription(id);
    })

    $("#symptom4").click(function(){
        id = 4;
        showSymptomDescription(id);
    })

    $("#symptom5").click(function(){
        id = 5;
        showSymptomDescription(id);
    })

    $("#symptom6").click(function(){
        id = 6;
        showSymptomDescription(id);
    })

    $("#symptom7").click(function(){
        id = 7;
        showSymptomDescription(id);
    })

    $("#symptom8").click(function(){
        id = 8;
        showSymptomDescription(id);
    })

    $("#symptom9").click(function(){
        id = 9;
        showSymptomDescription(id);
    })

    $("#symptom10").click(function(){
        id = 10;
        showSymptomDescription(id);
    })

    $("#symptom11").click(function(){
        id = 11;
        showSymptomDescription(id);
    })

    $("#symptom12").click(function(){
        id = 12;
        showSymptomDescription(id);
    })
    
    $("#symptom13").click(function(){
        id = 13;
        showSymptomDescription(id);
    })
    
    $("#symptom14").click(function(){
        id = 14;
        showSymptomDescription(id);
    })
    
    $("#symptom15").click(function(){
        id = 15;
        showSymptomDescription(id);
    })
    
    $("#symptom16").click(function(){
        id = 16;
        showSymptomDescription(id);
    })
    
    $("#symptom17").click(function(){
        id = 17;
        showSymptomDescription(id);
    })
    
    $("#symptom18").click(function(){
        id = 18;
        showSymptomDescription(id);
    });

    $("#searchButton").click(function(){
        document.getElementById('searchBox').style.display = "block";
        document.getElementById('listOfSymptoms').style.display = "block";
        document.getElementById('symptomDescription'+id).style.display = "none";
        document.getElementById('searchButton').style.display = "none";
        window.location.reload();
    })
});