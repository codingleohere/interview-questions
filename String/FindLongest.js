let str = "sentancveFinding nlongest wortd in sentancve"
console.log(str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest))