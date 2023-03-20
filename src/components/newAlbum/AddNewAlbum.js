import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import {addData} from '../albums/action'

function AddNewAlbum(props) {
    const {setShowModal} = props;
    const [title, setTitle] = useState("");
    const handleCancelButton = () => {
        setShowModal(prev => !prev)
    }

    const addNewAlbum = async () => {
        const data = await addData({title: title, userId: 1});
        console.log(data)
    }
    const handleSubmitButton = async () => {
        await addNewAlbum();
        setShowModal(prev => !prev)
    }
    return (
            <Paper style={{padding: '1em', maxWidth:"400px"}}>
                <h2>Add New Album</h2>
                <Grid container>
                    <Grid item container xs={12} justifyContent={'center'}>
                        <Grid item xs={12} marginBottom={'1em'}>
                            <TextField fullWidth id="outlined-basic" label="Album Name" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12}  marginBottom={'1em'}>
                            <TextField  fullWidth id="outlined-basic" label="User Id" value={1} disabled variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={3} style={{textAlign: 'left'}}>
                            <Button variant="outlined" onClick={handleCancelButton} color='error'>cancel</Button>
                        </Grid>
                        <Grid  flexGrow={1}>
                        </Grid>
                        <Grid item xs={3}  style={{textAlign: 'right'}}>
                            <Button variant="contained" color='success'  onClick={handleSubmitButton}>submit</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
    )
}

export default AddNewAlbum