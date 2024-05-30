import { CoinDataType } from '@/types/CoinDataType'
import axios, { AxiosResponse } from 'axios'

const getCoinData = async () => {

    const options = {
        headers: {
            'X-CMC_PRO_API_KEY': 'c8efce46-cad0-4295-89fa-71e9628a0a97',
            'Accepts': 'application/json',
        }
    }

    let response: AxiosResponse<CoinDataType> | null = null

    try {
        response = await axios.get<CoinDataType>('https://pro-api.coinmarketcap.com/v1' + '/cryptocurrency/listings/latest', options)
    } catch (err) {
        console.log(err)
        response = null
        return response
    }

    return response ? response.data : null

}

export { getCoinData }


