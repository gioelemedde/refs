import { useState, useRef } from "react";

export default function Player() {
  const [enterPlayer, setEnterPlayer] = useState(null);
  const playerName = useRef(null);

  function handleClick() {
    setEnterPlayer(playerName.current.value);
    playerName.current.value = ''
  }
  return (
    <section id="player">
      <h2>Welcome {enterPlayer?? 'unknow player'}</h2> 
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
