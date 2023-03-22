
import Link from "next/link";



export default function Contact(): JSX.Element {

    return (
        <div className='flex flex-col'>
            <h2 className="text-[#414141] font-bold text-5xl mb-5">CONTACT</h2>

            <div className="flex flex-row flex-wrap justify-center w-full">

                <div className="flex flex-row flex-wrap items-center justify-center lg:mr-10 md:mr-6 sm:mr-3">

                    <div className="flex flex-col mb-5 mr-10">
                        <h3 className="text-3xl font-semibold text-[#414141] ">CONTACT INFO:</h3>

                        <div className="flex flex-row items-cente mt-5">
                            <span className="material-icons font-bold text-2xl text-[#414141] mr-3">
                                email 
                            </span>
                            <span className="text-xl font-normal text-[#414141]">mra7588dev@gmail.com</span>
                        </div>
                        
                    </div>
                    
                    <div className="flex flex-col mb-5">
                        <h3 className="text-3xl font-semibold text-[#414141] ">SOCIAL NETWORK:</h3>
                        <div className="flex flex-row gap-2 mt-2">
                            <Link href='https://www.linkedin.com/in/angel-mu%C3%B1oz-830b56191/' 
                                    target='_blank'>
                                <span className="text-xl font-extrabold text-cyan-600 hover:text-cyan-700">
                                    Linkedin
                                </span>
                            </Link>
                            <Link href='https://github.com/AnGeL-19'
                            target='_blank'>
                                <span className="text-xl font-extrabold text-slate-600 hover:text-slate-700">
                                    GitHub
                                </span>                                
                            </Link> 
                            <Link href='https://www.instagram.com/0kroenen0/'
                            target='_blank'
                                  >
                                <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                                    Instagram
                                </span>
                            </Link>
                        </div>
                    </div>

                </div>

  

            </div>

        </div>
    )
}
