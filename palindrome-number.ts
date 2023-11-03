/* Problem */
/* Given an integer x, return true if x is a palindrome, and false otherwise. */


/* Solution */
function isPalindrome(x: number):boolean {
    const reversedNumber =Number(x.toString().split('').reverse().join(''));
    return reversedNumber === x ? true : false;
};
