
process.on('message', message => {
    console.log(message);
    console.log(process.pid);
    
    let result = 0

    for(let i = 0; i<5e9; i++) {
        result += i
    }

    process.send(result)
})