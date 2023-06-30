// eslint-disable-next-line react/prop-types
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

const Gif = ({ gifImg }) => {

  const [isLoading, setIsLoading] = useState(true);

  const onLoading = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div>
        {isLoading ? <Spinner/> : null}

          <img
            className={`w-80 h-80 bg-contain ${isLoading ? 'hidden' : ''}`}
            src={`https://i.giphy.com/media/${gifImg}/giphy.gif`}
            onLoad={onLoading}
          />

        </div>
    </>
  );
};

export default Gif;
