import { memo, useContext, useEffect } from 'react';
import './App.css';
import AddingData from './components/AddingData';

import DeleteData from './components/DeleteData';
import DisplayData from './components/DisplayData';
import dataContext from './context/dataContext';

function App() {


  const {getDataAPI} = useContext(dataContext)

  useEffect(()=>{
    getDataAPI()

  },[])
  
  return (
    <>
      <h1 className='h1-1'>Demonstration of creating and using API - Nodejs</h1>
      
      <div style={{display:"grid", gridTemplateColumns:"50% 50%"}}>
          {/* displaying data  */}
          <div>
            <DisplayData/>
          </div>

          {/* entering data  */}
          <div>
            <AddingData/>
          </div>
      </div>
      

      {/* deleting data  */}
      <DeleteData/>

    </>
  );
}

export default memo(App);
