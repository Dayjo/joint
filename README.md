## joint.js

_Allows the ability to add extra functionality to an exisintg function by joining an array of functions together._


### Example
First include the joint.js file or simply place the function in your script
```javascript
// Minified-joint
function joint(a){var b;b=a[a.length-1];a.pop();a=1<a.length?joint(a):a[0];return function(){b.apply(new a)}};
```

```javascript
// My original function that I need to extend
function my_func() {
  console.log( "Original functionality." );
}

// Function with the new functionality
function new_func() {
  console.log( "New functionality." );
}

// Add the functionality of new_func to my_func 
my_func = joint([ my_func, new_func ]);

// Now run the original function with the new functionality
my_func();

/* CONSOLE OUTPUT:
 > Original functionality.
 > New functionality.
 */
```
