package main

import (
	"fmt"
	"strings"
	"strconv"
)
func convertInputToUint(numStr string) uint64 {
	var trimmedNum string = strings.Replace(numStr, ".", "", -1)
	num64, err := strconv.ParseUint(trimmedNum, 10, 32)
	if err != nil {
		fmt.Println(err)
	}
	return num64
}

func solution(numStr string) {
	
	var num uint64 = convertInputToUint(numStr)
	var digit uint64 = 0
	var factor uint64 = 1
	numLength := 0
	for num != 0 {
		digit = num % 10
		num /= 10
		numLength ++
		defer fmt.Println(digit*factor)
		factor *= 10
	}
}

func main() {
	solution("1.345.679")
}
