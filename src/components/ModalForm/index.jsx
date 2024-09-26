import { useState, useEffect } from "react";
import Modal from "react-modal";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "90vh",
  },
};

const ModalForm = ({ addHotel, editHotel, editingHotel, setEditingHotel }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    additionalImages: [],
    city: "",
    state: "",
    rating: "",
    price: "",
    description: "",
    services: "",
  });

  const handleAdditionalImagesChange = (e) => {
    const { value } = e.target;
    const additionalImagesArray = value.split(",").map((img) => img.trim());
    setFormData((prevData) => ({
      ...prevData,
      additionalImages: additionalImagesArray,
    }));
  };

  useEffect(() => {
    if (editingHotel) {
      setFormData(editingHotel);
      openModal();
    }
  }, [editingHotel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingHotel) {
      editHotel(editingHotel.id, formData);
      const existingData = JSON.parse(localStorage.getItem("hotels")) || [];
      const updatedData = existingData.map((hotel) =>
        hotel.id === editingHotel.id ? { ...hotel, ...formData } : hotel
      );
      localStorage.setItem("hotels", JSON.stringify(updatedData));
    } else {
      const hotelKey = { ...formData, id: uuidv4() };
      console.log("Form Data:", hotelKey);
      const existingData = JSON.parse(localStorage.getItem("hotels")) || [];
      existingData.push(hotelKey);
      localStorage.setItem("hotels", JSON.stringify(existingData));
      addHotel(hotelKey);
    }

    setFormData({
      name: "",
      image: "",
      city: "",
      state: "",
      rating: "",
      price: "",
      description: "",
      services: "",
    });
    closeModal();
    setEditingHotel(null);
  };

  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="flex flex-row-reverse p-5">
      {!editingHotel && (
        <IoMdAddCircle
          onClick={openModal}
          className="text-6xl text-blue-500 cursor-pointer"
        />
      )}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Hotel Modal"
      >
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-full sm:max-w-lg mx-auto dark:bg-slate-200">
          <div className="flex justify-between items-center mb-4">
            <h2
              ref={(_subtitle) => (subtitle = _subtitle)}
              className="text-2xl font-semibold"
            >
              {editingHotel ? "Editar Hotel" : "Criação de Hotel"}
            </h2>
            <IoIosCloseCircleOutline
              onClick={closeModal}
              className="text-2xl text-red-500 cursor-pointer"
            />
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome do Hotel
              </label>
              <input
                type="text"
                placeholder="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-100"
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Imagem principal
              </label>
              <input
                type="text"
                placeholder="Imagem"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-100"
              />
            </div>
            <div>
              <label
                htmlFor="additionalImages"
                className="block text-sm font-medium text-gray-700"
              >
                Imagens adicionais (separadas por vírgula)
              </label>
              <input
                type="text"
                placeholder="URLs de imagens adicionais"
                name="additionalImages"
                value={formData.additionalImages?.join(", ") || ""}
                onChange={handleAdditionalImagesChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-100"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cidade
                </label>
                <input
                  type="text"
                  placeholder="Cidade"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-100"
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  Estado
                </label>
                <input
                  type="text"
                  placeholder="Estado"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-100"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700"
              >
                Classificação
              </label>
              <input
                type="number"
                placeholder="Classificação"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
                min="0"
                max="10"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-100"
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Preço
              </label>
              <input
                type="number"
                placeholder="Preço"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-100"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Descrição
                </label>
                <input
                  type="text"
                  placeholder="Descrição"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="services"
                  className="block text-sm font-medium text-gray-700"
                >
                  Serviços
                </label>
                <input
                  type="text"
                  placeholder="Serviços"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {editingHotel ? "Editar" : "Adicionar"}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

ModalForm.propTypes = {
  addHotel: PropTypes.func.isRequired,
  editHotel: PropTypes.func.isRequired,
  editingHotel: PropTypes.object,
  setEditingHotel: PropTypes.func.isRequired,
};

export default ModalForm;
