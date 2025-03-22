const removeFromArray = function(arr,...args) {
    for(let i=0;i<arr.length;i++){
        let ans =[];
        if (!args.includes(arr[i])){
            ans.push(arr[i])
        }
        return ans;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
