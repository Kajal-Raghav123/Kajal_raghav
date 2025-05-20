function countMultiples(arr,divisors){
    let ans = {};
    for(let i = 0;i < divisors.length;i++){
        let count = 0;
    for(let j = 0;j < arr.length;j++){
    if(arr[j]% divisors[i]===0){
        count++;
    }
    }
    ans[divisors[i]] = count;
    }
    console.log(ans);
}
let numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
let divisors = [1, 2, 3, 4, 5, 6, 7, 8, 9];
countMultiples(numbers,divisors);