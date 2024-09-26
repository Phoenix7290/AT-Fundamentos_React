import Header from "../../components/Header";
import HotelCard from "../../components/HotelCard";
import Footer from "../../components/Footer";

import { useState, useEffect } from "react";

const Favoritos = () => {
  const [hotelsData, setHotelsData] = useState([]);

  useEffect(() => {
    const storedHotelsData = JSON.parse(localStorage.getItem("hotels")) || [];
    setHotelsData(storedHotelsData.filter(hotel => hotel.isFavorite));
  }, []);

  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen">
      <Header />
      <main className="md:flex flex:row gap-10 justify-center content-center mb-7 mt-7 flex-wrap p-1.5">
        {hotelsData.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Favoritos;
