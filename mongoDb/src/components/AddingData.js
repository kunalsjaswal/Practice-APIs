import React, { useState } from 'react'
import { useContext } from 'react'
import dataContext from '../context/dataContext'

const AddingData = () => {

    const {addDataAPI,getDataAPI,currData,setCurrData,updateData,enableButton,setEnableButton} = useContext(dataContext)

    const addHandler=()=>{
      if(currData.name.length> 0 && currData.age>0 && currData.nationality.length>0){
        addDataAPI(currData.name,currData.age,currData.nationality)
        getDataAPI()
        setCurrData({name:"",age:"",nationality:""})

      }else{
        alert('please enter all fields')
      }
    }

    const updateHandler=()=>{
      updateData(currData.id, currData.name,currData.age,currData.nationality)
        setEnableButton(true)
        setCurrData({
          id:"",
          name:"",
          age:"",
          nationality:""
        })
        
    }
  return (
    <>
     <h3 className='h3-1'>III. Enter the Data</h3>
        <div className='container'>
            <label>Name </label>
            <input type="text" value={currData.name} onChange={ev=> setCurrData({...currData,name:ev.target.value})} style={{marginLeft:'7%'}} className='text-str' placeholder='enter name'/>
            <br />
            <label>Age </label>
            <input type="number" value={currData.age} onChange={ev=> setCurrData({...currData,age:ev.target.value})}  style={{marginLeft:'9%'}}  className='text-no' placeholder='enter age'/>
            <br />
            <label>Nationality</label>
            <input type="text" value={currData.nationality} onChange={ev=> setCurrData({...currData,nationality:ev.target.value})} className='text-str' placeholder='enter Nationality'/>
            <br />
            <button className='btn-add' onClick={addHandler}>Submit</button>
            <button className='btn-add' disabled={enableButton} style={{marginLeft:"2%"}} onClick={updateHandler}>Update</button>
        </div>
    </>
  )
}

export default AddingData