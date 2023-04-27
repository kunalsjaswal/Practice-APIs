import { userTable } from "../model/db.js"

export const welcomeLog=(req,res)=>{
    try {
        res.status(200).send("welcome API")
    } catch (error) {
        res.status(404).send(error.message)
    }
}


export const addUserAPI=async(req,res)=>{
    try {
        const  {name,age,nationality} = req.body
        const newUser = await userTable.create({
            name: name,
            age: age,
            nationality: nationality
        })

        res.status(200).json(newUser)

    } catch (error) {
        res.status(400).send("add-User API error block :",error.mmessage)
    }
}

export const getDataAPI = async(req,res)=>{

    try {
        const data = await  userTable.findAll();
        res.status(200).json(data)
        
    } catch (error) {
        res.status(404).send('get-data API error block', error)
    }

}

