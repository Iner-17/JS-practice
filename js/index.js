const names = ["bong", "sweet", "bong", "bong"];

const bongCount = names.reduce((acc, curr) => {
    return acc + (curr == "bong" ? 1 : 0);
}, 0);

console.log(bongCount);
