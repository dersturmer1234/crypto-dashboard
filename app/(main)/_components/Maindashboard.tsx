'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import { getCoinData } from '@/services/coinService'
import { CoinDataType } from '@/types/CoinDataType'
import { Badge } from '@/components/ui/badge'
import CoinsTable from './CoinsTable'

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
