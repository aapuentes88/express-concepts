import { people } from '../data.js';


const getPeople = (req, res) => {
    res.status(200).json({succes:true, data:people})
}

const createPerson = (req, res) => {
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({success: false, msg:`please provide name`})
    }
    res.status(201).json({success: true, person:name})
}

const createPersonPostman = (req, res) => {
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({success: false, msg:`please provide name`})
    }
    res.status(201).json({success: true, data:[...people,{name}]})
}

const updatePerson = (req, res) => {
    const {id} = req.params
    const {name} = req.body
  
    const person = people.find((person) => person.id === Number(id) )
  
    if(!person){
        return res
        .status(404)
        .json({success: false, msg:`no person with the id ${id}`})
    }
  
    const newPeole = people.map((person) => { 
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
  
    res.status(200).json({success: true, data:newPeole})
}

const daletePerson = (req, res) => {
    const {id} = req.params
  
    const person = people.find((person) => person.id === Number(id) )
  
    if(!person){
        return res
        .status(404)
        .json({success: false, msg:`no person with the id ${id}`})
    }
  
    const newPeole = people.filter((person) => { 
        if(person.id !== Number(id)){
            return person
        }
        
    })
  
    res.status(200).json({success: true, data:newPeole})
}

export {getPeople, createPerson, createPersonPostman, updatePerson, daletePerson}