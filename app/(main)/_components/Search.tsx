'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { SearchIcon } from 'lucide-react'
import useSearch from '@/store/useSearch'

function Search() {
    const {setSearchQuery, searchQuery} = useSearch()
    return (
        <div className='flex gap-x-2 items-center'>
            <Input placeholder='Search for' onChange={(event) => setSearchQuery(event.target.value)} />
            <Button>
                <SearchIcon className='w-5 h-5' />
            </Button>
        </div>
    )
}

export default Search
