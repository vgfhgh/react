import './App.css'; 
import Button from'./Button';
//import words from './dummyData'

function App(){
  const handleClick = () => alert('clicked button')
  return(
    <div className="App">
      <Button size="small" color="blue" width="fullWidth">Add Todo</Button>
      <Button size="medium" color="grey"><img src="http://simpleicon.com/wp-content/uploads/rocket.png" width="30px" height="30px"></img>
Add Todo</Button>
      <Button size="large" handleClick={handleClick} disabled={true}>Add Todo</Button>
    </div>
  );
}

export default App;