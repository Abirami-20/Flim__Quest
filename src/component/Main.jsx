import React, { useEffect, useState } from "react";
import movie from "../assets/movie.png";
import MovieCard from "./MovieCard";
import axios from "axios";
import movieposter from "../assets/movieposter.jpg";
import alibaba from "../assets/alibaba.jpg";
import Matrix from "../assets/matrix.jpg";
import friends from "../assets/friends.jpg";
import inception from "../assets/inception.jpg";
import breakingbad from "../assets/breaking bad.jpg";
import Shawshank from "../assets/The Shawshank Redemption.jpg";
import game from "../assets/Game of Thrones.jpg";
import Stranger from "../assets/Stranger Things.jpg";
import dark from "../assets/The Dark Knight.jpg";
import interseller from "../assets/interseller.jpg";
import Dunkrik from "../assets/Dnkrik.jpg";
const Main = () => {
  const data = [
    {
      movieposter: alibaba,
      movieName: "Ali Baba",
      movieYear: "1987",
      movieType: "Movie",
    },
    {
      movieposter: Matrix,
      movieName: "The Matrix",
      movieYear: "1999",
      movieType: "Movie",
    },
    {
      movieposter: friends,
      movieName: "Friends",
      movieYear: "1994-2004",
      movieType: "TV Show",
    },
    {
      movieposter: inception,
      movieName: "Inception",
      movieYear: "2010",
      movieType: "Movie",
    },
    {
      movieposter: breakingbad,
      movieName: "Breaking Bad",
      movieYear: "2008-2013",
      movieType: "TV Show",
    },
    {
      movieposter: Shawshank,
      movieName: "The Shawshank Redemption",
      movieYear: "1994",
      movieType: "Movie",
    },
    {
      movieposter: game,
      movieName: "Game of Thrones",
      movieYear: "2011-2019",
      movieType: "TV Show",
    },
    {
      movieposter: movieposter,
      movieName: "Avengers Endgame",
      movieYear: "2019",
      movieType: "Movie",
    },
    {
      movieposter: Stranger,
      movieName: "Stranger Things",
      movieYear: "2016-present",
      movieType: "TV Show",
    },
    {
      movieposter: dark,
      movieName: "The Dark Knight",
      movieYear: "2008",
      movieType: "Movie",
    },
    {
      movieposter: interseller,
      movieName: "Interstellar",
      movieYear: "2014",
      movieType: "Movie",
    },
    {
      movieposter: Dunkrik,
      movieName: "Dunkrik",
      movieYear: "2017",
      movieType: "Movie",
    },
  ];

  const [searchmovie, setsearchmovie] = useState("");
  const [searchdata,setsearchdata]=useState(data)
  const handlesearch = () => {
    const filteredData = data.filter((item) =>
      item.movieName.toLowerCase().includes(searchmovie.toLowerCase())
    );
    setsearchdata(filteredData);
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-900 to-violet-600 text-white">
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-wrap">
            <img src={movie} className="w-[25%] pl-4" />
            <h1 className="font-sedan text-3xl pl-12 py-8">Film Quest</h1>
          </div>
          <input
            type="text"
            name="movie_name"
            placeholder="Find your movie"
            className="h-16 p-6 m-6 w-[50%] rounded-md text-black"
            value={searchmovie}
            onChange={(e)=> {
                setsearchmovie(e.target.value)
                handlesearch()}}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full">
        {searchdata.map((data, index) => (
          <MovieCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Main;
