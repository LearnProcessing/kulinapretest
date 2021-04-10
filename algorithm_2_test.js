function countTheValleys(inputArray){
    let valleys = 0
    let counter = 0
    inputArray.forEach(element => {
        let temp = counter
        if(element === 'U'){
            counter --
        } else {
            counter ++
        }
        if(temp < 0 && counter === 0) valleys ++
    })
    return valleys
}

// console.log(countTheValleys(['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U']))
// console.log(countTheValleys(['D', 'D', 'U', 'U', 'U', 'U', 'D', 'D', 'U', 'D', 'D', 'U']))
