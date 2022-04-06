import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css'

const AddUser = () => {
  const [enteredusername,setenteredusername] = useState('');
  const [enteredage,setenteredage] = useState('');

  const addUserhandler = (event) =>{
    event.preventDefault();
      if(enteredusername.trim().length === 0 || enteredage.trim().length === 0){
        return;
      }

      if(+enteredage < 1){
        return; 
      }
      console.log(enteredage)
    setenteredusername('');
    setenteredage('');
  }

  const changeUserNameHandler = (event) => {
    setenteredusername(event.target.value);
  }


  const changeAgeHandler = (event) => {
    setenteredage(event.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserhandler}>
        <label htmlFor='username'>UserName</label>
        <input id="username" type="text" value={enteredusername} onChange={changeUserNameHandler}/>
        <label htmlFor='age'>Age (Years)</label>
        <input id="age" type="number" value={enteredage} onChange={changeAgeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
