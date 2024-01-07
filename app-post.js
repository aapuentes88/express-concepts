
import express from 'express'
import {pRouter} from './router/people.js'
import {authRouter} from './router/auth.js'

const app = express()

console.log('Express Tutorial')

//setup static and middleware
app.use(express.static('./methods-public'))

//parse from data
app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())

//usando rutas
app.use('/api/people', pRouter)
app.use('/login', authRouter)

//Se mando esta logica al router people
// app.get('/api/people', (req, res) => {
//       res.status(200).json({succes:true, data:people})
// })

// app.post('/api/people', (req, res) => {
//     const {name} = req.body
//     if(!name){
//         return res
//         .status(400)
//         .json({success: false, msg:`please provide name`})
//     }
//     res.status(201).json({success: true, person:name})
// })

// app.post('/api/people/postman', (req, res) => {
//     const {name} = req.body
//     if(!name){
//         return res
//         .status(400)
//         .json({success: false, msg:`please provide name`})
//     }
//     res.status(201).json({success: true, data:[...people,{name}]})
// })

// app.put('/api/people/:id', (req, res) => {
//     const {id} = req.params
//     const {name} = req.body

//     const person = people.find((person) => person.id === Number(id) )

//     if(!person){
//         return res
//         .status(404)
//         .json({success: false, msg:`no person with the id ${id}`})
//     }

//     const newPeole = people.map((person) => { 
//         if(person.id === Number(id)){
//             person.name = name
//         }
//         return person
//     })

//     res.status(200).json({success: true, data:newPeole})
// })

// app.delete('/api/people/:id', (req, res) => {
//     const {id} = req.params

//     const person = people.find((person) => person.id === Number(id) )

//     if(!person){
//         return res
//         .status(404)
//         .json({success: false, msg:`no person with the id ${id}`})
//     }

//     const newPeole = people.filter((person) => { 
//         if(person.id !== Number(id)){
//             return person
//         }
        
//     })

//     res.status(200).json({success: true, data:newPeole})
// })

//Se mando esta logica al router people
// app.post('/login', (req, res) => {
//     const {name} = req.body
//     if(name){
//         return res.status(200).send(`Welcome ${name}`)
//     }
//     res.status(401).send('Provide credentials')
// })

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})