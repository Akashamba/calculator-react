import React from 'react';
import {Button, Grid} from '@material-ui/core';
import symbols from './symbols.js'

export default function ButtonsContainer({expression, setExpression}) {

    const calculate = () => {
        try {
            // setExpression(eval(expression));
            setExpression(45)
        }
        catch{
            setExpression('Math Error')
        }

    }

    const enterSymbol = (symbol) => {
        if(expression!=='Math Error')
            setExpression(expression+symbol)
        else
            setExpression(symbol)
    }

    return(
        <Grid container className='buttons-container'>
            
            <Grid item xs={3}>
                <Button onClick={() => setExpression(' ') }>AC</Button>
            </Grid>

            <Grid item xs={3}>
                <Button onClick={() => setExpression(expression.toString().slice(0,-1)) }>⌫</Button>
            </Grid>

            {symbols.map(symbol => (
                <Grid item xs={3}>
                    <Button onClick={() => enterSymbol(symbol.value) }>{symbol.label}</Button>
                </Grid>
            ))}
            <Grid item xs={6}>
                    <Button onClick={() => calculate()}>=</Button>
            </Grid>
        </Grid>
    );
}