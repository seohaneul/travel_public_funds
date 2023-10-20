import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import styled from 'styled-components'
import axios from 'axios';
import Add from '../components/Add';

export default function Main() {
    const [tableMoney, setTableMoney] = useState([]);
    const [tableDetail, setTableDetail] = useState([]);
    let moneyArr = [];
    let detailArr = [];

    useEffect(() => {
        axios.get('/api/products')
            .then(res => {
                // console.log(res.data.product);
                let arr = res.data.product;
                arr.forEach((el, item) => {
                    moneyArr[item] = el.money;
                    detailArr[item] = el.detail;
                    // console.log(detailArr.length)
                    setTableMoney(moneyArr);
                    setTableDetail(detailArr);
                });
            })
    }, []);



    return (
        <>
            <Info>
                <Button />
                <Table>

                    <table>
                        <thead>
                            <tr>
                                <th>MONEY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableMoney.map((number, idx) => {
                                    return (
                                        <tr>
                                            <td>{number}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th>MONEY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableDetail.map((number, idx) => {
                                    return (
                                        <tr>
                                            <td>{number}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </Table>
            </Info>
            {/* <Add /> */}
        </>
    )
}

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Table = styled.div`
    display: flex;
    
    >table{
        margin: 10px;
        >tbody{
            >tr{
                >td{
                    padding: 10px;
                    text-align: center;
                    border-bottom: 1px solid #000;
                }
            }
        }
    }
`