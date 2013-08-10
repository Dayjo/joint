## joint.js

_Allows the ability to add extra functionality to an exisintg function by joining an array of functions together._


### Example
```javascript

function my_func() {
  console.log("Original functionality.");
}

function new_func() {
  console.log("New functionality.");
}

// Add the functionality of new_func to my_func 
my_func = joint([my_func,new_func]);

my_func();

/* CONSOLE OUTPUT:
 > Original functionality.
 > New functionality.
 */
```
