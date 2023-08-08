

type DataType = {
  title:string,
  description: string,
  contentLink: string,
  btnContent: string
}



const SkillsCard = (props:DataType) => {
  return (
    <div className="m-4 flex flex-col mt-16">
      <h2 className="text-2xl text-black md:text-4xl">{props.title}</h2>
      <p className="text-sm leading-8 mt-5 w-3/4 md:text-lg">{props.description}</p>
      <a href={props.contentLink} className="text-base text-black mt-4">Got any Queation Look at my Portfolio</a>
      <button className="btn btn-wide text-white rounded-full mt-5 bg-gradient-to-r from-pink-600 to-blue-500">{props.btnContent}</button>
    </div>
  )
}

export default SkillsCard;