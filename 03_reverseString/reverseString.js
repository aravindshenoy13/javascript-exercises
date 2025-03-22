const reverseString = function(string) {
    let ans="";
    for(let i = string.length-1;i>-1;i--){
        ans +=string[i];
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
