import "./App.css";
import { TextImg } from "./SegundaParte/Text&Img";
import { EfectText } from "./PrimeraParte/EfectText";
import { Imagen } from "./TerceraParte/Imagen";
import { Hover } from "./CuartaParte/Hover";

function App() {
  return (
    <>
      <EfectText />
      <TextImg />
      <Imagen />
      <Hover />
    </>
  );
}

export default App;
