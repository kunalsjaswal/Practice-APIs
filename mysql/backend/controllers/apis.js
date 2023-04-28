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
        res.status(400).send(error.message)
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

export const deleteDataAPI = async(req,res)=>{
    try {
        const user_id = req.params.id 
        const user = await userTable.findOne({where:{id : user_id}})

        if(!user) {
            return res.status(404).send("user not found")
        }
        const response = await user.destroy()

        res.status(200).send("User deleted")

    } catch (error) {
        res.status(404).send("delete-Data API error block:", error.message)
    }
}


export const updateUserAPI = async(req,res)=>{
    const user_id = req.params.id;
    const user = await userTable.findOne({where: {id : user_id}})
    const {name,age,nationality} = req.body 
    if(!user){
        return res.status(404).send("user not found")
    }
    const response = await userTable.update(
        { // things to update
            name: name,
            age: age,
            nationality:nationality
        },
        { // user id
            where: {id : user_id}
        }
    )
    const result= await userTable.findOne({where: {id : user_id}})


    res.status(200).json({result})

}