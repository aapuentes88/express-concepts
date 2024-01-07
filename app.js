
import express from 'express'
import { fileURLToPath } from 'url';
import path from 'path';
import { santos } from './data.js';
import { logger } from './logger.js'
import { authorize } from './authorize.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

console.log('Express Tutorial')

// app.get('/', (req, res) => {
//     res.status(200).send('<h1>HomePage</h1>')
// })

//setup static and middleware
app.use([express.static('./navbar-app'), logger, authorize])

app.get('/', (req, res) => {
      res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.get('/data', (req, res) => {
    res.status(200).json(santos)
})

app.get('/customise-data', (req, res) => {
    const nSantos = santos.map((santo) => {
        const {id, name} = santo
        return {id, name}
    }) 
    res.status(200).json(nSantos)
})

// app.get('/data/1', (req, res) => {
//     const santo = santos.find((santo) => santo.id === 1) 
//     res.status(200).json(santo)
// })

//routes parameter 
app.get('/data/:santoId', (req, res) => {
    const { santoId } = req.params
    console.log(santoId)
    const santo = santos.find((santo) => santo.id === Number(santoId)) 
    if(!santo){
        res.status(404).send('Santo does not exist')
    }
    res.status(200).json(santo)
})

//query strings
app.get('/data/v1/query', (req, res) => {
    const { search, limit } = req.query
    let  sortedSanto = [...santos]
    if(search)
      sortedSanto = sortedSanto.filter((santo) => santo.name.startsWith(search)) 
    if(limit)
      sortedSanto = sortedSanto.slice(0, Number(limit)) 

      console.log(sortedSanto)
    if(sortedSanto < 1){
        // res.status(200).send('no santo match with your search')// Esto no es tan usado
        return res.status(200).json({sucess:true, data:[]})//Esto es lo mas comun ---el return es necesario 
        //para evitar errores en la consola ya que solo se puede enviar una respuesta no varias
        //por tanto cada condiccional debe tener su return
    }
    res.status(200).json(sortedSanto)
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>Server not Found</h1>')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})