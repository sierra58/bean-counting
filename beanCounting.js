/*
1. Take in a string to be checked, and a character to be counted
2. Set the count to 0
3. Use for-loop to check every character in the string from left to right
4. If the character in the string matches the target character, add counter
5. Return the count number
*/
function countChar(string, char) {
    let count = 0;
    for (let position = 0; position < string.length; position++) {
        if (string[position] === char) {
            count++;
        }
    }
    return count;
}

console.log(countChar("kakKerlak", "k"));