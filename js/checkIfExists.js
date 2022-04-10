/** checkIfExists Function
 * This function checks if a given input value exists in our array of symptoms.
 * Returns an object consisting of all information related to that symptom, if the symptom exists in our array.
 * Returns "Inexistent" as the output, if the symptom does not exist in our array of symptoms.
 * Returns all the information for the last symptom that matches the provided substring, if the input value is a substring of the symptoms in our array.
 * @param {string} input
 */
// FUNCTION TO CHECK IF GIVEN INPUT EXISTS. IF YES, IT RETURNS THE NECESSARY DATA
function checkIfExists(input) {
    console.log("checkIfExists accessed");
    results = [];

    // FOR LOOP TO GO THROUGH EVERY VALUE IN THE OBJECT
    for (i = 0; i < Object.keys(objs.symptoms).length; i++){

        // IF A GIVEN STRING CONSISTS IN THE SYMPTOM OBJECT'S NAME, ADD AN OBJECT CONSISTING OF IT'S PROPERTIES TO THE ARRAY
        if (processVal(objs.symptoms[i].name).includes(processVal(input))){
            results.push({name:objs.symptoms[i].name, isOrNot:objs.symptoms[i].isOrNot, description:objs.symptoms[i].description, url:objs.symptoms[i].url});
        }
        
        // ELSE PUSH A BOOLEAN FALSE VALUE
        else {
            results.push(false);
        }
    }

    
    // LOOP THROUGH THE RESULTS ARRAY
    for(i = 0; i<results.length; i++){

        // IF THE VALUE AT ANY POINT IN THE RESULTS ARRAY IS THE BOOLEAN VALUE 'false' THEN CONTINUE
        if(results[i] === false){
            continue;
        }
        // ELSE RETURN OBJECT
        else {
            return (results);
        }
    }
    return "Inexistent";   

}
