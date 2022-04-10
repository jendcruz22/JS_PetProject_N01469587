/** processVal Function
 * Converts a given string to lower case and removes any space between words.
 * Returns a formatted string.
 * @param {string} input
 */
 function processVal(input) {
    console.log("processVal accessed");
    var input  = input.toLowerCase().replace(/\s/g, "");
    return input;
}