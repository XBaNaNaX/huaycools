import React, { PropTypes } from 'react'
import Todo from '../../components/Todo/Todo'

const ulStyle = {
    listStyle: 'none',
    padding: 0,
    display:'block'
}

const TodoList = ({ todos, onTodoClick }) => (
  <ul style={ulStyle}>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList