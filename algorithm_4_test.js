function solution(numOfLampSwitches, numOfTrips) {
    let lampSwitches = []
    let lampCounter = numOfLampSwitches
    for(let i = 0; i < numOfTrips; i++){
        for(let j = 0; j < numOfLampSwitches; j++){
            if(!lampSwitches[j]) lampSwitches[j] = {status: true}
            if(i !== 0 && (j+1) % (i+1) === 0){
                if(lampSwitches[j].status){
                    lampSwitches[j].status = false
                    lampCounter --
                } else {
                    lampSwitches[j].status = true
                    lampCounter ++
                }
            }
        }
        
    }
    return lampCounter
}

console.log(solution(100, 100))