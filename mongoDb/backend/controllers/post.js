import userData from "../model/newUser.js"   // schema of collection "user data"



// welcoming api
export const displayLog = async(req,res)=>{
    try {
        res.status(200).json({API: "welcome API fetched"})
        
    } catch (error) {
        res.status(404).send(error.message)
    }
}

// getting data api
export const getDataAPI = async(req,res)=>{
    try {
        const data = await userData.find();
        res.status(200).json(data)
    } catch (error) {
        res.status(404).send("not found status")
    }
}

// adding user data api 
export const addingUserAPI=async(req,res)=>{
    try {
        const new_user = await userData.create({
            name: req.body.name,
            nationality: req.body.nationality,
            age: req.body.age,
        });
        
        res.status(200).json({new_user:new_user})
    } catch (error) {
        res.status(404).send(error.message)
    }
}

// deleting api 
export const deletingUserAPI = async(req,res)=>{
    try {
        let data = await userData.findById(req.params.id)

        if(!data){
           return  res.status(404).json({mag:'not found'})
        }

        data = await userData.findByIdAndDelete(req.params.id)
        res.json({msg: "user deleted."})

    } catch(error) {
        res.status(404).send(error.message)
    }
}

// updating api 

export const updateDataAPI=async(req,res)=>{
    try {
        let response = await userData.findById(req.params.id)
        if(!response){
            return res.status(404).json('no data')
        }

        // chaging if user updates any of the prev data
        response = await userData.findByIdAndUpdate(req.params.id,
            {   
                name:req.body.name, 
                age:req.body.age,
                nationality:req.body.nationality
            },
            {new:true})
        
        res.json(response)
    } catch (error) {
        return res.status(404).send(error.message)
    }
}