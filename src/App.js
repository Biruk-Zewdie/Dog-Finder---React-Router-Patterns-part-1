import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import DogInfo from './DogInfo';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar dogs={App.defaultProps.dogs}/>
        <Routes>
          <Route path= "/" element = {<Navigate to="dogs"/>}/>
          <Route path = "/dogs" element = {<HomePage dogs= {App.defaultProps.dogs}/>}/>
          <Route path = "/dogs/:name" element = {<DogInfo dogs = {App.defaultProps.dogs}/>}/>
       
        </Routes>
      </BrowserRouter>


    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,   
      src: "/whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "/duke.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "/perry.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: null,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
