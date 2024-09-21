// src/TodoList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/actions';
import { Box, Button, Input, List, ListItem, Checkbox } from '@chakra-ui/react';

const TodoList = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (title) {
      const newTodo = { title, status: false, id: Date.now() };
      dispatch(addTodo(newTodo));
      setTitle('');
    }
  };

  return (
    <Box p={5}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        mb={3}
      />
      <Button onClick={handleAddTodo} colorScheme="teal" mb={5}>
        Add Todo
      </Button>
      <List spacing={3}>
        {todos.map((todo) => (
          <ListItem key={todo.id} display="flex" alignItems="center">
            <Checkbox
              isChecked={todo.status}
              onChange={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.title}
            </Checkbox>
            <Button
              onClick={() => dispatch(deleteTodo(todo.id))}
              colorScheme="red"
              ml={2}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
