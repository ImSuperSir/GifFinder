import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";



/* a diferencia de un functional component
que recibe props, un hook, recibe literal 
lo que se le envíe*/
export const useFetchGifs = (category) => {
  
    const [images, setImages] =   useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () =>
    {
        const lNewImages = await getGifts(category);
        setImages(lNewImages);
        setIsLoading(false);
    }

    useEffect(() =>
    {
        getImages();
    }, []);

    //this is a helper
  
  return {
    images, //images: images,
    isLoading // isLoading: true
  }
}

