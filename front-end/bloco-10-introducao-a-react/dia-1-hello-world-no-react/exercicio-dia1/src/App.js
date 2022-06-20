import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  )
}

const tarefas = ['lavar a louça', 'fazer café', 'tomar café', 'ir no mercado', 'esquentar almoço', 'almoçar'];

function App() {
  return (    
    <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
  );
}

export default App;
