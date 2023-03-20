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
    console.log(list)
   
    return (
        <Grid style={{backgroundColor: "#eee", borderRadius: 10, paddingBottom: "0.5em" }} container  justifyContent={'center'} spacing={1}>
            {list.length > 0 ? list.slice(0,10).map((item)=> {
                return <Album key={item.id} albumDetails={item} />
            }): <Grid item justifyContent={'center'}>Loading...</Grid>}
        </Grid>
    )
}

export default Albums