/*
Functions that will be called
*/
 function sumTwoNumbers (num1, num2){
    return num1 + num2;
 };

 function multiplyTwoNumbers (num1, num2){
    return num1*num2;
 };

 function subtractTwoNumbers (num1, num2){
    return num1 - num2;
 };

 function divideTwoNumbers (num1, num2){
    return num1/num2;
 };

/*
dynamic Variables
*/
 const initialNumber = 0;
 const operatorValue = [];
 const secondNumber = 0;

const [additionOperator, subtractionOperator, multiplicationOperator, divisionOperator] = ["+","-","x","/"];
Operator
/*
Logic that organizes functions
*/

 function operatorLogic (num1,operator,num2){
   switch (operator){
      case additionOperator:
         sumTwoNumbers(num1,num2);
         break;
      case subtractionOperator:
         subtractTwoNumbers(num1,num2);
         break;
      case multiplicationOperator:
         multiplyTwoNumbers(num1,num2);
         break;
      case divisionOperator:
         divideTwoNumbers(num1,num2);
         break;
   }
 };

