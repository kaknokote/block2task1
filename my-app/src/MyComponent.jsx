import React from 'react';
import styles from './App.module.css';

export const MyComponent = ({ setValue, setError, onAddButtonClick }) => {
    const onInputButtonClick = () => {
      const promptValue = prompt('Введите новое значение:');
      if (promptValue) {
        if (promptValue.length < 3) {
          setError('Значение должно содержать минимум 3 символа');
          setValue('');
        } else {
          setValue(promptValue);
          setError('');
        }
      }
    };
  
    return (
      <button onClick={onInputButtonClick} className={styles.button}>Ввести новое</button>
    );
  };