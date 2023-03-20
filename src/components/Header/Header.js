import React, {useState} from 'react';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import Modal from '../modal/Modal'
import AddNewAlbum from '../newAlbum/AddNewAlbum';

function Header(props) {
  const [showModal, setShowModal] = useState(false)
  return (
      <>
      {showModal &&  <Modal setShowModal={setShowModal}><AddNewAlbum setShowModal={setShowModal} /></Modal>}
      <Grid container alignItems={'center'} marginBottom="1em" justifyContent={'space-between'}>
        <Grid item>
        <h1 >React Albums Project Test</h1> 
        </Grid>
        <Grid item  flexGrow={1}></Grid>
        <Grid item >
            <Button item variant='outlined' onClick={() => setShowModal(prev => !prev)} color='success'>Add Album</Button>
        </Grid>
      </Grid>
      </>
  )
}

export default Header