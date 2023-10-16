import React from 'react'
import styled from 'styled-components'

export default function button() {
    return (
        <InputButton type='button' value={'add'} />
    )
}

const InputButton = styled.input`
    margin-top: 40px;
    width: 300px;
    height: 40px;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    transition: .2s;
    &:hover{
        transform: scale(0.9);
        background-color: #f1f1f1;
    }
`