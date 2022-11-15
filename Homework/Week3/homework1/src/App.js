import Drum from './components/drum';
import { useState } from 'react';


function App() {
  const [sounds, setSounds] = useState([
    {
			name: "tom-4",
			sound: require("./sounds/tom-4.mp3"),
			key: "W",
    },
    {
			name: "tom-2",
			sound: require("./sounds/tom-2.mp3"),
			key: "A",
		},
    {
			name: "tom-3",
			sound: require("./sounds/tom-3.mp3"),
			key: "S",
		},
		{
			name: "tom-1",
			sound: require("./sounds/tom-1.mp3"),
			key: "D",
		},
		{
			name: "snare",
			sound: require("./sounds/snare.mp3"),
			key: "J",
		},
		{
			name: "crash",
			sound: require("./sounds/crash.mp3"),
			key: "K",
		},
		{
			name: "kick-bass",
			sound: require("./sounds/kick-bass.mp3"),
			key: "L",
		},
	]);

  return (
    <div className="App">
    <h1 id='title'>Drum🥁Kit</h1>
    <div className="drums">
      {sounds.map((sound, i) => (
        <Drum key={i} letter={sound.key} sound={sound.sound} className='abc'/>
      ))}
    </div>
   </div>
  )
}


export default App;
