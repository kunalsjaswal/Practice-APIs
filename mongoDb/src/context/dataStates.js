import { useState } from "react";
import dataContext from "./dataContext";


const StateStore = (props)=>{
    const host = 'http://localhost:5000'

    const [data, setData] = useState([])

    const [currData, setCurrData] = useState({
        name:"",
        age:"",
        nationality:""
    })

    const [enableButton, setEnableButton] = useState(true)

    const getDataAPI= async()=>{
        const response = await fetch(`${host}/getData`,{
            method: 'GET',
            headers: {
                'Content-type':'application/json'
            }
        })

        const jsonData = await response.json()
        setData(jsonData)
    }

    const addDataAPI = async(name,age,nationality)=>{

        const response = await fetch(`${host}/addUser`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({name,age,nationality})
        })

        const dataJson = await response.json()
        setData(data.concat(dataJson))
    }

    const deleteDataAPI=async(id)=>{
        
        // changing local state data
        const newData = data.filter(val=>(
            val.id != id
        ))
        setData(newData)

        // changing data from backend/database
        
        const response = await fetch(`${host}/deleteUser/${id}`,{
            method:"DELETE",
            headers:{
                'Content-type':'application/json'
            }
        })
    
    }

    const updateData =async(id,name,age,nationality)=>{

        data.forEach((val)=>{
            if(val._id == id){
                val.name = name
                val.age = age 
                val.nationality = nationality
            }
        })

        const response = await fetch(`${host}/updateData/${id}`,{
            method:"PUT",
            headers:{
                'Content-type':'application/json',
            },
            body: JSON.stringify({name,age,nationality})
        })

    }
    return(
        <dataContext.Provider
            value={{
                data,
                getDataAPI,
                deleteDataAPI,
                addDataAPI,
                updateData,
                currData, 
                setCurrData,
                enableButton, 
                setEnableButton,

            }}
        >
            {props.children}
        </dataContext.Provider>
    )
}

export default StateStore