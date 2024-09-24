import { FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";

const HotelCard = ({ hotel }) => {
  return (
    <div className="flex justify-center content-center flex-col flex-wrap">
      <img src={hotel.image} alt={hotel.name} />
      <button className="cursor-pointer"><FaRegHeart /></button>
      <h2>{hotel.name}</h2>
      <p>{hotel.description}</p>
      <p>{hotel.price}</p>
    </div>
  );
};

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default HotelCard;
