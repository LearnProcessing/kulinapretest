function countSocksPair(inputArray){
    let socksPair = 0
    let socksContainer = []
    inputArray.forEach(element => {
        if(!socksContainer[element]){
            socksContainer[element] = 0
        }
        socksContainer[element] ++
    })

    socksContainer.forEach(sock => {
        if(sock){
            socksPair += Math.floor(sock / 2)
        }
    })
    return socksPair
}

// console.log(countSocksPair([9, 10, 20, 20, 10, 10, 30, 50, 10, 20]))

