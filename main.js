var ac=1;
ac+=5;
console.log(ac)

var win=5;
win*=10;
console.log(win)

var ayibam=7;
ayibam/=7
console.log(ayibam)

var Daniel=75;
Daniel-=12;
console.log(Daniel)

var ase=12;
ase%=2;
console.log(ase)

var tonye=7;
var boma=8;
var pdd= tonye*boma;
console.log(pdd)

boma++
console.log(boma)

var acct=8;
console.log(acct>'7');

var save=33;
var wise=21;
console.log((save<10)||(wise<40));
console.log(!save)

// CONDITIONAL OR TERNARY ((CONDITION) ? RETURN A VALUE : RETURN A FALSE VALUE)
const john=20;
const ayiba=10;
result=(john<ayiba)? 'The answer is correct' : 'Not correct'
console.log(result);

//CONDITIONAL STATEMENTS
// If condition
var aaa=3
if (aaa>10){
    console.log("correct guy");
}

// if...else condition
if (aaa>10){
    console.log("correct guy");
}else{
    console.log("omor the guy no correct o")
}

// if else..if condition
if (aaa<10){
    console.log('correct guy!!!');
}else {
    console.log("omor the guy no correct ooo!")
}

//loops
// A. while loops ("expression"){
    // statement to be executed if expression is true
//}

var countingNumbers=1;
// while (countingNumbers <10){
//     console.log('counting Number'+ countingNumbers);
//     countingNumbers++;
// }

// B. do while loop

// do{
//     console.log('counting Number:'+ countingNumbers);
//     countingNumbers++;
// }while(countingNumbers<0)

// for loop
// for ("initialization"; "test condition"; "increment"){
    // statement to be executed if expression is true
//}
for (gold =0; gold<=5; gold++){
    console.log('gold mines:'+ gold);
}

const number= 7;

for (i=1; i<=12; i++){
    let resultAnswer= number * i;
    console.log(`${number} x ${i}= ${resultAnswer}`)
}

// JAVASCRIPT FUNCTION
function myFunction ( ){
    // statement
}

function myFirstfunction (){
    console.log("I am an amazing mobile developer")
}
myFirstfunction()

function myFirstFunctions (name,age){
    console.log(`${name} is ${age}years old`);
}
myFirstFunctions("nkechi", 20);

//REUSEABLE BLOCK OF CODES

function Street (sex, complexion){
    let output;
    output= `adaobi is ${sex} and is ${complexion}`;
    console.log(output)
    return output;
}
Street("Female", "fair")

function calculateAreaOfARectangle( length, breadth){
    const area= length * breadth;
    console.log(`${area}cm`)
}
calculateAreaOfARectangle(10,5)

//formulae for converting celsius to fehrenheit

function celsusToF(c){
    var F= (9/5 * c)+32;
    console.log(`${c}degree celsus is equal to ${F} fahrenheit`)
}
celsusToF(1)


// 1.
var num=7;
result =(num%2==0)? "even" : "odd";
console.log(result)

//1.
var sumOfSquareLimit = 5;
var sumOfSquares=0;

for(j=1; j<=sumOfSquareLimit; j++){
     sumOfSquares+=j**2;
    //sumOfSquares +=j **2;
}
console.log(`$(sumofsquares)`)

//3.
var integerLimit=20
var startInt =2;

while (startInt <= integerLimit){
    console.log(startInt);
    startInt+=2;
}

//3. 
var factorialNumber =5
var factorialOutput =1
var k= 1

do{
factorialOutput*=k;
k++
}while (k<=factorialNumber);
console.log(factorialOutput)

// 4.
var countDownNumber =20;

for(m= countDownNumber; m>=1;m--){
    console.log(m);
}

//6.
function reverseString (d){
    var reverseString="";
    for (i=d.length-1; i>=0;i--){
        reverseString +=d[i];
    }
    return reverseString;
}
console.log("reverse string:" + reverseString("bad boy"));

//javascript Array (using array constructor)

const testArray = new Array('me',3, false,"house");
console.log(testArray[2])

// using array constructor

const myArray=[1,2,3,4,5,6];
myArray[2]='pride'
myArray.unshift('winifred')
console.log(myArray)

//ARRAY CONCATINATION .concat
var yourArray= [1,'his', 'my', 'us', 5]

arryResult = myArray.concat(yourArray)

console.log(myArray)
console.log(arryResult)

//JAVASCRIPT OBJECT
var student={
    firstName : "john",
    lastName : "Doe",
    age : 30,
    gender : "male",
    occupation: "Teacher",
    maritalStatus: "married",
    hobbies : ["Reading"],
    address : {
        streetAddress: "123 Main str.",
        city: "New York",
        state: "NY",
        zipCode: "10011"
    }
}
console.log(student.address.zipCode)

//ASSIGNMENT
//1.
var teacher= {
teacherFirstName: "Daniel",
teacherLastName: "Dimkpa",
teacherAge: 33,
teacherGender: 'Male',
institution: "NeraTech Hub",
teachersMaritalStatus: "Single to stupor",
teachersComplexion: "Fair",
stateOfOrigin: "Rivers state",
lga: 'Ogba Egbema Ndoni',
community: "Omoku",
}
console.log(teacher)

//2. U
const numbers = [10, 20, 30];
console.log(numbers)

//3.
const fruit= ['Orrange', 'Pawpaw', 'Apple']
console.log(fruit[1])

//4.
teacher.teacherAge=25;
console.log(teacher.teacherAge)

//JavaScript Asynchronous features

console.log('first');
setTimeout(()=>{
    console.log('second')
}, 2000)
console.log('third');
console.log('fourth');

//callbacks IN JAVASCRIPT
function greeting(name, callback){
    console.log(`Hello ${name}`);
    callback()
}

function callbackFunction(){
    console.log( `I am a callback function`)
}

greeting('Nkechi', callbackFunction);

//PROMISE IN JAVASCRIPT
function greeting(name){
    return new Promise((resolve, reject)=>{
        console.log(`Hello ${name}`);
        resolve();
    });
}
function callbackFunction(){
    console.log("I am a callback Function")
}
// using the promise
greeting('Nkechi').then(()=>{
    callbackFunction();
}).catch(error=>{
    console.log('Error', error);
})
// for the function to print an error
function greeting(name){
    return new Promise((resolve, reject)=>{
        if (name==='mabel'){
            reject("This is not a name")
        }else{
            console.log(`Hello ${name}`);
        resolve();
        }
    });
}
function callbackFunction(){
    console.log("I am a callback Function")
}
// using the promise
greeting('Nkechi').then(()=>{
    callbackFunction();
}).catch(error=>{
    console.log('Error', error);
})

//ES6 SYNTAX FUNCTION


//ARRAY DISTRUCTURING

const array =[1,2,3,4, 'Now'];
const [first, second, third, fourth, fifth]= array;
console.log(fifth)

const ayibamm ={
    age: 28,
    gender: 'male',
    occupation: 'Nysc',
    salary: 33000
}
const {age, gender, occupation, salary}= ayibamm
console.log(salary)

//SPREAD OPERATORS

const imoh=[2,4,6,8,10, 'paste'];
const tryNow = [...imoh];
const testNow= {...ayibamm};
console.log(tryNow, testNow)
