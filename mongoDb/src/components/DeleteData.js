import React, { useContext, useEffect, useState } from 'react'
import dataContext from '../context/dataContext';

const DeleteData = () => {

    const {data,deleteDataAPI,getDataAPI} = useContext(dataContext);
    
    const [id, setId] = useState(-1);
    const [name, setName] = useState('');
    
    getDataAPI()
    
    const deleteHandler=async()=>{
        let flag = 0

        if(data.length > 0){
            await data.forEach((val,indx) =>{
                if(indx+1 == id){
                    flag = 1
                    deleteDataAPI(val._id)
                    document.getElementById('alert-msg').innerHTML = "Data deleted"
                }
            })
        }

        if(!flag){
            document.getElementById('alert-msg').innerHTML = "Data not found."
        }
    }

    const deleteHandler2=async()=>{
        let flag = 0

        if(data.length > 0){
            data.forEach(val=>{
                if(val.name == name){
                    flag=1
                    deleteDataAPI(val._id)
                    document.getElementById('alert-msg2').innerHTML = "Data deleted."
                }

            })
        }

        if(!flag){
            document.getElementById('alert-msg2').innerHTML = "Data not found."
        }
    }

  return (
    <>
        <h3 className='h3-1'>II. Deleting data API</h3>
        <div className='container'>
            
            <li>Deleting data using ID</li>
            <div style={{margin:'2%'}}>
                <label>Enter ID no.</label>
                <input type="number" value={id} onChange={ev=> setId(ev.target.value)} className='text-no'/>
                <button className='btn-delete' onClick={deleteHandler}>Delete</button>
                <span style={{marginLeft:'2%'}} id='alert-msg'></span>

            </div>

            <li>Deleting data using name.</li>
            <div style={{margin:'2%'}}>
                <label>Enter name</label>
                <input type="text" value={name} placeholder='enter name' onChange={ev=> setName(ev.target.value)} className='text-str'/>
                <button className='btn-delete' onClick={deleteHandler2}>Delete</button>
                <span style={{marginLeft:'2%'}} id='alert-msg2'></span>

            </div>
            
        </div>
    </>
  )
}

export default DeleteData