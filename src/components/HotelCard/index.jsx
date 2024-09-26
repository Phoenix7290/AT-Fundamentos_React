import { FaRegHeart,FaHeart } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HotelCard = ({ hotel, onEdit, onDelete, onToggleFavorite }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4" id={hotel.id}>
      <Link to={`/details/${hotel.id}`}>
        <img className="w-full h-48 object-cover" src={hotel.image} alt={hotel.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{hotel.name}</div>
          <p className="text-gray-700 text-base">{hotel.city}, {hotel.state}</p>
          <p className="text-gray-700 text-base">Rating: {hotel.rating}</p>
          <p className="text-gray-700 text-base">Price: ${hotel.price}</p>
          <p className="text-gray-700 text-base mt-2">{hotel.description}</p>
          <p className="text-gray-700 text-base mt-2">{hotel.services}</p>
        </div>
      </Link>
      <div className="px-6 py-4 flex justify-between items-center border-t">
        {hotel.isFavorite ? (
          <FaHeart 
            className="cursor-pointer text-2xl text-red-500 hover:text-red-700" 
            onClick={() => onToggleFavorite(hotel.id)}
          />
        ) : (
          <FaRegHeart 
            className="cursor-pointer text-2xl text-red-500 hover:text-red-700" 
            onClick={() => onToggleFavorite(hotel.id)} 
          />
        )}
        <FaRegEdit 
          className="cursor-pointer text-2xl text-blue-500 hover:text-blue-700" 
          onClick={() => onEdit(hotel)} 
        />
        <CiCircleRemove 
          className="cursor-pointer text-2xl text-gray-500 hover:text-gray-700" 
          onClick={() => onDelete(hotel.id)} 
        />
      </div>
    </div>
  );
};

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    services: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default HotelCard;
