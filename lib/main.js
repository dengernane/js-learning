
function test() {
	console.log(sum(range(1, 10)));
		// → 55
	console.log(range(5, 2, -1));
		// → [5, 4, 3, 2]
}

function range(num1, num2) {
	let arr =[]
	for(var i = 0; i > num2; i++) {
		arr[i] = num1 + i + 1;
	}
}

function sum() {

}

/*
function test() {
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
}
function reverseArrayInPlace() {

}
function reverseArray(arr) {
	let arr2 = [];
	for (var i = 0; i < arr.length; i++) {
		arr2[i] = arr[arr.length - i -1];
	}
	return arr2;
}
*/
