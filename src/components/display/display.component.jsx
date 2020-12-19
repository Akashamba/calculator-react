import React from 'react';
import {TextField} from '@material-ui/core';

export default function Display({expression}) {
    return(
        <TextField inputProps={{ disabled: true, style: {textAlign: 'right'} }} fullWidth value={expression} />
    )
}