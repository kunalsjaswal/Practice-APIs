import React, { useContext, useEffect } from 'react'
import DataContext from '../context/contextFile'

const DisplayDataFile = () => {
    const {dataSet, getDataAPI,updateDataAPI,setUpdate, setlocalData,localData, deleteDataAPI} = useContext(DataContext)

    useEffect(()=>{
        getDataAPI()        
    },[])

    const updateHandler=(val)=>{
        setlocalData({
            id: val.id,
            name: val.name,
            age: val.age,
            nationality: val.nationality
        })
        setUpdate(false)

    }

    // const updateHandler=(val)=>{

    // }

  return (
    <div>
        <h2 style={{textAlign:"center"}}>Displaying Users</h2>

        <section style={{ padding:"1%"}}>
            {dataSet.length === 0 && <div style={{textAlign:"center"}}>No data Found</div>}
             {dataSet.length>0 && 
                dataSet.map((val,indx)=>(
                    <div key={indx} style={{padding:"1%",marginLeft:"30%",width:"40%", marginTop:"2%", border:"2px solid black", borderRadius:"5px"}}>
                        <div>
                            name : {val.name} <br />
                            age : {val.age} <br />
                            nationality: {val.nationality} <br />
                            <button onClick={()=> updateHandler(val)}>update</button>
                            <button onClick={()=> deleteDataAPI(val.id)} style={{marginLeft:"2%"}}>delete</button>
                        </div>
                    </div>
                ))
             }
        </section>
    </div>
  )
}

export default DisplayDataFile