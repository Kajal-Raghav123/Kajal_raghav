 const oddNumSeries = (num)=>{
    let ans = [];
    for(let i = 0;i < num;i++){
        ans.push(i * 2 + 1);
    }
    console.log(ans.join(", "));
 }
 oddNumSeries(5);
 oddNumSeries(10);