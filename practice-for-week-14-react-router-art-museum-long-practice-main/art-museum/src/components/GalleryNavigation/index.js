import {NavLink,nav,userParams} from 'react-router-dom';
import './GalleryNavigation.css';

export const GalleryNavigation = ({galleries}) => { 
  const GalleryList = () => {
  return galleries.map(gallery=>{
    return (
      <>
      <li>
        <NavLink activeClassName='active' to={`/gallery/${gallery.id}`}>{gallery.name}</NavLink>
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