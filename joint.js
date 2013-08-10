/**
 * joint() joins an array of functions together to return a single function
 * @param  {array} a An array of functions
 * @return {function}   Returns a function which is an accumilation of functions in 'a'
 */
function joint( a ) {
	var b;

	b = a[(a.length-1)];

	a.pop();

	if ( a.length > 1 ) {
		a = joint( a );
	} else {
		a = a[0];
	}

	return function() {
		b.apply(new a());
	};
}

)

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
