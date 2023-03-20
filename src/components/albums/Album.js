import React from 'react';
import Grid from'@mui/material/Grid';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

function Album(props) {
    const {userId, id, title} = props.albumDetails;

    return (
        <Grid item container flexDirection={'column'} spacing={1} xs={10} sm={4} md={3} lg={3}>
            <Paper style={{margin: "0.5em",padding: "0.8em 0.3em"}}>
               <Grid container flexDirection={'column'} alignItems={'space-between'}>
                <Grid item justifyContent={'center'} style={{height: "120px", textAlign:'center'}}>
                    <Grid> 
                        <p>Title: {title}</p>
                        <span>Id: {id}</span>
                        <span>UserID: {userId}</span>
                    </Grid>
                </Grid>
                <Grid item container justifyContent={'space-evenly'}>
                    <Button item variant='outlined'>
                        Delete
                    </Button>
                    <Button item variant='contained'>
                        Update
                    </Button>
                </Grid>
               </Grid>
            </Paper>
        </Grid>
    )
}

export default Album