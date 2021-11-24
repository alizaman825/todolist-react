import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Badge, Box, ButtonGroup, Divider, Paper } from '@material-ui/core';
import { AccessAlarm, ArrowDropDown, Delete, Error } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
      minWidth: 200,
      marginBottom:30,
      backgroundColor:"#EBECF0",
      padding:20,

     
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    status: {
      fontSize: 18,
     textAlign:'center',

    },
    pos: {
      marginBottom: 12,
      fontWeight:'200',
      textAlign:"center"
    },
    title:{
      fontWeight:"bold",
      textAlign:'center',
    },
    name:{
      paddingLeft:20
    },
    priority:{
      textAlign:"center",
      fontWeight:'bold',
    },
    icon:{
    marginTop:20,
      display:"flex",
      flex:1,
      flexDirection:'row',
      justifyContent:"center",
    }
  });

const ShowTaskList = (props) =>{
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return(
        <div>
        
           
          
                {props.datauser.length > 0 ? (props.datauser.map((user) => (
                   <>
                   <Paper className={classes.root}>
                     <div style={{paddingBottom:30}}>{user.status}</div>
                     <Paper>
                     <Box className={classes.name}>
                       Person:{user.name}
                     </Box>
                     <Box>
                       <div style={{fontWeight:"bold",textAlign:'center'}}>{user.title}</div>
                       </Box>
                       <Box style={{fontWeight:"200",textAlign:"center",paddingTop:10,paddingBottom:20}}>
                         {user.description}
                       </Box>
                       <Box style={{paddingLeft:18,}}>
                         <div style={{flexDirection:"row",flex:1,display:'flex'}}><AccessAlarm/>{user.startdate}</div>
                       </Box>
                       <Box>
                         <div style={{color:"#DE350B",paddingLeft:20,paddingTop:20,}}>Priority:{user.priority}</div>
                       </Box>
                       <Box>
                         <div  style={{color:"red",textAlign:"center",fontWeight:"bold",paddingBottom:30}}>
                           Deadline:{user.enddate}
                         </div>
                       </Box>
                       <Box style={{flex:1,display:"flex",justifyContent:"flex-end",paddingRight:10,paddingBottom:20}}>
                         <Delete onClick={() => props.deleteUser(user.id)} color="error"/>
                       </Box>
                     </Paper>

                   </Paper>

                  
                  </>
                 
                ))
                ):(
                    <Typography>No Task Found</Typography>
                )
            }
            <Divider style={{marginTop:40}}/>
          
    
        </div>
    )
}
export default ShowTaskList;