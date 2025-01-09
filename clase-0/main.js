/*console.log(process.pid);

console.log(process.argv[1]);


import {program} from 'commander'
import config from './config.js'

program
    .option('-p <port>', 'Puerto de mi aplicacion', 8080) //Flag o identificador - Descripcion - Valor por defecto
    .option('-d', 'Variable de debug', false)
    .option('--mode <mode>', 'Modo de trabajo actual', 'development')
    .requiredOption('-u <user>', 'Usuario de la aplicacion', 'No se agrego ningun usuario')
    .option('-l, --letters [letters...]', 'Letras de mi app', [])

program.parse()//Finalizo la configuracion

console.log('Options', program.opts());
console.log('Args', program.args);

console.log(config);

*/

import express from 'express'
import { fork } from 'child_process'

const app = express()


app.get('/suma2', (req,res) => {
    
    try {
        const child = fork('./operacionCompleja.js') //Creo el proceso hijo en el archivo correspondiente
        child.send('Ponete a laburar') //Le mando un mensaje de que comienze a trabajar
        console.log(process.pid);
        child.on('message', result => { //Cuando finalize de trabajar, consulto el resultado y lo envio
            console.log(result)
            res.status(200).send(`El resultado es: ${result}`)
        } )
        
    }catch(e){
        console.log(e);
        res.status(500).send("Error")
    }
    
})

app.listen(8080, () => {
    console.log('Server on port', 8080);
})