import React from 'react';
import {TextField} from '@material-ui/core';

export default function Display({expression}) {
    return(
        <TextField className='display' inputProps={{ disabled: true, style: {textAlign: 'right', fontSize: "3rem", height: '18vh'} }} fullWidth value={expression} />
    )
}