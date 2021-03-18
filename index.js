// process.stdin.setEncoding('utf8')

// function readlineSync() {
//     return new Promise((resolve, reject) => {
//         process.stdin.resume()
//         process.stdin.on('data', function (data) {
//             process.stdin.pause()
//             resolve(data)
//         })
//     })
// }

// // entry point
// async function main() {
//     while (1) {
//         let inputLine = await readlineSync()
//         let text = JSON.parse(JSON.stringify(inputLine))
//         if (text == 404) {
//             break
//         } else {
//             console.log('结果是', inputLine.split('').reverse().join(''))
//             console.log('------------------------------------------------------')
//         }
//     }
// }

// main()