import Search from "./Search"

function Navbar() {
    return (
        <div className='w-full bg-card h-20 flex'>
            <div className='container justify-between flex border-b flex-1 border-primary/70 items-center'>
                <h1 className='hover:bg-primary/90 hover:cursor-pointer text-primary-foreground h-fit uppercase bg-primary py-2 px-4 rounded-md'>
                    Crypto app
                </h1>
                <Search />
            </div>
        </div>
    )
}

export default Navbar
