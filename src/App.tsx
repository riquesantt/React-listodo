import { useState } from 'react';
import * as C from './App.styles';
import { Item } from '././types/Item';
import { ListItem } from './components/ListItem';
import {AddArea} from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Tomar café', done: false},
    { id: 2, name: 'Andar de bicicleta', done: false},
    { id: 2, name: 'Alguma coisa', done: false}
  ]);

  // aqui onde ocorre o Push a cada novo item da lista //passar como uma prop para o addarea
   const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length +1,
      name: taskName,
      done: false
    });
    setList(newList); 

  }

  return (
    <C.Container>
      <C.Area>
      <C.Header>To Do List</C.Header>

      <AddArea onEnter={handleAddTask} />
      {list.map((item, index)=>(
        <ListItem key={index} item={item}/>
      ))}

      </C.Area>     
    </C.Container>
  )

}
export default App;
