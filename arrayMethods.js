let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// remove last string in array
secretMessage.pop();

// add to the end of the array
secretMessage.push('to', 'Program');

// amend a specific item in the array using its index
secretMessage[7] = 'right';

// remove first item in the array
secretMessage.shift();

// add item at the start of the array
secretMessage.unshift('Programming');

// replace items in an array with new item(s)
secretMessage.splice(6, 5, 'know,');

// concatenates all the items in the array to a string using a specified separator
console.log(secretMessage.join(' '));