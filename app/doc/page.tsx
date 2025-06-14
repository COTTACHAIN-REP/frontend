import Image from 'next/image';

const Doc = () => {

    return (
        <div className="min-h-screen bg-white flex flex-col justify-start items-center">



            <Image src='/Group.svg' alt='chainimage' className='mt-10 transition-transform duration-200 hover:scale-105 mt-[150px] w-full h-auto md:h-[20%] md:w-[20%]' height={1000} width={1000} />

            <div className='w-auto pb-20 flex justify-end items-end flex-col'>
                <p className='text-black text-[2.5rem] font-bold text-center mt-[50px]'>Cottachain Documentation</p>
                <small className='text-yellow-500 text-right text-[1.2rem]'>coming soon</small>
            </div>

            




        </div>
    );
}

export default Doc;