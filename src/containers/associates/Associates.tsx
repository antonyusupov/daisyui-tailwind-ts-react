import { FaAirbnb } from 'react-icons/fa';
import { SiAdidas, SiNike, SiPuma, SiNewbalance, SiUber, SiNetflix } from 'react-icons/si';
import { AiFillAmazonCircle } from 'react-icons/ai';
import { BsPaypal } from 'react-icons/bs';


const Associates = () => {
  return (
    <div className="w-full bg-gray-300 mt-12 flex items-center py-8 px-3">
      <div className="flex flex-col w-full">
        <h3 className="text-3xl text-black uppercase text-center">associates</h3>
        <div className="flex flex-wrap justify-center">
          <div className=" m-4 bg-black text-white p-4 rounded-lg"><p className='text-4xl'><SiNike/></p></div>
          <div className=" m-4 bg-black text-white p-4 rounded-lg"><p className='text-4xl'><SiPuma/></p></div>
          <div className=" m-4 bg-black text-white p-4 rounded-lg"><p className='text-4xl'><SiAdidas /></p></div>
          <div className=" m-4 bg-black text-white p-4 rounded-lg"><p className='text-4xl'><FaAirbnb /></p></div>
          <div className=" m-4 bg-black text-white p-4 rounded-lg"><p className='text-4xl'><SiNewbalance /></p></div>
          <div className=" m-4 bg-black text-white p-4 rounded-lg"><p className='text-4xl'><SiUber /></p></div>
          <div className=" m-4 bg-black text-white p-4 rounded-lg"><p className='text-4xl'><AiFillAmazonCircle /></p></div>
          <div className=" m-4 bg-black text-white p-4 rounded-lg"><p className='text-4xl'><SiNetflix /></p></div>
          <div className=" m-4 bg-black text-white p-4 rounded-lg"><p className='text-4xl'><BsPaypal /></p></div>
        </div>
      </div>
    </div>
  )
}

export default Associates;