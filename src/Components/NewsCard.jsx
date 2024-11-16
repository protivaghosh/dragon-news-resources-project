import React from 'react';
import { FaEye } from "react-icons/fa";
import { BsStarFill, BsShareFill } from "react-icons/bs";

const NewsCard = (props={}) => {
  const {news} =props || {};
    return (
        <div className="card bg-base-100 shadow-xl mx-auto">
      <figure>
        <img
          src={news.thumbnail_url}
          alt="news Thumbnail"
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">{news.author.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
          <button className="ml-auto">
            <BsShareFill className="text-gray-500 hover:text-gray-700" />
          </button>
        </div>
        <h2 className="card-title text-lg font-bold">{news.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{news.details}</p>
        <button className="btn btn-link text-primary p-0 mt-2">Read More</button>
        <div className="card-actions justify-between mt-4">
          <div className="flex items-center text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <BsStarFill
                key={i}
                className={i < Math.floor(news.rating.number) ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {news.rating.number.toFixed(1)} ({news.rating.badge})
            </span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaEye className="mr-1" />
            <span className="text-sm">{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default NewsCard;
