

import {Link} from "react-router-dom";
import {useParams} from 'react-router-dom';


export const GalleryView = ({galleries})=>{
  const params = useParams();
  const id = params['galleryId'];
  let gal;
 
  galleries.forEach((gallery)=>{
    if (gallery.gallerynumber === id){

        gal = gallery;
    }
  })

  return (
    <>
    <h1>{gal.name}</h1>
    <p>{gal.labeltext}</p>
    </>
  )
}