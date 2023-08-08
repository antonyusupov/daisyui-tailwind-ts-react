
const Contact = () => {
  return (
    <div className="lg: px-10 bg-gray-300">
      <div className="lg:flex items-center">
        <div className="flex flex-col items-center lg:w-1/3">
          <h2 className=" text-2xl text-black text-center md:text-4xl">Contact for Information</h2>
          <p className="text-center text-sm text-white leading-8 w-3/4 mt-4 md:text-lg">Lorem ipsum dolor sit <span className="text-blue-500"> amet, consectetur adipisicing</span> elit. Sed, quibusdam quas repudiandae suscipit vitae cupiditate.</p>
        </div>
        <div className="mt-4 p-4 flex w-full flex-col justify-center items-end">
          <form className="flex flex-col p-3 items-center w-full lg:w-2/3 ">
            <input type="text" placeholder="Name" className="input input-bordered input-info w-full max-w-xs bg-white mt-5" />
            <input type="text" placeholder="Surname" className="input input-bordered input-info w-full max-w-xs bg-white mt-5" />
            <input type="email" placeholder="Email" className="input input-bordered input-info w-full max-w-xs bg-white mt-5" />
            <textarea className="textarea textarea-info bg-white mt-5 w-2/4" placeholder="Message"></textarea>
            <button className="btn btn-wide text-white rounded-full mt-5 bg-gradient-to-r from-pink-600 to-blue-500">submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;