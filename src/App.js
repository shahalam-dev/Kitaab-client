// import { Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import CardGallery from "./components/CardGallery/CardGallery";
import PopularBooks from "./components/PopularBooks/PopularBooks";
import ProductSwitch from "./components/ProductSwitch/ProductSwitch";
function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <CardGallery></CardGallery>
      <Routes>
        <Route path="/" element={<ProductSwitch />}>
          <Route path="popular-books" element={<PopularBooks />} />
          <Route path="popular-authors-books" element={<PopularBooks />} />
          <Route path="best-offers" element={<PopularBooks />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
