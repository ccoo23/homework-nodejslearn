const csvFilePath = 'module2/index.csv'
const csv = require('csvtojson')
const fs = require('fs')

// const writeToFile = (data) => {
//     let content = JSON.stringify(data).toString()
//     console.log(content.replace('[', '').replace(']', ''))
//     const buffer = fs.readFileSync('module2/index.csv', 'utf8')
//     fs.writeFile('module2/task1-2.txt', JSON.stringify(content) + '\n', (err) => {
//         console.log(err)
//     })
// }

csv()
    .fromFile(csvFilePath)
    .subscribe((jsonObj) => {
        console.log('转换结果', jsonObj)
        // writeToFile(jsonObj)
        const content = JSON.stringify(jsonObj)
        console.log('string', content)
        fs.appendFile('module2/text.txt', content + '\n', (err) => {
            console.error(err)
        })
    })
    // .catch((e) => {
    //     console.error(e)
    // })