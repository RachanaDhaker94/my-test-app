//Remove the duplicates in the array
//let arr1 = [1, 2, 2, 3, 4, 4, 5];

//let arr = [1,2,3,-1,0,-2,0,-1.5];

export const removeDuplicate = (arr)=>{
    let filter = arr.filter((num, index, self)=>{
        return arr.indexOf(num) === index
    });
    return filter;
}

export const findDuplicate = (array2) =>{
    let filter = array2.filter((num, index, self)=>{
        return array2.indexOf(num) !== index
    });
    return filter;
}
// sort array in acending order
export const sortArrOfNum = (array)=>{
    return array.sort((a, b)=> a-b);
}

// sort array in decending order
export const sortArrDecending = (array)=>{
    return array.sort((a, b)=> b-a);
}
export const getDuplicateCount=(array)=>{
    let countMap = {};
    let duplicateCount = [];

    array.forEach((item)=>{
       countMap[item] = (countMap[item] | 0) +1
    })
 
    for(let item in countMap){
      duplicateCount.push({elem:item, count:countMap[item]});
    }
 
    return duplicateCount
 }

 //export const pelendrome


/* 
 Merge the 2 array, and find the average of unique array
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
Find the repeated words & there count in the array
let wordsArray = ["apple", "banana", "apple", "orange", "banana", "grape", "apple"];
Find the similar words and groups that array
let wordsArray = ["apple", "banana", "apple", "orange", "banana", "grape", "apple", "grape", "grape"];
Group the array with same age
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 35 },
    { name: "Eve", age: 30 }
];
Find the repeated similar characters in the string ex Avgerage, Avee,Ages -> AV - 2
let wordsArray = ["Average", "Avee", "Ages"];
*/