import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import HotelCard from "../../components/HotelCard";
import hotels from "../../data/hotels";
import Footer from "../../components/Footer";
import ModalForm from "../../components/Modal";

import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <SearchBar onSearch={(searchTerm) => console.log(searchTerm)} />
      <main className="md:flex flex:row gap-10 justify-center content-center mb-7 mt-7 flex-wrap p-1.5">
        {hotels.map((hotel) => (
          // <HotelCard key={hotel.id} hotel={hotel}/>
          <Link to={`/hotel/${hotel.id}`} key={hotel.id}>
            <HotelCard hotel={hotel} />
          </Link>
        ))}
      </main>
      <button>
        <ModalForm />
      </button>
      <Footer />
    </>
  );
}
