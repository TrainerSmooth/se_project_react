import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import AddItemModal from "../AddItemModal/AddItemModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [clothingItems, setClothingItems] = useState([]); // List of clothing items

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
    setSelectedCard(null);
  };

  const openDeleteModal = (card) => {
    setSelectedCard(card);
    setActiveModal("delete");
  };

  const handleDeleteCard = (cardId) => {
    if (!cardId) return;

    // Remove the item from the clothing list
    setClothingItems((prevItems) =>
      prevItems.filter((item) => item.id !== cardId)
    );

    // Close modal after deletion
    closeActiveModal();
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <Main weatherData={weatherData} onCardClick={handleCardClick} />
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* Item Modal */}
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
        setActiveModal={setActiveModal}
        onOpenDelete={openDeleteModal} // Pass function to open delete modal
      />

      {/* Delete Confirmation Modal */}
      {activeModal === "delete" && (
        <DeleteModal
          isOpen={true}
          onClose={closeActiveModal}
          card={selectedCard} // Pass the selected card
          handleDeleteCard={handleDeleteCard} // Pass delete function
        />
      )}
    </div>
  );
}

export default App;
