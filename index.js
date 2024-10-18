// Leap Year Checker
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

console.log(isLeapYear(2024));

// Ticket Pricing
function getTicketPrice(age) {
  let price;
  if (age <= 12) {
    price = 10;
  } else if (age >= 13 && age <= 17) {
    price = 15;
  } else {
    price = 20;
  }
  return `The ticket price is $${price}.`;
}

console.log(getTicketPrice(14));

// Fibonacci Sequence
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));

// Palindrome Checker

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("A man, a plan, a canal, Panama!"));
