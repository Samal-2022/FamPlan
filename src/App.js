import image from './family.jpg'
import './App.css';
import { Planner } from './Planner';

 


function App() {
  return (
    <div className='app'>
        <div className="container">
            <h2><span>Fam</span>Plan</h2>      
        </div>
        <div className="container">
          <h1>Plan Family Events And Activities Together</h1>
        </div>
       <Planner/>
        <div className="container">
          <img src={image} alt='family' width='350px'/>
        </div>
    </div>
   
  );
}

export default App;

