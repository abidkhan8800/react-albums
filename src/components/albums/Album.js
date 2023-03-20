import React,{useState} from 'react';
import Grid from'@mui/material/Grid';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import {deleteData} from './action'
import Modal from '../modal/Modal'
import AddNewAlbum from '../newAlbum/AddNewAlbum';
import { toast } from 'react-toastify';

function Album(props) {
    const {id, title} = props.albumDetails;
    const [showModal, setShowModal] = useState(false)
    const handleDeleteButton = async (id) => {
        const result = await deleteData(id)
        console.log(result)
        toast("Album deleted successfully.");
    }

    const handleUpdateButton = async (id) => {
        setShowModal(prev => !prev)
    }

    return (
        <>
        <Grid item container flexDirection={'column'} spacing={1} xs={12} sm={4} md={3} lg={3}>
            <Paper style={{margin: "0.5em",padding: "0.8em 0.3em"}}>
               <Grid container flexDirection={'column'} alignItems={'space-between'} padding='0.5em'>
                <Grid item justifyContent={'center'} style={{height: "120px", textAlign:'center'}}>
                    <Grid style={{textAlign: 'left'}}> 
                        <p> <strong>Id:</strong> {id}</p>
                        <p> <strong>Title: </strong>{title}</p>
                        {/* <span>UserID: {userId}</span> */}
                    </Grid>
                </Grid>
                <Grid item container justifyContent={'space-between'}>
                    <Button variant='outlined' color='error' onClick={() => handleDeleteButton(id)}>
                        Delete
                    </Button>
                    <Button variant='contained' color='success'  onClick={() => handleUpdateButton(id)}>
                        Update
                    </Button>
                </Grid>
               </Grid>
            </Paper>
        </Grid>
        {showModal && <Modal setShowModal={setShowModal} >
                <AddNewAlbum setShowModal={setShowModal} album={props.albumDetails}/>
            </Modal>}
        </>
    )
}

export default Album