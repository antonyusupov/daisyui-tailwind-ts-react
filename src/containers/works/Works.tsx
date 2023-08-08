import { GhostBanner, SkillsCard } from "../../components/indx";

const Works = () => {

  return (
    <div className="mt-12">
      <div className="flex flex-col items-center">
        <div className=" rounded-2xl bg-black m-4 py-8 px-16 md:max-w-xl">
          <h2 className="text-2xl text-white">This is the Title</h2>
          <p className="text-sm leading-8 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae blanditiis nesciunt qui. Laborum, dolorem?</p>
          <div className="w-full flex justify-between mt-5">
            <button className="btn btn-xs text-white">github</button>
            <button className="btn btn-xs text-white">resume</button>
            <button className="btn btn-xs text-white">website</button>
          </div>
          <button className="btn btn-wide text-white rounded-full mt-5 bg-gradient-to-r from-pink-700 to-blue-700">Check out</button>
        </div>
        <div className=' w-full flex flex-col justify-evenly lg:flex-row items-center pl-20'>
          <SkillsCard title= 'Website Design' description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae blanditiis nesciunt qui. Laborum, dolorem?' contentLink='some Link' btnContent='Go to Website'/>
          <SkillsCard title= 'Logo Design' description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae blanditiis nesciunt qui. Laborum, dolorem?' contentLink='some Link' btnContent='Check out Logos'/>
        </div>
      </div>
      <GhostBanner />
      <div className="mt-20 flex flex-col mx-4 md:items-center lg:flex-row">
        <div className="p-8 bg-gray-300 -rotate-3">
          <img className="rotate-6" src="https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduaW5nfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="working"/>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-300 rounded-xl py-8 m-10">
          <h2 className="text-black px-2 text-3xl md:text-4xl lg:w-3/4">Make your Design Unique together</h2>
          <p className="text-sm text-white leading-8 mt-5 text-center mb-5 md:text-lg w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe dignissimos minima doloremque <span className="text-blue-500"> quaerat eaque, maiores, nihil, </span>velit odio cum expedita magni officia iste vitae! Ullam quibusdam similique quis corrupti maxime quisquam nostrum veniam eos? Magni!</p>
          <button className="btn btn-wide text-white rounded-full mt-5 bg-gradient-to-r from-pink-600 to-blue-500">click for more</button>
        </div>
        <div className="p-8 bg-gray-300 rotate-3">
          <img className="-rotate-6" src="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRlc2lnbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="design" />
        </div>
      </div>
    </div>
  )
}

export default Works;