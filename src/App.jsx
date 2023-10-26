import { useState } from 'react';
import data from './assets/data.json'

function App() {

const [id, setId] = useState();
let [actors, setActors] = useState();
let [background, setBackground] = useState(null);
let [title, setTitle] = useState(null);

      return (
          <section style={!background ? {backgroundColor: "white"} : {padding: '30px',  backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <ul id='list-1'>
              {data.map((movie, index) => {
                return (
                  <li key={index}><a href="#" onClick={() => {setId(index + 1), setActors(movie.actors), setBackground(movie.background), setTitle(movie.name)}}>{movie.name}</a></li>
                )
              })}              
            </ul>
            <h1 style={!background ? {display: 'none'} : {display: 'block'}}>{title}</h1>
            {!id ? (<p>Veuillez choisir un film</p>) : (
              <ul id='list-2'/*  style={!background ? {display: 'none'} : {display: 'block'}} */>
                {actors.map((actor, index) => {
                  return (
                    <li key={index} style={{backgroundImage: `url(${actor.picture})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}><a href="#">{actor.name}</a></li>
                  )
                })}
              </ul>
            )}
          </section>
      )

}

export default App
