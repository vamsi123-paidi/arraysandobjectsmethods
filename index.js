//copying the arrays and objects
//initialization of objects using nested properties
let myDetails = {
    name: "Vamsi paidi",
    gender: "male",
    phoneNumber: 9347245344,
    email: "vamsipaidi251002@gmail.com",
    address: {
        pincode: 534416,
        landMark: "JNTU"
    },
    interestedSubjects: ["M1", "STLD", "EMF"]
}
//creation of shallow copy using object.assign 
let shallowAssignOperator = Object.assign({}, myDetails)
//creation of shallow copy using spread operator
let shallowSpreadOperator = { ...myDetails }
//modifying the nested property in the copied objects
shallowAssignOperator.address.pincode = 534218
shallowSpreadOperator.address.landMark = "KPHB"
//printing the copied objects to observe the changes 
console.log("my Details:", myDetails)
console.log("shallow copy using object assign:", shallowAssignOperator)
console.log("shallow copy using spread operator:", shallowSpreadOperator)

//initialization of object with nested properties
let myBioData = {
    name: "Vamsi paidi",
    gender: "male",
    phoneNumber: 9347245344,
    email: "vamsipaidi251002@gmail.com",
    address: {
        pincode: 534416,
        landMark: "JNTU"
    },
    interestedSubjects: ["M1", "STLD", "EMF"]
}
//creating a deep copy of the object using JSON.parse(JSON.stringify(obj))
let deepCopy = JSON.parse(JSON.stringify(myBioData))
deepCopy.address.pincode=534412
//printing the copied object and main object to check the changes
console.log("my bio data:",myBioData)
console.log("deep copied bio data:",deepCopy)

//using spread operator in array
//initialization of two arrays
let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,0]
//combining the two arrays with spread operator
let combinedArray = [...arr1,...arr2]
//printing of combined array
console.log("the combined array is : ",combinedArray)

//initailization of two objects
let obj1={Name:"Vamsi Paidi",Age:22,Gender:"male"}
let obj2={role:"MERN stack Developer"}
//combining the two objects using spread operator
let combinedObject = {...obj1,...obj2}
//priting the combined object
console.log("the combined object is : ",combinedObject)

//using rest operator
// Function to calculate the sum of any number of arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
// Print the result of calling sum with different numbers of arguments
console.log('Sum of 1, 2, 3 is ', sum(1, 2, 3)); // Output: 6
console.log('Sum of 10, 20 is ', sum(10, 20));   // Output: 30
console.log('Sum of 4, 5, 6, 7 is ', sum(4, 5, 6, 7)); // Output: 22
console.log('Sum of no arguments is ', sum());   // Output: 0

//rest in array destruction
// Initialize an array with at least five elements
let array = [10, 20, 30, 40, 50, 60];
// Use array destructuring and the rest operator
let [firstElement, secondElement, ...remainingElements] = array;
// Print the variables and the new array to the console
console.log('First Element is ', firstElement); // Output: 10
console.log('Second Element is ', secondElement); // Output: 20
console.log('Remaining Elements are', remainingElements); // Output: [30, 40, 50, 60]

