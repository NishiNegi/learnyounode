// console.log(process.argv);


result = 0;
for (let i = 2; i < process.argv.length; i++) {
    // console.log(typeof(+process.argv[i]))
    result = result + +process.argv[i]
}
console.log(result)