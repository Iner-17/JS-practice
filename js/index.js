let isBongSafe = true;

function callbackPromise() {

    return new Promise((driving, crashed) => { 
        if(!isBongSafe) {
            crashed({
                bianca: "sadge 😭",
                bong: "deadge"
            })
        } else if (isBongSafe) {
            driving({
                bianca: "Happy 😁",
                bong: "alive and kicking"
            })
        }
    })

}


callbackPromise().then((message) => {
    console.log(`bong is ${message.bong} and Bianca is ${message.bianca}`)
}).catch((message) => {
    console.log(`bong is ${message.bong} :( and Bianca is ${message.bianca} `)
})