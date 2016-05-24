// Problem Set #1

// letterCapitalize() function which takes a single string parameter and capitalizes the first 
// letter of each word in the string. You can assume that words in the input string will be 
// separated by only one space.

function letterCapitalize(str) {
    // lets break up str into an array of words
    var words = str.split(' ');
    
    // now loop through the array and capitalize the first letter with .charAt(0), replacing
    // that character
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    // now lets join them back together
    return words.join(' ');
}
console.log('==========================================================================\n');

var myStr = "This is a test with lower case letters for each word.";
var myStrFirstLetterCap = letterCapitalize(myStr);
console.log(myStr + ' ' + '\n\nCONVERTED: \n' + myStrFirstLetterCap);

// function called wordCount which takes a single string parameter and returns the 
// number of words the string contains (ie. "Never eat shredded wheat" would return 4). 
// You can assume that words in the input string will be separated by only one space.
function wordCount(str) {
    var words = str.split(' ');
    
    // simply return the length, this is how many words in the string
    return words.length;
}
console.log('==========================================================================\n');

myStr = 'How many words are in here?';

console.log(myStr + '\nhas ' + wordCount(myStr) + ' words in it.');
