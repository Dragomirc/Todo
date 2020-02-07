import React from 'react';
import styles from './TodoItem.module.scss';

const Todo = ({ name, completed }) => (
  <div className={styles.container}>
    <div>{`Task: ${name}`}</div>
    <label htmlFor="completed">Completed</label>
    <input id="completed" name="completed" type="checkbox" value={completed} />
  </div>
);
export default Todo;
