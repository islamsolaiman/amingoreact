import React from 'react';
import Card from './Card.js';
import CardLayout from './CardLayout';
import NavBar from './NavBar.js';
import Carousel from './Carousel.js';



import './App.css';



function App() {
  return (
    <div className="App">

    
      <NavBar/>
    

    
        <Carousel>
 
        </Carousel>

      <br></br>
       
        <CardLayout>
        <Card
              button="join Tennis groups"
              description=""
              title="Tennis"
              image="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card
              button="join FootBall groups"
              description=""
              title="Football"
              image="https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <Card
              button="join swimming groups"
              description=""
              title="swimming"
              image="https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card
              button="join Yoga groups"
              description=""
              title="Yoga"
              image="https://images.pexels.com/photos/588561/pexels-photo-588561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card
              button="join crossfit groups"
              description=""
              title="crossfit"
              image="https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />

          </CardLayout>
        
    </div>
  );
}

export default App;
