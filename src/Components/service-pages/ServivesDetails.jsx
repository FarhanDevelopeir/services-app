import { React, useEffect } from 'react'
import services from "../../data/data.json";
import { useParams } from 'react-router-dom';





const ServivesDetails = () => {
  const { id } = useParams();
  console.log(id);
  const get = services.Services
  console.log(get);
  const serve = get.find((item) => item.id === parseInt(id)); // if id should be a number
  console.log(serve);


  if (!serve) {
    return <div className=' text-white'>Service not found</div>;
  } else {
    return (
      <div>
        {/* <div dangerouslySetInnerHTML={createMarkup(service.icon)} className="" /> */}
        <h1 className="my-4 text-white text-xl font-semibold sm:text-2xl ">{serve.title}</h1>
        <p>{serve.description}</p>
      </div>
    )
  }

 
}

export default ServivesDetails