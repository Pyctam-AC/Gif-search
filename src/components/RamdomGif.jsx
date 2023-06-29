import { useEffect, useState } from "react";
import GifCards from "./GifCards.jsx";
import { random } from "../utills/api";

const RamdomGif = () => {
  const [ramdomGif, setRandomGif] = useState([]);

  useEffect(() => {
    random().then((res) => {
      console.log(res.data)
      setRandomGif(Array.from(res.data.id));
    });
  }, []);

  return <GifCards gifCards={ramdomGif} />;
};

export default RamdomGif;
