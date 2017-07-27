'use strict';
const myBaseChars = knuthShuffle('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-._~!$&\'()*+,;=:@'.split('')).join('');
const base10Characters = '0123456789';

function knuthShuffle(arr) {
    let currentIndex = arr.length;
    let tempValue;
    let randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1; // Handle out of bounds

        tempValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = tempValue;
    }

    return arr;
}

function convert(str, baseChars, destChars) {
    // Make sure we have a string.
    str = str + '';

    let baseSystem = baseChars.length;
    let destBaseSystem = destChars.length;
    let numVal = 0;

    for (let i = 0, il = str.length; i < il; i++) {
        numVal = numVal * baseSystem + baseChars.indexOf(str.charAt(i));
    }

    if (numVal < 0) {
        return null;
    }

    let tempNumVal = numVal % destBaseSystem;
    let result = destChars.charAt(tempNumVal);
    let tempRemainder = Math.floor(numVal / destBaseSystem);
    while (tempRemainder) {
        tempNumVal = tempRemainder % destBaseSystem;
        tempRemainder = Math.floor(tempRemainder / destBaseSystem);
        result = destChars.charAt(tempNumVal) + result;
    }
    return result;
}

function encode(num) {
    return convert(num, base10Characters, myBaseChars);
}

function decode(val) {
    return convert(val, myBaseChars, base10Characters);
}

console.log(encode(1337));
console.log(decode('q+'));