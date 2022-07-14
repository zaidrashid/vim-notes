const arr = [1,2,3,4,5,6];

function printArr(arr) {
	arr.forEach(v => console.log(v));
}

function addArr(arr) {
	return arr.reduce((prev, next)=> prev + next, 0);
}

console.log(addArr(arr));
printArr(arr);
