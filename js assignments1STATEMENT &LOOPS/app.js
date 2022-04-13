/*IF ELSE
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1.  finds the largest  between two number by using “>” and “=” operator in JavaScript.

1.1   Print num1 is the largest if num1>num2.
1.2   Print num2 is the largest if num1<num2.
1.3   Else print num1 and num2 are equal when num1==num2. -->

<!-- 1.1 --> */

let num1 =50;
let num2 =30;
if(num1 > num2){
    console.log("num1 will be largest number");
}
else{
    console.log("num2 will be largest number");
}

// 1.2 //
num1 =100;
num2 =200;
if(num1 < num2){
    console.log("num2 will be largest number");
}
else{
    console.log("num1 will be largest number");
}

// 1.3 //
num1 =30;
num2 =30;
if(num1 ==num2){
    console.log("both values are equal");
}
else{
    console.log("both values are not equal");
}
////////////////////////////////////////////////////////////////////////////
/*2.  checks if input number is even or odd by using “ % ” operator in JavaScript.

2.1  Print “Number is even” if the number is divisible by 2.
2.2  Else print “Number is odd” if the number returns a remainder when divided by 2.*/

// 2.1//
let x =20;
if(x % 2 == 0){
    console.log("x is even number");
}

//2.2//
x =21;
if(x % 2 == 0){
    console.log("x is even number");
}
else{
    console.log("x is odd number");
}
/////////////////////////////////////////////////////////////////////////////////
/*
3. Using assignment operator (+=) Print the below table 

2 X 1 = 2
2 X 2 = 4....
2 X 10 = 20*/
let a=0;
console.log(a += 2);
console.log(a += 2);
console.log(a += 2);
console.log(a += 2);
console.log(a += 2);
console.log(a += 2);
console.log(a += 2);
console.log(a += 2);
console.log(a += 2);
console.log(a += 2);
/*
4. add value using assignment Operation   (Arithmetic ,multiplication ,division & modulus)  

let X=10
ley y=5
Z=? */
// Addition
x = 10;
y =5;
z =x + y
console.log(z);
//multiplication
x = 10;
y =5;
z =x * y
console.log(z);
//Division
x = 10;
y =5;
z =x /y;
console.log(z);
//modulus
x = 10;
y =5;
z =x % y
console.log(z);
/*
5. Achieve using comparison operator

let value= 100-25
let value1= 100-75
let value2= 100-50

if value  is greater then value1 
if value1 is greater value 2 */
let value= 100-25;
let value1= 100-75;
let value2= 100-50;
if(value>=value1){
    console.log(`value greater`);
}else if(value1>value2){
   console.log(`value2 greater`);
}else{
    console.log(`value is not largest`);
}
///////////////////////////////////////////////////////////////
/*
6. Choose the correct comparison operator to alert true, when x is greater than y.

x=15
y=20
alert(x   y) */
x=15
y=20
alert(x <= y);
////////////////////////////////////////////////////////////
/*
7. Choose the correct comparison operator to alert true, when x is equal to y.
x=15
y=15
alert(x   y)*/
x=15
y=15
alert(x === y);


////////////////////////////////////////////////////////////
/*
8. if height is defined means need to show "'YAY! Height is defined"  else it need to show 'Height is UNDEFINED'

let height =0.*/

let height =0;
if(height > 0){
    console.log("YAY! Height is defined");
}
else{
    console.log("Height is UNDEFINED");
}
/////////////////////////////////////////////
/*9. return true & false according to truthy  and falsy value

str='Joans' 
num=0
let obj={}
let str=""

return true & false. */
console.log(Boolean(str='Joans'));
console.log(Boolean(num=0));
console.log(Boolean(obj={}));
console.log(Boolean(str=""));
/////////////////////////////////////
/*10. if money is defined means need to show "Don't spend it all :"  else it need to show 'You should get a Job!'
const money = 100;*/
let money = 100;
if(money > 0){
    console.log("Don't spend it all");
}
else{
    console.log("You should get a Job");
}
//////////////////////////////////////////////////////////////
/*11.WAP to print below patterns.

A)
*****
*****
*****
*****
*****

B)
*
**
***
****
*****

C)
    *
   **
  ***
 ****
*****

D)
    1
   121
  12321
 1234321
123454321
*/
//B)
i=1;
j=1;
let result_1='';
for(i=1;i<=5 ; i++){
   for(j=1;j<=i;j++){
       result_1 +=`*`;
   };result_1 +=`\n`;
};
console.log(result_1);

//A)



////////////////////////////////////////////////////////////////////////
/*12. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.Using assignment opratr only(+=);*/





/////////////////////////////////////////////////////////////////////////////////////////////////
/*13 . Print the below tables. Using assignmemnt operator only (+=).*/

let result= ' ';
for(let i = 1; i <= 10; i++){
if (i <= 9){
    result += `${i*2},`;
}
else{
    result += `${i*2}`;
}
}
console.log(`2 math table is = ${result}`)
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*14. Using JavaScript switch statement to get the day of the week

Output should be accordingly current day 

sample output
Today is Friday*/

let day = "saturday";

switch (day) {
  case "sunday":
    console.log("Today is Sunday!");
    break;
  case "monday":
    console.log("Today is Monday!");
    break;
  case "tuesday":
    console.log("Today is Tuesday!");
    break;
  case "wednesday":
    console.log("Today is Wednesday!");
    break;
  case "thursday":
    console.log("Today is Thursday!");
    break;
  case "friday":
    console.log("Today is Friday!");
    break;
  case "saturday":
    console.log("Today is Saturday!");
    break;
  default:
    console.log("Something went wrong!");
}
///////////////////////////////////////////////////////////////////////////////////
/*15.If today is neither Saturday (6) nor Sunday (0), write a default message with the help of switch

15.1  "Today is Saturday"
15.2  "Today is Sunday"
15.3  "Looking forward to the Weekend".*/
day = "";

switch (day) {
  case "0":
    console.log("Today is Sunday!");
    break;
  case "1":
    console.log("Today is Monday!");
    break;
  case "2":
    console.log("Today is Tuesday!");
    break;
  case "3":
    console.log("Today is Wednesday!");
    break;
  case "4":
    console.log("Today is Thursday!");
    break;
  case "5":
    console.log("Today is Friday!");
    break;
  case "6":
    console.log("Today is Saturday!");
    break;
  default:
    console.log("Looking forward to the Weekend");
}

////////
/*16. Using the JavaScript switch statement to get the day count based of a month

Expected Output
30 days*/
 

let month ="january";
switch(true){
  case month == "january" ||
  month == "march" ||
  month == "may" ||
  month == "july" ||
  month == "August" ||
  month == "october" ||
  month == "december":
    console.log("31 Days");
    break;

case month == "april" ||
     month == "june" ||
     month == "september" ||
     month == "november":
  console.log("30 Days");
  break;
  case month == "february":
    console.log("28 Days");
    break;
    default:
      console.log("Invalid month");

}
////////////////////////////////////////////////////////////////////////
/*12. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.Using assignment opratr only(+=);*/

let n = 10;
let res =0
for(let i=1; i<=n; i++){
  res +=i;
}console.log(res);