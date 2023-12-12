const { readFile } = require('fs')

console.log('started first task')

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log('Err : ', err)
        return
    }

    console.log(result)
    console.log('completed the first task')
})

console.log('starting next task')