import React from "react";
const MovieCard = ({data}) => {
    console.log(data)
  return (
    <div className=" w-[15%] max-w-sm rounded overflow-hidden shadow-lg m-6">
      <img
        className="w-full h-64"
          src={data.movieposter}
        alt="Movie Poster"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{data.movieName}</div>
        <div className="flex gap-4 flex-wrap">
          <p className="text-gray-700 text-xl">Year: {data.movieYear} </p>
          <p className="text-gray-700 text-xl">Type: {data.movieType}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
