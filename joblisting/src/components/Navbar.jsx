import Logo from '../assets/images/logo.jpg'

const Navbar = () => {
  return (
    <nav className="bg-green-400 border-b border-gray-300">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">

                    {/* logo */}
                    <a className='mr-4 flex flex-shrink-0 items-center' href="">
                        <img className='h-10 w-auto' src={Logo} alt="logo" />
                        <span className=' hidden md:block ml-2 text-white font-bold text-2xl'>Rovicha-HR</span>
                    </a>

                    <div className="md:ml-auto">
                        <div className='flex space-x-2'>
                            <a href="" className='py-2 px-3 bg-black text-white rounded-md
                             hover:bg-gray-900 hover:text-white'>Home
                             </a>

                             <a href="" className='py-2 px-3 text-white rounded-md hover:bg-gray-900
                              hover:text-white'>Jobs
                              </a>

                              <a href="" className='py-2 px-3 text-white rounded-md hover:bg-gray-900 hover:text-white'>Add Job</a>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    </nav>
  )
}

export default Navbar