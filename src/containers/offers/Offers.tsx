
const Offers = () => {
  return (
    <div className="w-full my-20 p-2 flex flex-col items-center">
      <div className=" flex flex-col rounded-md hero bg-base-300 mb-4 pb-8 md:max-w-xl lg:max-w-4xl">
        <div className="flex flex-col items-center justify-center my-6 p-4">
          <h2 className="text-white text-xl md:text-2xl my-4">My Portfolio</h2>
          <p className="text-sm leading-8 w-3/4 text-center md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officiis facilis maiores aliquid.</p>
        </div>
        <div className="flex flex-col items-center w-full px-3 gap-4 lg:grid grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-1">
            <img src="https://cdn.pixabay.com/photo/2014/04/02/10/57/recycle-305031_640.png" alt="logo" className="w-16 h-16"/>
            <h3 className="text-white">Recycler</h3>
            <p className="text-center w-2/3 leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, labore.</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <img src="https://cdn.pixabay.com/photo/2016/03/31/14/49/celtic-1292841_640.png" alt="logo" className="w-16 h-16"/>
            <h3 className="text-white">Djurra</h3>
            <p className="text-center w-2/3 leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, labore.</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <img src="https://cdn.pixabay.com/photo/2017/01/13/01/22/rocket-1976107_640.png" alt="logo" className="w-16 h-16"/>
            <h3 className="text-white">Jetti</h3>
            <p className="text-center w-2/3 leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, labore.</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <img src="https://cdn.pixabay.com/photo/2017/01/28/13/23/color-circle-articles-2015356_1280.png" alt="logo" className=" w-16 h-16" />
            <h3 className="text-white">Google</h3>
            <p className="text-center w-2/3 leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, labore.</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <img src="https://cdn.pixabay.com/photo/2020/10/17/13/21/telegram-5662082_640.png" alt="logo" className="w-16 h-16"/>
            <h3 className="text-white">Telegram</h3>
            <p className="text-center w-2/3 leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, labore.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers;