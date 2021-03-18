const csvFilePath = 'module2/index.csv'
import csv from 'csvtojson'
import fs from 'fs'
// const csv = require('csvtojson')
// const fs = require('fs')

csv()
    .fromFile(csvFilePath)
    .subscribe((jsonObj) => { // 逐行写入
        console.log('转换结果', jsonObj)
        const content = JSON.stringify(jsonObj)
        fs.appendFile('module2/text2.txt', content + '\n', (err) => {
            console.error(err)
        })
    })