// Note: this JavaScript would need to be executed at the bottom of your HTML file, just above the closing </body> tag.

// Function name should match your x-data attribute.
function rando() {
  
    // Top 5 boys and girls names in 2023
    // This is an array. Values can be accessed by their index, starting at 0. For example, names[0] == 'Olivia'; and names[5] == 'Oliver' Arrays are always "zero-indexed." The first value is position 0. We could also make a call to an API here to fetch popular names from a web service, removing the need to hard-code a list of names.
    const names = ['Olivia', 'Noah', 'Emma', 'Liam', 'Amelia', 'Oliver', 'Sophia', 'Elijah', 'Charlotte', 'Mateo'];
    
    // Everything in the return call will be available to HTML elements within x-data="rando"
    return {
      
      // get is a special keyword that binds a property to a function. In this case when the "name" property is called, the name() function will execute below.
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
      
      // The name() function returns a name string by using a random number generator bound to the max number of items in the provided array (names.length). What we're really doing here is calling names[x] where x is a random number between 0 and 9. That will then select a "random" name from the array, e.g. names[6] == 'Sophia'
      get name() {
        
        // Math.floor(Math.random() * max)
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        return names[Math.floor(Math.random() * names.length)];
      },
    }
  }