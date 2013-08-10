*joint.js*

_Allows the ability to add extra functionality to an exisintg function by joining an array of functions together._

```javascript

function my_func() {
  console.log("Original functionality.");
}

function new_func() {
  console.log("New functionality.");
}

function even_newer_func() {
  console.log("Even newer functionality.");
}


my_func = joint([my_func,new_func,even_newer_func]);

my_func();

```