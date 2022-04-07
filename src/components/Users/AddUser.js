import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const [enteredusername,setenteredusername] = useState('');
  const [enteredage,setenteredage] = useState('');
  const [error,setError] = useState()

  const addUserhandler = (event) =>{
    event.preventDefault();
      if(enteredusername.trim().length === 0 || enteredage.trim().length === 0){
        setError({
          title:'Invalid Input',
          message: 'Please enter a valid name or age (non-empty values)',
        });
        return;
      }

      if(+enteredage < 1){
        setError({
          title:'Invalid Input',
          message: 'Please enter a valid age (> 0)',
        });
        return; 
      }
    props.onAddUser(enteredusername,enteredage)
    setenteredusername('');
    setenteredage('');
  }

  const changeUserNameHandler = (event) => {
    setenteredusername(event.target.value);
  }


  const changeAgeHandler = (event) => {
    setenteredage(event.target.value);
  }
  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
      {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>)}
      <Card className={classes.input}>
        <form onSubmit={addUserhandler}>
          <label htmlFor='username'>UserName</label>
          <input id="username" type="text" value={enteredusername} onChange={changeUserNameHandler}/>
          <label htmlFor='age'>Age (Years)</label>
          <input id="age" type="number" value={enteredage} onChange={changeAgeHandler}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
