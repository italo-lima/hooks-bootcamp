import React, {useState, useEffect} from 'react';

function App() {

  const [tech, setTech] = useState(['NodeJS'])
  const [newTech, setNewTech] = useState('')

  function handleAdd() {
    setTech([...tech, newTech])
    setNewTech('')
  }

  useEffect(() => {
    const getTechs = localStorage.getItem('tech')

    if(getTechs){
      setTech(JSON.parse(getTechs))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech))
  }, [tech])

  return (
    <div className="App">
      <ul>
        {tech.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
