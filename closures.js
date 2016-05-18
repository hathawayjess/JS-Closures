var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
};


//////////////////PROBLEM 1////////////////////

// Above you're given a function that returns another function which has a closure over the name variable.
// Invoke outer saving the return value into another variable called 'inner'.

// Code Here

var inner = outer();


//Once you do that, invoke inner.

  //Code Here
  inner();



//////////////////PROBLEM 2////////////////////


var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};


// Above you're given a callFriend function that returns another function.
// Create a makeCall function that when invoked logs  'Calling Jake at 435-215-9248' in your console.

  //Code Here

function makeCall() {
  var newCall = callFriend();
  newCall('435-215-9248');
}





//////////////////PROBLEM 3////////////////////



/*
  Write a function called makeCounter that makes the following code work properly.
*/

//Code Here

function makeCounter() {
  var counter = 0;
  return function() {
    return counter += 1;
  }
}

//Uncomment this once you make your function
//   var count = makeCounter();
//   count(); // 1
//   count(); // 2
//   count(); // 3
//   count(); // 4



//////////////////PROBLEM 4////////////////////


// Inside the function called counterFactory
// return two functions that implement up/down counter.
// The first function is called inc, this function is responsible for incrementing the value once
// The second function is called dec, this function is responsible for decrementing the value by one
// You will need to use the module pattern to achieve this.

function counterFactory(value) {

  // Code here.

  return {
    inc: function() {
      return ++value;
    },
    dec: function() {
      return --value;
    }
  }
}


counter = counterFactory(10);

//++value increments the variable, returning the new value.
//value++ increments the variable, but returns the old value.
//--value decrements the variable, returning the new value.
//value-- decrements the variable, but returns the old value.




//////////////////PROBLEM 5////////////////////


// Inside the motivation function create another function called message that will return 'You're doing awesome, keep it up firstname lastname.'

  function motivation(firstname, lastname){

    var welcomeText = 'You\'re doing awesome, keep it up ';

    // code message function here.
    function message() {
      return welcomeText + firstname + ' ' + lastname + '.';
    }


    //Uncommment this to return the value of your invoked message function

    return message()
  }

  motivation('Billy', 'Bob'); // 'Your doing awesome keep it up Billy Bob



//////////////////PROBLEM 6////////////////////

// Inside the return create a publicMethod property that is a function that invokes privateMethod. After you create the privateMethod
// Invoke it by calling module.publicMethod(); outside the module scope

  var module = (function() {
    var person = {
      name: "phillip",
      age: 29,
      location: 'Utah'
    };

    var privateMethod = function(){
      return "Hi, I'm " + person.name + ", age " + person.age + " from " + person.location;
    };

    // Anything that is being returned is made public and can be invoked from outside our lexical scope

    return {
      // Code here.
      publicMethod: function() {
       return privateMethod();
      }
    };

  })();

//Uncomment this after you create your public method
  module.publicMethod();



//////////////////PROBLEM 7////////////////////
// Here we have a for loop that will iterate as long as i is less than or equal to 5. What we need to do is console.log(i)
// So that it logs ( 0 then 1 then 2 then 3, etc). Run this code in your console to see what the output is.



function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(function(i) {
      return function() {
        newScope(i);
      }
    }(i), i * 1000)
  }

  function newScope(i) {
    console.log(i)
  }
}
timeOutCounter();
  // To make this code work you will need to create a new scope for every iteration.

  //Before fixing, the above code will log each number 1 second after another, but they're all 6's.
  //This is because we are passing the reference to the variable i, but not the actual value at the
  //moment inside each loop. By the time the setTimeout function is executed, the for statement has 
  //already incremented the value of i to 6.

  //To fix this, we need to pass the setTimeout function the actual value of i at each loop execution.
  //We must create a new scope so each loop will have access to the value of i at the right moment



//////////////////PROBLEM 8////////////////////

  var funcArray = [

  function() {
    return 0;
   },
  function() {
    return 1;
    }, 
  function() {
    return 2;
    },
  function() {
    return 3;
    },
  function() {
    return 4;
    },
  function() {
    return 5;
    },
    
  ];

  funcArray[0]();
  funcArray[1]();
  funcArray[2]();
  funcArray[3]();
  funcArray[4]();
  funcArray[5]();

/*
  Make the following code work
  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5
  *Hint: Don't let this fool you. Break down what's really happening here.
*/