module.exports = function toReadable(number) {
    let strNum = String(number); // Приводим значение к строке
    let i = strNum.length; // => Кол-во цифр
    let numArrayOne = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let numArrayTwo = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let namArrayDec = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numArrayHund = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    function singleDigit(number) {
        let result = numArrayOne[number];
        return result;
    }

    function doubleDigit(number) {
        let strNum = String(number); // Приводим значение к строке
        let i = strNum.length; // => Кол-во цифр
        if (number <= 20) {
            return numArrayTwo[number - 10];
        }

        if (number <= 29) {
            let result = namArrayDec[strNum[0] - strNum[0]];
            result += ' ' + numArrayOne[strNum[1]];
            return result;
        }

        if (number > 29) {
            if (number % 10 == 0) {
                let result = namArrayDec[strNum[0] - 2];
                return result;
            } else {
                let result = namArrayDec[strNum[0] - 2];
                result += ' ' + numArrayOne[strNum[1]];
                return result;
            }
        }
    }

    function threeDigit(number) {
        if (number > 99) {
            if (number % 100 == 0) {
                let result = numArrayHund[strNum[0] - 1];
                return result;
            } else {
                let remainder = number % 100; // остаток деления для получения двухзначного числа
                if (remainder < 10) {
                    let result = numArrayHund[strNum[0] - 1]; // результат в сотнях
                    result += ' ' + singleDigit(remainder);
                    return result;
                } else {
                    let result = numArrayHund[strNum[0] - 1]; // результат в сотнях
                    result += ' ' + doubleDigit(remainder);
                    return result;
                }
            }
        }
    }

    if (i == 1) {
        return singleDigit(number);
    }

    if (i == 2) {
        return doubleDigit(number);
    }

    if (i == 3) {
        return threeDigit(number);
    }
}
