
const HeroBanner = () => {
  return (
    <div className="mt-20 px-3 w-full relative md:max-w-md lg:max-w-2xl">
      <div className="absolute inset-0.5 blur-xl rotate-1 bg-neutral"></div>
      <div className="card glass flex justify-between py-4 px-12">
        <div className="card-body">
          <h2 className="card-title text-white md:text-4xl">Life hack</h2>
          <p>How to park your car at your garage? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt non necessitatibus vero qui rerum voluptas?</p>
          <button className="btn btn-outline btn-circle mt-5 transition duration-1000 delay-75 hover:btn-wide btn-accent">Go</button>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;