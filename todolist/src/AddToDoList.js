import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField } from '@material-ui/core';
import { Error, Feedback, Info, Warning } from '@material-ui/icons';





const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(0),
      minWidth: 194,
      marginTop:30, 
      marginBottom:20,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    textField:{
        marginTop:30,
        width:194
    }

  }));

const AddToDoList = (props) => {
    const classes = useStyles();
const previousForm = {
    id:null,
    title:'',
    description:'',
    startdate:'',
    enddate:'',
    priority:'',
    status:'',
    name:'',
}
    
const [user,setUser] = useState(previousForm)

const handleInputChange = (event) => {
    const {name,value} = event.target
    setUser({...user,[name]:value})
    console.log(user);
}
    return (
        <div className="container">
            <form onSubmit={(event) => {
                event.preventDefault()
                if(!user.title || !user.description || !user.name || !user.startdate || !user.enddate || !user.priority ||!user.status)
                return
                props.addUser(user)
                setUser(previousForm)
            }}>
               <TextField id="standard-basic" label="Title"  name="title"  value={user.title} onChange={handleInputChange}/>
               <br/>
                 <TextField id="standard-basic" label="Description"  name="description"  value={user.description} onChange={handleInputChange}/>
                 <br/>
                <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleInputChange}
          name="name"
        >
    
            <MenuItem value="Ali">Ali</MenuItem>
            <MenuItem value="Umer">Umer</MenuItem>
            <MenuItem value="Zain">Zain</MenuItem>
        </Select>
      </FormControl>
      <form className={classes.container} noValidate>
  <TextField
    id="date"
    label="Start Date"
    type="date"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    name="startdate" 
     value={user.startdate} 
     onChange={handleInputChange}
  />
</form>
<form className={classes.container} noValidate>
  <TextField
    id="date"
    label="Deadline Date"
    type="date"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    name="enddate" 
     value={user.enddate} 
     onChange={handleInputChange}
  />
</form>
                <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleInputChange}
          name="priority"
        >
          <MenuItem value='Low'>Low <Feedback color="primary" fontSize="small"/></MenuItem>
          <MenuItem value='Medium'>Medium<Warning color="action" fontSize="small"/></MenuItem>
          <MenuItem value='High'>High<Error color="error" fontSize="small"/></MenuItem>
        </Select>
      </FormControl>
      <br/>
      
                <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleInputChange}
          name="status"
        >
          <MenuItem value='To Do'>To Do</MenuItem>
          <MenuItem value='In Progress'>In Progress</MenuItem>
          <MenuItem value='Done'>Done</MenuItem>
        </Select>
      </FormControl>
                
                <div className="form-group">
                   <button className="btn btn-outline-primary btn-lg">Add Task</button>
                </div>
            </form>
        </div>
    )
}
export default AddToDoList;
