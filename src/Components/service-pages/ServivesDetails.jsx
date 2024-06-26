import {React, useEffect} from 'react'
import services from "../../data/data.json";
import { useParams } from 'react-router-dom';





const ServivesDetails = () => {
    const { id } = useParams();
    console.log(id);
    // console.log(services.Services);
    const get= services.Services
    console.log(get);
    const serve = get.find((item) => item.id === id);
    console.log(serve);

    
    if (!serve) {
        return <div className=' text-white'>Service not found</div>;
      }
  
    return (
        <div>
        {/* <div dangerouslySetInnerHTML={createMarkup(service.icon)} className="" /> */}
        <h1 className="my-4 text-xl font-semibold sm:text-2xl ">{serve.title}</h1>
        <p>{serve.description}</p>
      </div>
  )
}

export default ServivesDetails