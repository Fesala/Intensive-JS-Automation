function longestPrix(longestPrixArr){
    if (longestPrixArr.length === 0){
        console.log("");
        return "";
    }

    if (longestPrixArr.length === 1){
        console.log(longestPrixArr[0]);
        return longestPrixArr[0];
    }
    
    let result = "";
    for (let n = 0; n < longestPrixArr[0].length; n++) {
        for (let k = 1; k < longestPrixArr.length; k++){
            if(longestPrixArr[0].split('')[n] === longestPrixArr[k].split('')[n]){
                result = n;
            }else{
                console.log(longestPrixArr[0].slice(0,n));
                return longestPrixArr[0].slice(0,n);
            }
        }
    }
    return longestPrixArr[0];
}

let longestPrixArr1 = ["flower", "flow", "flight"]
longestPrix(longestPrixArr1);
let longestPrixArr2 = ["dog", "racecar", "car"]
longestPrix(longestPrixArr2);