const units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const tens = [
	"",
	["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
	"twenty",
	"thirty",
	"forty",
	"fifty",
	"sixty",
	"seventy",
	"eighty",
	"ninety",
];

const digits = [units, tens, "hundred", "thousand"];

module.exports = function toReadable(number) {
	number = number.toString();

	let readableNumber = "";
	let iterator = 0;

	for (let i = number.length - 1; i >= 0; i--) {
		if (readableNumber !== "") readableNumber = " " + readableNumber;
		if (readableNumber.indexOf("zero") !== 0) readableNumber = readableNumber.replace(/ zero/, "");
		if (iterator === 1 && number[i] === "1") {
			readableNumber = digits[iterator][number[i]][number[number.length - 1]];
		} else if (iterator > 1) {
			if (number[i] !== "0") {
				readableNumber = digits[0][number[i]] + " " + digits[iterator] + readableNumber;
			}
		} else {
			readableNumber = digits[iterator][number[i]] + readableNumber;
		}
		iterator++;
		if (readableNumber.startsWith(" ")) readableNumber = readableNumber.slice(1);
	}

	return readableNumber;
};
