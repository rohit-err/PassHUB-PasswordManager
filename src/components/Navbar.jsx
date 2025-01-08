import React from 'react'



const Navbar = () => {
    const handleRedirect = () => {
        window.open('https://github.com/rohit-err/PassHUB-PasswordManager', '_blank');  // Redirect to the '/home' page
    };

    return (
        <nav className='bg-slate-800 text-white '>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
                <div className="logo font-bold text-3xl tracking-widest">
                    <span className="">Pass</span>
                    <span className="text-blue-500">HUB</span>
                </div>
                <button onClick={handleRedirect} className='text-white bg-blue-700 my-5 rounded-full flex justify-between items-center ring-white ring-1'>
                    <img className='invert w-10 p-1' src="icons/github.svg" alt="" />
                    <a href=""></a>
                    <span className='font-bold px-2'>GitHub</span>
                </button>
            </div>
        </nav>


    )
}

export default Navbar
