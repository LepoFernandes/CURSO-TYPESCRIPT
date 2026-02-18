import React, { useState } from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import Modal from './components/Modal'

//CSS
import styles from './App.module.css'
import TaskList from './components/TaskList';

//INTERFACE
import { ITask } from './interface/Task';

function App() {

  const[taskList, setTaskList] = useState<ITask[]>([])


  const deleteTask = (id: Number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id;
      })
    )
  };

  return (
    <div>
      <Modal children={<TaskForm btnText='Editar Tarefa' taskList={taskList} />} />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que voce vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
