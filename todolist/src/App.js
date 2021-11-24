import { Box, Button, Divider, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import AddToDoList from './AddToDoList'
import ShowTaskList from './ShowTaskList'

const App = () => {


  const [usrs,setUsers]=useState([])

  const addUser = (user) => {
    user.id = usrs.length + 1;
    setUsers([...usrs, user])
  }
  const delUser = (id) => {
    setUsers(usrs.filter((user) => user.id!==id))
  }


  return(
    <div className="container">
    <h1 className="text-center display-2">ToDoList</h1>
    <div className="row">
      <div className="col-6">
        <h1 className="text-center">Add Task</h1>
        <AddToDoList addUser={addUser}/>
      </div>
      
      <div className="col-6">
      <h1 className="text-center">View Task</h1>
                        
{usrs.length>0 &&<Box>   <Typography style={{fontWeight:'bold',}}>Sort By:</Typography>
            <Button variant="outlined" color="primary" size="small" style={{margin:20}}>By Start Date</Button>
            <Button variant="outlined" color="primary" size="small" style={{margin:20}}onClick={() => setUsers(usrs.sort(function(a, b){return a.enddate - b.enddate}))}>By End Date</Button>
            <Button variant="outlined" color="primary" size="small" style={{margin:20}}onClick={() => setUsers(usrs.sort(function(a, b){return a.priority - b.priority}))}>By Priority</Button></Box>   }
      <ShowTaskList datauser={usrs} deleteUser={delUser}/>
      </div>
    </div>
  </div> 
  )
}
export default App;