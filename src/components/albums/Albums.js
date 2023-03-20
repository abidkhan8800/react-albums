import React, {useState, useEffect} from 'react';
import Album from './Album'
import { getList } from './action';
import Grid from '@mui/material/Grid';


function Albums(props) {
    const [ list, setList] = useState([]);
    const getData = async () => {
        let data = await getList();
        setList(data)
    }

    useEffect(() => {
        getData();
    },[])
   
    return (
        <Grid style={{backgroundColor: "#eee", borderRadius: 10, padding: "0.5em" }} container  justifyContent={'center'} spacing={1}>
            {list.length > 0 ? list.map((item)=> {
                return <Album key={item.id} albumDetails={item} />
            }): <Grid item justifyContent={'center'}>Loading...</Grid>}
        </Grid>
    )
}

export default Albums