///*var name ="Tanmay";
//    var age ="22";
//    
//    var message="my name is" + name + "my age is" +age+ "years";
//    //alert(message);
//    console.log(message); */
//***variables and strings***
//
///*var firstName ="john";
//var lastName="jacobsmith";
//var dateOfBirth = "10-9-82";
//var age=23;
//var profileImageUrl="http://coolpicks.com/johnjacob.jpg"
//var loginMessage = "Welcome , " + firstName + ". Happy " + age + "rd birthday";
//
//console.log(loginMessage);*/
//***arthemetic operators***
//
///*var sum = 10 + 15;
//var sub = 223 - 156;
//var mul = 110 * 334;
//var div = 134 / 455;
//var mod = 10 % 3;
//var msg ="10 / 3 = 3 with a remainder of " + mod;
//var result = 10 * ((5 + 3) - 4);
//console.log(result);*/
//
//***comparison operators***
///*var accountBalance = 79000;
//var onePlus = 80000;
//var coupon = 1000;
//if(onePlus <= accountBalance){
//    accountBalance -= onePlus;
//    console.log("I bought a new phone");
//    console.log("accountBalance " + accountBalance)
//}else
//if(onePlus - coupon <= accountBalance){
//    console.log("i have buyed the phone with 1000 off...")
//    accountBalance -= onePlus - coupon;
//}
//else{
//    console.log("i cant buy that phone")
//}*/
//
////var val1 = 23;
////var val2 = "23";
////
////if(val1 === val2){
////    console.log("these are same")
////}else{
////    console.log("these are not same")
////}
//
//***Logical Operators***
////if(1===1 && 2===2){
////    console.log("these are true");
////}
////if(true && true){
////    console.log("these are true");
////}
////if(1 === 2 || "tanmay" === "tanmay"){
////    console.log("one of these is true")
////}
////var cat1 = 5;
////var cat2 = 10;
////var cat3 = 1;
////var cat3DisabledHandicap = true;
////if((cat1 > cat2 && cat1 > cat3) && !cat3DisabledHandicap {
////    console.log("cat1 is cutest");
////}else if(cat2 > cat1 && cat2 > cat3) && !cat3DisabledHandicap{
////    console.log("cat2 is cutest");
////}else if(cat3 > cat1 && or cat3 > cat2) || cat3DisabledHandicap{
////    console.log("cat3 is cutest");
////}

 //***arrays***   
var student1 = "tanmay";
var student2 = "RV";
var student3 = "RR";

var students =["tanmay","RV","RR"];
var studentList = [];
studentList.push(students[0]);

var index = studentList.indexOf("tanmay")

if(index > -1){
    studentList = studentList.splice(index, 2);
}
console.log(index);

//var someVal =10;
//
//for(var x=0; x<someVal; x++){
//    console.log(x);
//}
12
//var students =["tanmay","RV","RR"];
//
//for(var i=0; i<students.length; i++){
//    console.log(students[i]);
//}
//***functions****///

//function aoc(r){
//    return 3.14 * r * r;
//}
//  var area1 = [];
// area1.push(aoc(12));
//area1.push(aoc(14));
//console.log(area1);

//var bankBalance = 50000;
//
//function buyPhone(priceOfPhone){
//    if(priceOfPhone <= bankBalance){
//        bankBalance -= priceOfPhone;
//        console.log("Purchase Successful")
//    }else{
//        console.log("Insufficient money");
//    }
//    
//    
//}
//console.log(bankBalance);
//buyPhone(79000);
//console.log(bankBalance)
//buyPhone(60000);
//
//var transaction = function buyPhone(priceOfPhone){
//    if(priceOfPhone <= bankBalance){
//        bankBalance -= priceOfPhone;
//        console.log("Purchase Successful")
//    }else{
//        console.log("Insufficient money");
//    }
//    
//    transaction(30000);
///**objects***
//var student = [];
//    function Student(first, last, age){
//    this.firstName = first;
//    this.lastName  = last;   
//    this.age =  age;
//    this.message = function(){
//        return "Hi My name is " + this.firstName + this.lastName + "my age is " + this.age + "years old";
//     };
//}
//student.push(new Student("Kartik", "Kapoor", 22))
//student.push(new Student("Siddharth", "Khanna", 22))
////console.log(student.message);
////console.log(student.firstName);
////console.log(student.lastName);
////console.log(student["firstName"]);
////console.log(student["lastName"]);
//
//for(var index=0; index<student.length; index++){
//    var student = student[index];
//    console.log(student.message());
//}
////var student1 = new Object();
////student1.firstName ="Kartik";
////student1.lastName = "kapoor";
////
////var student2 = {};
////student2.firstName ="Ranveer";
////student2.lastName ="Vaghela";
////
////var students = [];
////students.push(student1);
////students.push(student2);
////console.log(students);
//**binding
//this.phone = "Redmi note 5 pro";
//
//var studyTime = {
//    phone: "Iphone 11",
//    getPhone: function() {
//    return this.phone;
//}
//};
//console.log(studyTime.getPhone());//prints "iphone 11"
//
//var getYourPhone = studyTime.getPhone; // prints "Redmi note 5 pro"
//console.log(getYourPhone());
//
//var theRealGetYourPhoneFunction = studyTime.getPhone.bind(studyTime);
//console.log(theRealGetYourPhoneFunction());