function Card({
  title,
  title_japanese,
  images,
  synopsis,
  score,
  date,
  next,
  after,
}) {
  return (
    <div className="grid lg:grid-cols-2 lg:max-w-5xl max-w-xs gap-3">
      <div className="flex flex-col mb-4 lg:col-start-1 lg:col-end-3">
        <h1 className="font-cabin text-2xl">{title}</h1>
        <h1>{title_japanese}</h1>
      </div>
      <img
        className="place-self-center rounded-lg shadow-2xl"
        src={images.webp.large_image_url}
        alt={`Imagen de ${title}`}
      />
      <div className="flex justify-around items-center text-xl lg:col-start-1">
        <span className="bg-orange-400 p-4 rounded text-white inline-block">
          {score}
        </span>
        <span className="">{date}</span>
      </div>
      <p className="font-cabin text-justify m-5 lg:row-start-2 lg:col-start-2 lg:row-end-4">
        {synopsis}
      </p>
      <button
        className="bg-gray-400 p-2 rounded text-white block fixed inset-y-[40%] right-0 hover:bg-blue-700 opacity-0 lg:opacity-50 font-bold text-2xl"
        onClick={next}
      >
        &gt;
      </button>
      <button
        className="bg-gray-400 p-2 rounded text-white block fixed inset-y-[20%] lg:inset-y-[40%] left-0 hover:bg-blue-700 opacity-0 lg:opacity-50 font-bold text-2xl"
        onClick={after}
      >
        &lt;
      </button>
    </div>
  );
}

export default Card;
