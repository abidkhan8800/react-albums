import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

function AddNewAlbum(props) {
    const {setShowModal} = props;
    const handleCancelButton = () => {
        setShowModal(prev => !prev)
    }
    return (
            <Paper style={{padding: '1em'}}>
                <h2>Add New Album</h2>
                <Grid container>
                    <Grid item container xs={12} justifyContent={'center'}>
                        <Grid item xs={12} marginBottom={'1em'}>
                            <TextField fullWidth id="outlined-basic" label="Album Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}  marginBottom={'1em'}>
                            <TextField  fullWidth id="outlined-basic" label="User Id" value={1} disabled variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid xs={3} style={{textAlign: 'left'}}>
                            <Button variant="contained" onClick={handleCancelButton}>cancel</Button>
                        </Grid>
                        <Grid  flexGrow={1}>
                        </Grid>
                        <Grid xs={3}  style={{textAlign: 'right'}}>
                            <Button variant="contained">submit</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
    )
}

export default AddNewAlbum