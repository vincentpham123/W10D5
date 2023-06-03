import harvardArt from "./data/harvardArt";
import { GalleryNavigation } from "./components/GalleryNavigation/index";
import { BrowserRouter ,Switch, Route} from "react-router-dom";
import { GalleryView } from "./components/GalleryNavigation/GalleryView";

function App() {
  console.log('hello')
  return (
    <>

    
      <Route path='/galleries' render={() => <GalleryNavigation galleries={harvardArt.records} />}/>
      <Route exact path='/galleries/:galleryId' component={GalleryView}>
        <GalleryView galleries={harvardArt.records} />
      </Route>
    </>
  );
}

export default App;
