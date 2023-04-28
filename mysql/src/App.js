import { useContext, useEffect } from 'react';
import './App.css';
import AddDataFile from './components/AddDataFile';
import DisplayDataFile from './components/DisplayDataFile';
import DataContext from './context/contextFile';

function App() {
  const {getDataAPI} = useContext(DataContext)

    useEffect(()=>{
        getDataAPI()        
    },[])
  return (
    <div className='container'>
      <h1>Demonstration of API using<mark style={{borderRadius:"10px"}}> MySql </mark>  as Database</h1>

      <div style={{display:"grid", gridTemplateColumns:"50% 50%"}}>

      {/* Adding data  */}
        <section>
          <AddDataFile/>
        </section>


      {/* displaying data  */}
        <DisplayDataFile/>

      </div>

    </div>
  );
}

export default App;
