function stringChop(str, size) {
const chunks = [];
    
    // Loop through the string and slice it into chunks
    for (let i = 0; i < str.length; i += size) {
        // Slice the string from the current index to the next chunk length
        chunks.push(str.slice(i, i + size));
    }
    
    // Return the array of chunks
    return chunks;
}

// Do not change the code below
const str = prompt("HelloWorld");
const size = prompt(3);
alert(stringChop(str, size));
