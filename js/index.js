let arrived = false;
const ride = new Promise((resolve, reject) => {

    if (arrived) {
        resolve("uber has arrived 🚗")
    } else if (!arrived) {
        reject("uber failed to arrive ☹")
    }

})

ride
    .then((message) => {
        console.log(`${message}`)
    })
    .then((message) => {
        console.log(`Thanks for booking :D, enjoy your ride!`)
    })
    .catch((message) => {
        console.log(`${message}`)
    })