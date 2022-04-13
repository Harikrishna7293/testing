/*var myArray = [1, -2, 2, -4 ];

function getNegativeNumbers(array) {

    var negatives = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives.push(array[i]);
        }
    }
    return negatives;

}
console.log(getNegativeNumbers(myArray));*/

//////////////////////////////////////




/*var myArray = [0 , 9 , 1];

function getNegativeNumbers(array) {

    var negatives = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives.push(array[i]);
        }
    }
    return negatives;

}
console.log(getNegativeNumbers(myArray));*/


var myArray = [4,-3, 2,1,0];

function getNegativeNumbers(array) {

    var negatives = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives.push(array[i]);
        }
    }
    return negatives;

}
console.log(getNegativeNumbers(myArray));

////////////////
/*2. Remove specific element from an array
  [1, 2, 3], 2       // Expected = [1, 3]
  [1,2, '2'] '2'     // Expected = [1, 2]
  [false, '2'. 1] false   // Expected = ['2', 1]
  [1, 2, '2', 1] 1     //Expected [2,'2']*/
  arr =[1, 2, 3];
  let res = [];
  let  a= (array,n) =>{
     const remove = array.indexOf(n);
     array.splice(remove,1);
     console.log(array);
  };
  a(arr,2);

  
//   [1, 2, 3], 2       // Expected = [1, 3]
  arr= [1,2, '2'];
    a= (array) =>{
     array.pop();
     console.log(array);
  };



  a(arr);

//   [false, '2'. 1] false   // Expected = ['2', 1]
  arr=[false, '2', 1];
  a= (array) =>{
     array.shift();
     console.log(array);
  };

  a(arr);

//   [1, 2, '2', 1] 1     //Expected [2,'2']

  arr=[1, 2, '2', 1];
  a= (array) =>{
     array.shift();
     array.pop();
     console.log(array);
  };

  a(arr);

  ///////////////////////////////////
  a = (p1,p2)=>{
    let boolean = Boolean(p1==p2);
    console.log(boolean);
};
let date1="new Date('2000/01/01 08:00:00')";
let dat2="new Date('2000/01/01 08:45:00')";
a(date1,dat2);

date1="new Date('2000/01/01 08:00:00')";
dat2="new Date('2000/01/01 08:00:00')";
a(date1,dat2);

date1="new Date('2001/01/01 08:00:00')";
dat2="new Date('2000/01/01 08:00:00')";
a(date1,dat2);
/////////////////////
/*4. Calculate the difference between two dates.   
   new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10')  // Expected { hrs: 0, min: 45, sec: 10 }
   new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00')  // Expected { hrs: 1, min: 50, sec: 23 }
   new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00')  // Expected { hrs: 3, min: 4, sec: 12 }*/
   
   function timeDiffCalc(dateFuture, dateNow) {
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;
    console.log('calculated days', days);

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;
    console.log('calculated hours', hours);

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    console.log('minutes', minutes);

    let difference = '';
    if (days > 0) {
      difference += (days === 1) ? `${days} day, ` : `${days} days, `;
    }

    difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;

    difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`; 

    return difference;
  }

  console.log(timeDiffCalc(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10')));

  //////////////////////////////////////
  function timeDiffCalc(dateFuture, dateNow) {
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;
    console.log('calculated days', days);

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;
    console.log('calculated hours', hours);

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    console.log('minutes', minutes);

    let difference = '';
    if (days > 0) {
      difference += (days === 1) ? `${days} day, ` : `${days} days, `;
    }

    difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;

    difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`; 

    return difference;
  }

  console.log(timeDiffCalc(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00')));


  ///////////////////////////////////////////////////////////////////////
 
  function timeDiffCalc(dateFuture, dateNow) {
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;
    console.log('calculated days', days);

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;
    console.log('calculated hours', hours);

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    console.log('minutes', minutes);

    let difference = '';
    if (days > 0) {
      difference += (days === 1) ? `${days} day, ` : `${days} days, `;
    }

    difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;

    difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`; 

    return difference;
  }

  console.log(timeDiffCalc(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00')));

  ////////////////////////////////////////////////////////////////
/*5. Convert the array to an object It should have a key for each unique value of the array,The corresponding object value should      be the number of times the key occurs within the array.
  
[1,2,2,3]  //Expected {1:1,2:2,3:1}
[9,9,9,99] //Expected  {9:3,99:1}
[4,3,2,1]  //Expected {1:1,2:1,3:1,4:1}*/

  