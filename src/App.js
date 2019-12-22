import React, {useState, useEffect, useMemo, useCallback} from 'react';
//useMemo, evita que o cálculo seja refeito td vez que o component sofrer alteração
//useCallback, reconstrói a função apenas quando os estados sofrerem alguma alteração;

function App() {

  const [tech, setTech] = useState(['NodeJS'])
  const [newTech, setNewTech] = useState('')

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech])
    setNewTech('')
  })

  useEffect(() => {
    const getTechs = localStorage.getItem('tech')

    if(getTechs){
      setTech(JSON.parse(getTechs))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech))
  }, [tech])

  const sizeTech = useMemo(() => tech.length, [tech])

  return (
    <div className="App">
      <ul>
        {tech.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
      <p>Você tem {sizeTech} tecnologias</p>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
