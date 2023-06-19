function threeSum(arr, target) {

    // sorting 

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    let resSum = 0;
    let minDiff = 999999;

    for(let i = 0; i < arr.length - 2; i++){
        let fixed = arr[i];

        let start = i + 1;
        let end = arr.length - 1;

        while(start < end){
            let curSum = fixed + arr[start] + arr[end];
            
            if(curSum === target){
                resSum = curSum;
                break;
            }else if(curSum < target){
                start = start + 1;
            }else if (curSum > target){
                end = end - 1;
            }

            let diff = Math.abs(target - curSum);

            if(diff < minDiff){
                minDiff = diff;
                resSum = curSum;
            }
        }
    }

    return resSum;
	
}

module.exports = threeSum;
