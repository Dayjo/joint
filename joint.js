function joint(a, b){
      return function() {
        b.apply(new a());
      };
}


function my_func() {
  console.log("Original functionality.");
}

function new_func() {
  console.log("New functionality.");
}


my_func = joint(my_func, new_func);

my_func();
