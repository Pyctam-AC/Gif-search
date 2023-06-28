const Gif = (props) => {
  return (
    <>
      <div>
        <img
          className='w-80 h-80 bg-contain'
          src={`https://i.giphy.com/media/${props.gifImg}/giphy.gif`}
        />
      </div>
    </>
  );
};

export default Gif;
