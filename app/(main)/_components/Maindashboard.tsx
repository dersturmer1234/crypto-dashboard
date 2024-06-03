'use client'

// import { socket } from "@/socket"
import { CoinDataType } from '@/types/CoinDataType'
import { useEffect, useState } from 'react'
import CoinsTable from './CoinsTable'
import { getCoinData } from '@/services/coinService'
import { setInterval } from 'timers/promises'


function Maindashboard() {
    const [coinData, setCoinData] = useState<CoinDataType>()

    useEffect(() => {
        getCoinData().then((data) => {
            if (data) {
                setCoinData(data)
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    console.log(coinData)
    if (!coinData) return (<div>Loading...</div>)
    return (
        <div className='w-full h-full p-2 text-card-foreground bg-card'>
            <div className='p-4'>
                <CoinsTable coinData={coinData} />
            </div>
        </div>
    )
}

export default Maindashboard
