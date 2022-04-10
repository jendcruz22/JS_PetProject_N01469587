// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
/** checkInput Function
 * This function checks if a given input value is anything but a string.
 * Returns 'Empty string', if a given input is an empty string
 * Returns 'Input consists of a number. Please try again.', if the input is a number or a string with numbers.
 * Returns 'Valid', if the given string is valid.
 * @param {string} input
 */
 // FUNCTION TO CHECK IF INPUT IS VALID
 function checkInput(input) {
    console.log("checkInput accessed");
    var output;
    var regEx = /\d/.test(input);
    if(input === "") {
        output = "Empty string";
    }
    else if (regEx === true) {
        output = "Input consists of a number. Please try again.";
    }
    else {
        output = "Valid";
    }
    return output;
}