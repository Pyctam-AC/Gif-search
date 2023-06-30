// eslint-disable-next-line react/prop-types
import { useState } from 'react';

import spinnerLogo from '../images/spinner.gif';

const Gif = ({ gifImg }) => {
  const [isLoading, setIsLoading] = useState(true);

  const onLoading = () => {
    setIsLoading(false);
  };

  const gifLInk = `https://i.giphy.com/media/${gifImg}/giphy.gif`;

  return (
    <img
      className='w-80 h-80 bg-contain'
      src={isLoading ? spinnerLogo : gifLInk}
      onLoad={onLoading}
    />
  );
};

export default Gif;
