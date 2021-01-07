import React from 'react';
import {Button, Grid} from '@material-ui/core';
import symbols from './symbols.js'

export default function ButtonsContainer({expression, setExpression}) {

    const calculate = () => {
        try {
            // eslint-disable-next-line no-eval
            setExpression({value: eval(expression.value), isResult: true});
        }
        catch{
            setExpression({value: 'Math Error', isResult: true})
        }

    }

    const enterSymbol = (symbol) => {
        if(expression.value!=='Math Error' && expression.isResult===false)
            setExpression({value: expression.value+symbol, isResult: false})
        else
            setExpression({value: symbol, isResult: false})
    }

    return(
        <Grid container className='buttons-container'>
            
            <Grid item xs={3}>
                <Button onClick={() => setExpression(' ') }>AC</Button>
            </Grid>

            <Grid item xs={3}>
                <Button onClick={() => setExpression(expression.value.toString().slice(0,-1)) }>⌫</Button>
            </Grid>

            {symbols.map(symbol => (
                <Grid item xs={3} key={symbol.value} >
                    <Button onClick={() => enterSymbol(symbol.value) }>{symbol.label}</Button>
                </Grid>
            ))}
            <Grid item xs={2} />
            <Grid item xs={4}>
                    <Button className="equal-to-symbol" onClick={() => calculate()}>=</Button>
            </Grid>
        </Grid>
    );
}