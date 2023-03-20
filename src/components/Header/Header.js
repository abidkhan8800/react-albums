import React from 'react';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

function Header() {
  return (
    <Grid container alignItems={'center'} marginBottom="1em">
        <Grid item>
        <h1 >React Albums Project Test</h1> 
        </Grid>
        <Grid flexGrow={1}></Grid>
        <Grid paddingRight='5px'>
            <Button item variant='contained'>Add Album</Button>
        </Grid>
    </Grid>
  )
}

export default Header