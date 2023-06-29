// eslint-disable-next-line react/prop-types
const Gif = ({ gifImg }) => {
  return (
    <>
      <div>
        <img
          className='w-80 h-80 bg-contain'
          src={`https://i.giphy.com/media/${gifImg}/giphy.gif`}
        />
      </div>
    </>
  );
};

export default Gif;
