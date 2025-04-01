let str = 'shubham shubham bhosale';
console.log(str.split(' ').filter((item, index) => str.split(' ').indexOf(item) === index))