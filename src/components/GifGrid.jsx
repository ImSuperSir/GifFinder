import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts.js";

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
            <ol>
                {
                    //normal function
                    // images.map(x =>
                    // {
                    //     return (
                    //         <li key={x.id}>{x.title}</li>
                    //     );
                    // }
                    // )

                    //  we jusr return a line, so we can simplify
                    // images.map(x => (
                    //     <li key={x.id}>{x.title}</li>
                    // ))
                    
                    /* using destructuring of the image parameter*/
                    images.map( ({id, title}) => (
                        <li key={id}>{title}</li>
                    ))
                }

            </ol >

        </>
    )
}

