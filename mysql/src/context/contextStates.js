import { useState } from "react"
import dataContext from "./contextFile"


const ContextState = (props)=>{

    const host = 'http://localhost:4444/mysql';
    const [dataSet, setdataSet] = useState([])

    const [localData, setlocalData] = useState({
        name:"",
        age:"",
        nationality:""
    })
    const [update, setUpdate] = useState(true)

    const getDataAPI = async()=>{
        const response = await fetch(`${host}/getData`,{
            method:"GET",
            headers:{
                "Content-type":"application/json"
            }
        })
        const json = await response.json();
        setdataSet(json)
    }  

    const addDataAPI = async(name,age,nationality)=>{
        const response = await fetch(`${host}/addUser`, {
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body : JSON.stringify({name,age,nationality})
        })

        const jsonData = await response.json();
        setdataSet(dataSet.concat(jsonData))
    }

    const deleteDataAPI = async(id)=>{

        const newData = dataSet.filter((val)=> val.id!==id) 
        setdataSet(newData)

        await fetch(`${host}/deleteData/${id}`,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json"
            }
        })
    }

    const updateDataAPI = async(id,name,age,nationality)=>{
        
        dataSet.forEach(val=>{
            if(id === val.id){
                val.name = name;
                val.age = age;
                val.nationality = nationality;
            }
        })
        
        const response = await fetch(`${host}/updateData/${id}`,{
            method:"PUT",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({name,age,nationality})
        })
    }

    return (
        <dataContext.Provider
            value={{
                addDataAPI,
                deleteDataAPI,
                updateDataAPI,
                getDataAPI,
                dataSet,
                localData, 
                setlocalData,
                update, 
                setUpdate,
            }}>
        {props.children}
        </dataContext.Provider>)
}

export default ContextState