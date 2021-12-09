// SYMPTOM SEARCH FUNCTION TO SEARCH FOR THE VALUE THAT THE USER HAS ENTERED
// Reference: https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/
function symptom_search() {

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
        }
    }    
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
        showSymptomDescription(id=1);
    })

    $("#symptom2").click(function(){
        showSymptomDescription(id=2);
    })

    $("#symptom3").click(function(){
        showSymptomDescription(id=3);
    })

    $("#symptom4").click(function(){
        showSymptomDescription(id=4);
    })

    $("#symptom5").click(function(){
        showSymptomDescription(id=5);
    })

    $("#symptom6").click(function(){
        showSymptomDescription(id=6);
    })

    $("#symptom7").click(function(){
        showSymptomDescription(id=7);
    })

    $("#symptom8").click(function(){
        showSymptomDescription(id=8);
    })

    $("#symptom9").click(function(){
        showSymptomDescription(id=9);
    })

    $("#symptom10").click(function(){
        showSymptomDescription(id=10);
    })

    $("#symptom11").click(function(){
        showSymptomDescription(id=11);
    })

    $("#symptom12").click(function(){
        showSymptomDescription(id=12);
    })
    
    $("#symptom13").click(function(){
        showSymptomDescription(id=13);
    })
    
    $("#symptom14").click(function(){
        showSymptomDescription(id=14);
    })
    
    $("#symptom15").click(function(){
        showSymptomDescription(id=15);
    })
    
    $("#symptom16").click(function(){
        showSymptomDescription(id=16);
    })
    
    $("#symptom17").click(function(){
        showSymptomDescription(id=17);
    })
    
    $("#symptom18").click(function(){
        showSymptomDescription(id=18);
    })

    $("#searchButton").click(function(){
        document.getElementById('searchBox').style.display = "block";
        document.getElementById('listOfSymptoms').style.display = "block";
        document.getElementById('symptomDescription'+id).style.display = "none";
        document.getElementById('searchButton').style.display = "none";
        window.location.reload();
    })
});