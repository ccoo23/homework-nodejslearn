process.stdin.setEncoding('utf8');

// This function reads only one line on console synchronously. After pressing `enter` key the console will stop listening for data.
function readlineSync() {
    return new Promise((resolve, reject) => {
        process.stdin.resume();
        process.stdin.on('data', function (data) {
            process.stdin.pause(); // stops after one line reads
            resolve(data);
        });
    });
}

// entry point
async function main() {
    let inputLine1 = await readlineSync();
    console.log('inputLine1 = ', inputLine1);
    let inputLine2 = await readlineSync();
    console.log('inputLine2 = ', inputLine2);
    console.log('bye');
}

main();