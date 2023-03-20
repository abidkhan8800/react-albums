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
      <Grid container alignItems={'center'} marginBottom="1em">
        <Grid item>
        <h1 >React Albums Project Test</h1> 
        </Grid>
        <Grid item  flexGrow={1}></Grid>
        <Grid item xs={12} sm={3} md={2} lg={1.5} >
            <Button item variant='contained' onClick={() => setShowModal(prev => !prev)} color='success'>Add Album</Button>
        </Grid>
      </Grid>
      </>
  )
}

export default Header