import React from 'react';
import Backdrop from '@mui/material/Backdrop';

export default function SimpleBackdrop(props) {
  return (
    <div style={{ position: 'absolute',width: '100vw', height: '100vh'}}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
       {props.children}
      </Backdrop>
    </div>
  );
}