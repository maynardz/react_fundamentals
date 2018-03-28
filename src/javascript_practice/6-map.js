const instructors = [
    {name: 'Quincy', specialty: 'Quantam Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Paul', specialty: 'Tuvan throat singing'},
    {name: 'Aaron', specialty: 'Entomology'},
    {name: 'Carolyn', specialty: 'Kung fu'}
]

let instructors_names = []; 

for (let i = 0; i < instructors.length; i++) {
    instructors_names.push(instructors[i].name);
}

console.log(instructors_names);

//Map function
const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

//We create a variable called instructorNames that store the result as an array of objects.
//We are calling .map on the instructors array: instructors.map.
//The instructor parameter in .map can be named anything, usually something related to the array. 

//Exact same thing, different parameter name
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNames);
//The .map() function requires a return value. This is the key rule of using .map(), so the fat arrow is taking care of that requirement.

//Try to fix the following code
const instructorInfo = instructors.map(instructor => `${instructor.name}: ${instructor.specialty}`);
console.log(instructorInfo);

// The following code takes an array of objects and creates a new array containing the newly reformatted objects.
var kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];

console.log(kvArray);

var reformattedArray = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
    return rObj;
})
//reformattedArray is now [{1:10}, {2:20}, {3:30}],
//  kvArray is still: 
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]