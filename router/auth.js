import express from 'express'

const authRouter = express.Router()


authRouter.post('/', (req, res) => {
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Provide credentials')
})

export {authRouter}