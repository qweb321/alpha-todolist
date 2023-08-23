import TodoItem from './TodoItem';

const TodoCollection = ({ todos, onToggleDone }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleDone={(id) => {
              onToggleDone?.(id);
            }}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
