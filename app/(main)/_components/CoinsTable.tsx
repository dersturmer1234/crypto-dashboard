'use client'
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { cn } from '@/lib/utils';
import { CoinDataType } from '@/types/CoinDataType';
import { FaChevronUp, FaChevronDown, FaSort, FaDollarSign, FaStar } from 'react-icons/fa';
import PriceChange, { isUp } from './PriceChange';
import useSearch from '@/store/useSearch';
import { useEffect, useState } from 'react';
import { randomInt } from 'crypto';
import useSort from '@/store/useSort';

interface CoinsTableProps {
    coinData: CoinDataType
}

interface TableHeadProps {
    label: string
    state: 'up' | 'down' | null
    onClick: () => void
}


function CoinsTable({
    coinData
}: CoinsTableProps) {
    const { searchQuery } = useSearch()
    const { filter, setFilter} = useSort()

    const [heads, SetHeads] = useState<TableHeadProps[]>([{
        label: 'Name',
        state: null,
        onClick: () => { }
    },
    {
        label: '1H',
        state: null,
        onClick: () => { }
    },
    {
        label: '24H',
        state: null,
        onClick: () => { }
    },
    {
        label: '7D',
        state: null,
        onClick: () => { }
    },
    {
        label: 'Price',
        state: null,
        onClick: () => { }
    },
    {
        label: 'Tag',
        state: null,
        onClick: () => { }
    },
    {
        label: 'Market capitalization',
        state: null,
        onClick: () => { }
    }])


    useEffect(() => {
        SetHeads(prevHeads => prevHeads.map((head, i) => ({
            ...head,
            onClick: () => handleSort(i)
        })));
    }, []);


    const handleSort = (index: number) => {
        SetHeads((prev) => {
            return prev.map((head, i) => {
                if (i === index) {
                    if (head.state === null) {
                        setFilter(head.label, 'up')
                        return { ...head, label: head.label, state: 'up' };
                    } else if (head.state === 'up') {
                        setFilter(head.label, 'down')
                        return { ...head, state: 'down' };
                    } else {
                        setFilter(head.label, null)
                        return { ...head, state: null };
                    }
                } else {
                    setFilter(head.label, null)
                    return { ...head, state: null };
                }
            });
        });

    }

    const filteredData = coinData.data?.filter((coin) => {
        return coin.name.toLowerCase().includes(searchQuery.toLowerCase())
    })


    return (
        <Table className='font-semibold'>
            <TableCaption>Coins</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead></TableHead>
                    <TableHead>#</TableHead>
                    {heads.map((head) => (
                        <TableHead key={head.label}>
                            <div className='flex items-center'>
                                {head.label}
                                <Button onClick={() => head.onClick()} variant='ghost'>
                                    {
                                        head.state === 'up' && <FaChevronUp />
                                    }
                                    {
                                        head.state === 'down' && <FaChevronDown />
                                    }
                                    {
                                        !head.state && <FaSort />
                                    }
                                </Button>
                            </div>
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    filteredData?.map((coin, idx) => (
                        <TableRow key={coin.name}>
                            <TableCell>
                                <Button variant='ghost' className='group'>
                                    <FaStar className='group-hover:text-yellow-500 text-neutral-200' />
                                </Button>
                            </TableCell>
                            <TableCell>
                                {idx}.
                            </TableCell>
                            <TableCell>
                                <div className='flex'>
                                    {coin.name}
                                </div>
                            </TableCell>
                            <TableCell className={cn(
                                isUp(coin.quote.USD.percent_change_1h) ? 'text-green-500' : 'text-red-500'
                            )}>
                                <div>
                                    <PriceChange change={coin.quote.USD.percent_change_1h} />
                                </div>
                            </TableCell>
                            <TableCell className={cn(
                                isUp(coin.quote.USD.percent_change_24h) ? 'text-green-500' : 'text-red-500'
                            )}>
                                <div>
                                    <PriceChange change={coin.quote.USD.percent_change_24h} />
                                </div>
                            </TableCell>
                            <TableCell className={cn(
                                isUp(coin.quote.USD.percent_change_7d) ? 'text-green-500' : 'text-red-500'
                            )}>
                                <div>
                                    <PriceChange change={coin.quote.USD.percent_change_7d} />
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <FaDollarSign className='w-4 h-4' />
                                    {(Number((coin.quote.USD.price).toFixed(10))).toLocaleString()}
                                </div>
                            </TableCell>
                            <TableCell>{coin.symbol}</TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <FaDollarSign className='font-thin w-4 h-4' />
                                    {(Number((coin.quote.USD.market_cap).toFixed(0))).toLocaleString()}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>

        </Table>
    )
}

export default CoinsTable
