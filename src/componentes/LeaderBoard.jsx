import { useState } from "react";
export default function Leaderboard() {
 const [list, setList] = useState(["Yusuf", "Yasin", "Peter"])
    const [indtastetTekst, setIndtastetTekst] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        //alert(`Du har indsendt: ${indtastetTekst}`);
        setList(tidligereListe => [...tidligereListe, indtastetTekst]);
        setIndtastetTekst('');
    };

  return (
    <>
    <ul>
      {list.map((element, index) => (
        // Husk altid en unik 'key' på det øverste element i dit loop
        <li className="bg-amber-700 text-2xl" key={index}>{element}</li>
      ))}
    </ul>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Skriv noget her..."
        value={indtastetTekst}
        onChange={(e) => setIndtastetTekst(e.target.value)}
        
      />
      <button type="submit">
        Send
      </button>
    </form>
    </>
  );

}
