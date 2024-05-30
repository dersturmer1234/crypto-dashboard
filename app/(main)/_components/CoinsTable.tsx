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
import { FaDollarSign, FaStar } from 'react-icons/fa';
import PriceChange, { isUp } from './PriceChange';
import useSearch from '@/store/useSearch';

interface CoinsTableProps {
    coinData: CoinDataType
}

function CoinsTable({
    coinData
}: CoinsTableProps) {
    const { searchQuery } = useSearch()
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
                    <TableHead>Name</TableHead>
                    <TableHead>1H</TableHead>
                    <TableHead>24H</TableHead>
                    <TableHead>7D</TableHead>
                    <TableHead>price</TableHead>
                    <TableHead>Tag</TableHead>
                    <TableHead>Market capitalization</TableHead>
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
