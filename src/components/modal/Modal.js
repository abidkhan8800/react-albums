import React from 'react';
import Backdrop from '@mui/material/Backdrop';

export default function SimpleBackdrop(props) {
  return (
    <div style={{ position: 'absolute'}}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
       {props.children}
      </Backdrop>
    </div>
  );
}