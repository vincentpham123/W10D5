import harvardArt from "./data/harvardArt";
import { GalleryNavigation } from "./components/GalleryNavigation/index";
import { BrowserRouter ,Switch, Route} from "react-router-dom";

function App() {
  
  return (

      < GalleryNavigation galleries={harvardArt.records} />


  );
}

export default App;
