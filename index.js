process.stdin.setEncoding('utf8')

// This function reads only one line on console synchronously. After pressing `enter` key the console will stop listening for data.
function readlineSync() {
    return new Promise((resolve, reject) => {
        process.stdin.resume()
        process.stdin.on('data', function (data) {
            process.stdin.pause() // stops after one line reads
            resolve(data)
        })
    })
}

// entry point
async function main() {
    while (1) {
        let inputLine = await readlineSync()
        let text = JSON.parse(JSON.stringify(inputLine))
        // console.log('>>>>>>>?????', text, typeof text, text === 'exit') // text=='exit'永远是false？？？？
        if (text == 404) {
            break
        } else {
            console.log('结果是', inputLine.split('').reverse().join(''))
            console.log('------------------------------------------------------')
        }
    }

    // let inputLine2 = await readlineSync()
    // console.log('inputLine2 = ', inputLine2)

    // let inputLine3 = await readlineSync()
    // console.log('inputLine2 = ', inputLine3)


    // readlineSync().then(rs => {
    //     console.log('success', rs)
    // }).catch(e => {
    //     console.error('ERROR', e)
    // })
}

main()
// for (let i = 0; i < 10; i++) {
//     main()
//     // process.stdin.resume()
// }