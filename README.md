## joint.js

_Allows the ability to add extra functionality to an exisintg function by joining an array of functions together._

There are two versions available, depending on whether you will ever need to join more than 2 functions together

### Example
First include one of the joint functions in your script
```javascript
// Minified-joint (for more than 2 functions) 
function joint(a){var b;b=a[a.length-1];a.pop();a=1<a.length?joint(a):a[0];return function(){b.apply(new a)}};
```
or
```javascript
// Minified-join (for only 2 functions)
function joint(a){return function(){a[1].apply( new a[0]() );};};
```

Then use it like this;
```javascript
// My original function that I want to extend
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

Here it is on jsbin; http://jsbin.com/akinow/1/edit#console
