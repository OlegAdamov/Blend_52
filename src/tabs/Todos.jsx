import { useState } from 'react';
import { nanoid } from 'nanoid';

import { Grid, 
        GridItem, 
        SearchForm, 
//         EditForm, 
//         Text, 
        Todo } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const getTodo = todo => {
    setTodos(prev => [...prev, { id: nanoid(), ...todo }]);
  };
  console.log('todos, ', todos);
  return (
    <>
      <SearchForm getTodo={getTodo} />
      <Grid>
        {todos.map((todo, idx) => {
          return (
            <GridItem key={todo.id}>
              <Todo dataTodo={todo} idx={idx + 1} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};
