//  https://leetcode.com/problems/two-sum/description/
var twoSum = function(nums, target) {
    for(let i_1 = 0; i_1 < nums.length - 1; i_1++) {
        let secondValue = target - nums[i_1]

        for(let k_1 = i_1 + 1; k_1 < nums.length; k_1++){
            if(secondValue === nums[k_1]){
                result = [i_1, k_1]
                console.log(result)
                return result
            }
        }
    }
};

let nums = [2,7,11,15] 
let target = 9
// let nums = [3,2,4] 
// let target = 6
// let nums = [3,3] 
// let target = 6
twoSum(nums, target)

// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
var mostWordsFound = function(sentences) {
    if(sentences.length === 0){
        console.log("Sentences array is empty")
    }

    let result = 0

    for(let i_2 = 0; i_2 < sentences.length; i_2++) {
        if(sentences[i_2].split(" ").length > result) {
            result = sentences[i_2].split(" ").length
        }
    }

    if(result === 0) {
        console.log("All elements in array a are empty")
    }else{
        console.log(result)
    }

};

// let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// let sentences = ["please wait", "continue to fight", "continue to win"]
// let sentences = ["", "", ""]
mostWordsFound(sentences)