import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Details = () => {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const storedHotels = JSON.parse(localStorage.getItem("hotels")) || [];
    const selectedHotel = storedHotels.find((hotel) => hotel.id === hotelId);

    if (selectedHotel) {
      setHotel(selectedHotel);
      setSelectedImage(selectedHotel.image);
    }
  }, [hotelId]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen">
      <Header />
      <main className="p-5">
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src={selectedImage}
            alt={hotel.name}
          />
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">{hotel.name}</h1>
            <p className="text-gray-600 dark:text-gray-400">
              {hotel.city}, {hotel.state}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Rating: {hotel.rating}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Price: ${hotel.price}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              {hotel.description}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {hotel.services}
            </p>
          </div>

          {hotel.additionalImages && hotel.additionalImages.length > 0 && (
            <div className="p-4">
              <h2 className="text-xl font-semibold">Mais imagens</h2>
              <div className="flex space-x-2 mt-2">
                <img
                  className="w-20 h-20 object-cover cursor-pointer hover:opacity-80"
                  src={hotel.image}
                  alt={hotel.name}
                  onClick={() => handleImageClick(hotel.image)}
                />
                {hotel.additionalImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Additional image ${index + 1}`}
                    className="w-20 h-20 object-cover cursor-pointer hover:opacity-80"
                    onClick={() => handleImageClick(img)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Details;
