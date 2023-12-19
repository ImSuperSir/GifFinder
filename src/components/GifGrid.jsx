import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts.js";
import { GifGridItem } from "./GifGridItem.jsx";

export const GifGrid = ({ category }) =>
{

    const [images, setImages] = useState([]);

    const getImages = async () =>
    {
        const lNewImages = await getGifts(category);
        setImages(lNewImages);
    }

    useEffect(() =>
    {
        //getGifts(category);
        getImages();
    }, []);

    //this is a helper

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map( (x) => (
                        // <li key={id}>{title}</li>
                        <GifGridItem 
                            key={ x.id}
                            {...x}   //estamos lanzando todas las propiedades
                        />
                    ))
                }

            </div >

        </>
    )
}

