function resulteFromprobleme(n){
    let finishNumber;
    if(n % 2 == 0){
        finishNumber = n/2
        for(finishNumber == 2; finishNumber = finishNumber/2;){
            console.log(finishNumber)
            if(n % 2 == 1){
                finishNumber = finishNumber * 3 + 1
                for(finishNumber == 1; finishNumber * 3 + 1;){
                    console.log(finishNumber)
                  for(finishNumber == 2; finishNumber = finishNumber/2;){
                      console.log(finishNumber)
                  }
                }
            }
        }
    }
}
console.log(resulteFromprobleme(41))
