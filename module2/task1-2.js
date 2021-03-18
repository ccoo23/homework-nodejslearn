const csvFilePath = 'module2/index.csv'
const csv = require('csvtojson')
const fs = require('fs')

csv()
    .fromFile(csvFilePath)
    .subscribe((jsonObj) => { // 逐行写入
        console.log('转换结果', jsonObj)
        const content = JSON.stringify(jsonObj)
        fs.appendFile('module2/text.txt', content + '\n', (err) => {
            console.error(err)
        })
    })