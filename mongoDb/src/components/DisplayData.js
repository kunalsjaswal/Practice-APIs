import React, { memo, useContext, useEffect, useState } from 'react'
import dataContext from '../context/dataContext'

const DisplayData = () => {

    const {data,getDataAPI, setCurrData, setEnableButton} = useContext(dataContext)
    
    useEffect(()=>{
        getDataAPI()
    },[])

    const onUpdateClickHandler=(index,_id)=>{
            setEnableButton(false)
            setCurrData({
                name:data[index].name,
                age:data[index].age ,
                nationality: data[index].nationality,
                id: _id
            })
    }
    
  return (
    <>
        <h3 className='h3-1'>I. Data Fetched from API</h3>
        <div className="data-content">

            {data.length === 0 && <div>No data found.</div>}

            {data.length > 0 && 
                data.map((val,indx)=>(
                    <div key={indx} style={{padding:'1%', background:'#ebe9e9',width:'40%',borderRadius:'8px',marginBottom:'1%'}}>
                        {val.name} Data 
                        <button style={{marginLeft:'5%'}} onClick={()=>onUpdateClickHandler(indx, val._id)}>update</button>
                        
                        <br /> <br /> Age: {val.age} years |  Nationality: {val.nationality}
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default memo(DisplayData)