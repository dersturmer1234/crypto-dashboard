import React from 'react'
import {FaAngleUp, FaAngleDown } from 'react-icons/fa'

interface PriceChangeProps {
    change: number,
}

export const isUp = (value: number) => value > 0 ? true : false

function PriceChange({change}: PriceChangeProps) {
    return (
        <div className='flex items-center'>
            {isUp(change) ? <FaAngleUp /> : <FaAngleDown />}
            {Number((change).toFixed(3))}%
        </div>
    )
}


export default PriceChange
