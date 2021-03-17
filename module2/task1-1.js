process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    let data = process.stdin.read();
    let content = data.slice(0, -1)
    if (data === null || content === 'end') {
        process.stdin.emit('end')
    } else {
        process.stdout.write(`结果是: ${content.split('').reverse().join('')}\n`) // 换一行，看得清
    }
})

process.stdin.on('end', () => {
    process.stdout.write('end');
})