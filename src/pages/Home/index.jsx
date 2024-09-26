import { useState, useEffect } from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import HotelCard from "../../components/HotelCard";
import Footer from "../../components/Footer";
import ModalForm from "../../components/ModalForm";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [hotelsData, setHotelsData] = useState([]);
  const [editingHotel, setEditingHotel] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");

  useEffect(() => {
    const storedHotelsData = JSON.parse(localStorage.getItem("hotels")) || [];
    setHotelsData(storedHotelsData);
  }, []);

  const addHotel = (newHotel) => {
    const hotelWithId = { ...newHotel, id: uuidv4(), isFavorite: false };
    const updatedHotelsData = [...hotelsData, hotelWithId];
    setHotelsData(updatedHotelsData);
    localStorage.setItem("hotels", JSON.stringify(updatedHotelsData));
  };

  const editHotel = (hotelId, updatedHotelData) => {
    const updatedHotels = hotelsData.map((hotel) =>
      hotel.id === hotelId ? { ...hotel, ...updatedHotelData } : hotel
    );
    setHotelsData(updatedHotels);
    localStorage.setItem("hotels", JSON.stringify(updatedHotels));
  };

  const deleteHotel = (hotelId) => {
    const updatedHotels = hotelsData.filter((hotel) => hotel.id !== hotelId);
    setHotelsData(updatedHotels);
    localStorage.setItem("hotels", JSON.stringify(updatedHotels));
  };

  const handleEdit = (hotel) => {
    setEditingHotel(hotel);
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
  };

  const filteredHotels = hotelsData.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(searchTerm) ||
      hotel.city.toLowerCase().includes(searchTerm) ||
      hotel.state.toLowerCase().includes(searchTerm)
  );

  const sortedHotels = [...filteredHotels].sort((a, b) => {
    if (sortCriteria === "lowPrice") {
      return a.price - b.price;
    } else if (sortCriteria === "highPrice") {
      return b.price - a.price;
    } else if (sortCriteria === "lowRating") {
      return a.rating - b.rating;
    } else if (sortCriteria === "highRating") {
      return b.rating - a.rating;
    } else {
      return 0;
    }
  });

  const toggleFavorite = (hotelId) => {
    const updatedHotels = hotelsData.map((hotel) =>
      hotel.id === hotelId ? { ...hotel, isFavorite: !hotel.isFavorite } : hotel
    );
    setHotelsData(updatedHotels);
    localStorage.setItem("hotels", JSON.stringify(updatedHotels));
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} onSort={handleSort} />
      <main className="md:flex flex:row gap-10 justify-center content-center mb-7 mt-7 flex-wrap p-1.5">
        {sortedHotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            onEdit={handleEdit}
            onDelete={deleteHotel}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </main>

      <ModalForm
        addHotel={addHotel}
        editHotel={editHotel}
        editingHotel={editingHotel}
        setEditingHotel={setEditingHotel}
      />

      <Footer />
    </>
  );
}
