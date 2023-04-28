import React, { useContext } from 'react'
import DataContext from '../context/contextFile'

const AddDataFile = () => {

    const {getDataAPI,addDataAPI,setUpdate,localData,setlocalData,update,updateDataAPI} = useContext(DataContext)

    const onSubmitHandler=()=>{
        console.log(localData)
        addDataAPI(localData.name,localData.age,localData.nationality)
        setlocalData({
            name:"",
            age:"",
            nationality:""
        })
    }
    const updateHandler=()=>{
        console.log(localData)
        updateDataAPI(localData.id, localData.name,localData.age,localData.nationality)
        // getDataAPI()
        setlocalData({
            name:"",
            age:"",
            nationality:""     
       })
       setUpdate(true)
    }

  return (
    <div>
        <h2>Add/Update User Data</h2>


            <div className="input-fields" style={{border:"2px solid black",borderRadius:"5px" ,padding:"2%", width:"50%", background:"#fef5f5"}}>
                <label>Name</label>
                <input type="text" value={localData.name} onChange={ev=>setlocalData({...localData, name:ev.target.value})} style={{marginLeft:'45px'}}/>
                <br />
                <label>Age</label>
                <input type="number" value={localData.age} onChange={(ev)=>setlocalData({...localData, age:ev.target.value})} style={{marginLeft:'60px'}}/>
                <br />
                <label>Nationality</label>
                <input type="text" value={localData.nationality} onChange={(ev)=>setlocalData({...localData, nationality:ev.target.value})} style={{marginLeft:'10px'}}/>
                <br />
                <button style={{fontWeight:"bold", width:"20%",padding:"1%",marginTop:"2%"}} onClick={onSubmitHandler}>Submit</button>
                <button style={{fontWeight:"bold", width:"20%",padding:"1%",marginTop:"2%",marginLeft:"1%"}}  disabled={update} onClick={updateHandler}>Update</button>
            </div>
    </div>
  )
}

export default AddDataFile