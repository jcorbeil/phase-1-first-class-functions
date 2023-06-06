// index.js

// The receivesAFunction function
function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  // The returnsANamedFunction function
  function returnsANamedFunction() {
    // Define and return a named function
    function namedFunction() {
      // Function body
    }
    return namedFunction;
  }
  
  // The returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      // Function body
    };
  }
  