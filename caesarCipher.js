function encode(string, shift) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";

    string = String(string).toLowerCase().split("");
    let result = [];

    for (let letter of string) {
        let indexOfLetter = alphabet.indexOf(letter);
        let indexOfNumLetter = numbers.indexOf(letter);

        let newIndexOfLetter = indexOfLetter + shift;
        let newIndexOfNumLetter = indexOfNumLetter + shift;

        if (letter === " ") {
            result.push(letter);
            continue;
        }
        if (indexOfLetter >= 0) {
            if (newIndexOfLetter >= 26) {
                result.push(alphabet[newIndexOfLetter - 25]);
            } else {
                result.push(alphabet[newIndexOfLetter]);
            }
        }
        if (indexOfNumLetter >= 0) {
            if (newIndexOfNumLetter >= 10) {
                result.push(Number(numbers[newIndexOfNumLetter - 10]));
            } else {
                result.push(Number(numbers[newIndexOfNumLetter]));
            }
        }
    }
    return result.join("");
}


function decode(string, shift) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";

    string = String(string).toLowerCase().split("");
    let result = [];

    for (let letter of string) {
        let indexOfLetter = alphabet.indexOf(letter);
        let indexOfNumLetter = numbers.indexOf(letter);

        let newIndexOfLetter = indexOfLetter - shift;
        let newIndexOfNumLetter = indexOfNumLetter - shift;

        if (letter === " ") {
            result.push(letter);
            continue;
        }
        if (indexOfLetter >= 0) {
            if (newIndexOfLetter < 0) {
                result.push(alphabet[newIndexOfLetter + 25]);
            } else {
                result.push(alphabet[newIndexOfLetter]);
            }
        }
        if (indexOfNumLetter >= 0) {
            if (newIndexOfNumLetter < 0) {
                result.push(Number(numbers[newIndexOfNumLetter + 10]));
            } else {
                result.push(Number(numbers[newIndexOfNumLetter]));
            }
        }
    }
    return result.join("");
}



