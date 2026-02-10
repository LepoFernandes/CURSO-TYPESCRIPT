import React from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';

//CSS
import styles from './App.module.css'
import TaskList from './components/TaskList';



function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que voce vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" />
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
