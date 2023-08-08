import { HeroBanner } from "../../components/indx";
const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-300 pb-16 lg:w-full">
      <div className="hero bg-black max-w-xs rounded-b-2xl mb-4 pt-11 px-8 md:max-w-md lg:max-w-2xl">
        <div className="hero-content text-center">
          <div className="max-w-xs">
            <h1 className="text-2xl text-white font-bold md:text-4xl">Hello there</h1>
            <p className="py-6 md:text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ut tenetur laboriosam quam facilis similique?</p>
          </div>
        </div>
      </div>
      <HeroBanner />
    </div>
  )
}

export default Hero;