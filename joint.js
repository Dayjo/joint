//----------------------------------------//
// Just pick the most appropriate version //
//----------------------------------------//
/**
 * Joint for joining more than 2 functions.
 * Joins an array of functions together to return a single function
 * @param  {array} a An array of functions
 * @return {function} Returns a function which is an accumilation of functions in 'a'
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
		b.apply( new a() );
	};
}