import {NavLink,nav,userParams} from 'react-router-dom';
import './GalleryNavigation.css';

export const GalleryNavigation = ({galleries}) => { 

  const GalleryList = () => {
    return galleries.map(gallery=>{
    if(!gallery.theme ) gallery.theme = gallery.name;
    return (
      <>
      <li>
        <NavLink activeClassName='active' to={`/galleries/${gallery.gallerynumber}`}>{gallery.theme}</NavLink>
      </li>
      </>
    );
    });
  }
 return (
  <ul className="cool-list"> 
    <GalleryList />
  </ul>
 )
 
};