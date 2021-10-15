// Reference: https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/

function symptom_search() {

    var input, filter, ul, li, a, i, txtValue;
    
    input = document.getElementById("userInput");
    filter = input.value.toLowerCase();
    ul = document.getElementById("listOfSymptoms");
    li = ul.getElementsByTagName("li");
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } 
        else {
            li[i].style.display = "none";
        }
    }    
}

function showSymptom() {
    document.getElementById('listOfSymptoms').style.display = "block";
 }

 function showSymptomDescription() {
    document.getElementById('symptomDescription').style.display = "block";
 }