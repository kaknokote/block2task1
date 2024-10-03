import styles from './App.module.css';
import React, { useState } from 'react';
import { MyComponent } from './MyComponent.jsx';

export const App = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [list, setList] = useState([]);
  
  const isValueValid = value.length >= 3;

  const onAddButtonClick = () => {
    if (isValueValid) {
      const updatedList = [...list, { id: Date.now(), value }];
      setList(updatedList);
      setValue('');
      setError('');
    } else {
      setError('Значение должно содержать не менее 3 символов.');
    }
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.pageHeading}>Ввод значения</h1>
      <p className={styles.noMarginText}>
        Текущее значение <code>value</code>: "<output className={styles.currentValue}>{value}</output>"
      </p>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.buttonsContainer}>
        <MyComponent setValue={setValue} setError={setError} onAddButtonClick={onAddButtonClick} />
        <button className={styles.button} disabled={!isValueValid} onClick={onAddButtonClick}>Добавить в список</button>
      </div>
      <div className={styles.listContainer}>
        <h2 className={styles.listHeading}>Список:</h2>
        {list.length === 0 ? (
          <p className={styles.noMarginText}>Нет добавленных элементов</p>
        ) : (
          <ul>
            {list.map((item) => (
              <li key={item.id}>{item.value}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
