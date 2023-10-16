import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import styled from 'styled-components'
import axios from 'axios';

export default function Main() {
    const [tableMoney, setTableMoney] = useState(0);
    const [tableDetail, setTableDetail] = useState("");

    useEffect(() => {
        axios.get('/api/products')
            .then(res => {
                console.log(res.data.product);
                setTableMoney(res.data.product[0].money);
                setTableDetail(res.data.product[0].detail);
            })
    }, []);

    return (
        <>
            <Body>
                <Button />
                <h3>MONEY : {tableMoney}</h3>
                <h3>DETAIL : {tableDetail}</h3>
            </Body>
        </>
    )
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`