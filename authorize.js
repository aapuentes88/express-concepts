export const authorize = (req, res, next) => {
    const {user} = req.query
    if(user === 'john'){
        req.user = {name:'john', id:1} //Los datos deben venir de un json
                                       //aqui se registra una propiedad nueva al req la cual queda vigente
                                       //por lo tanto puedo ver esa informacion de nuevo despues 
        next()
    } else {
        res.status(401).send('Unauthorize')
    }

}

// export {logger}