interface filterOptionsInterface {
    label: string,
    filter: string
}

const filterOptions: filterOptionsInterface[] = [
    {
        filter: 'name',
        label: 'Name'
    },
    {
        filter: 'price',
        label: 'Price'
    },
    {
        filter: 'market_cap',
        label: 'Market Cap'
    },
    {
        filter: 'change_1h',
        label: '1H'
    },
    {
        filter: 'change_24h',
        label: '24H'
    },
    {
        filter: 'change_7d',
        label: '7D'
    }
] 
