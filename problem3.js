function oddSeries(num){
    let result = [];
    let count = num;
    if(num%2 === 0){
        count = num - 1;
    }
    for(let i = 0;i < count;i++){
        result.push(i * 2 + 1);
    }
    console.log(result.join(", "))
}
oddSeries(1);
oddSeries(2);
oddSeries(3);
oddSeries(4);
oddSeries(5);
oddSeries(6);




