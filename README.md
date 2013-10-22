## joint.js

_Allows the ability to add extra functionality to an existing function by joining an array of functions together._

### Example
First include the joint function in your script
```javascript
function joint(a){var b;return b=a[a.length-1],a.pop(),a=a.length>1?joint(a):a[0],function(){b.apply(new a)}}
```
or include the js file
```html
<script src="//raw.github.com/Dayjo/joint/master/joint.min.js"></script>
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

Here it is on jsbin; http://jsbin.com/orIDujE/1/edit?js,console
