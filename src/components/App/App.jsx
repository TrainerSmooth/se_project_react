import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import AddItemModal from "../AddItemModal/AddItemModal";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import UserContext from "../../utils/UserContext";
import { addItems, getItems, deleteCard } from "../../utils/api"; // Import API functions

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [clothingItems, setClothingItems] = useState([]); // Clothing items from API
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    console.log("Toggle switch clicked");
    setCurrentTemperatureUnit((prev) => (prev === "F" ? "C" : "F"));
  };

  console.log("Current Temperature Unit:", currentTemperatureUnit);

  // Fetch clothing items from the API on mount
  useEffect(() => {
    getItems()
      .then((items) => {
        console.log("Fetched items:", items);
        setClothingItems(items);
      })
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  const handleAddItem = (item) => {
    addItems(item)
      .then((newItem) => {
        setClothingItems((prevItems) => [...prevItems, newItem]);
      })
      .catch((err) => console.error("Error adding item:", err));
  };

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

    setClothingItems(
      (prevItems) => prevItems.filter((item) => item.id !== cardId) // Change id to _id if needed
    );

    deleteCard(cardId)
      .then(() => {
        console.log("Item deleted successfully", res);
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item.id !== cardId)
        );
        closeActiveModal();
      })
      .catch((err) => console.error("Error deleting item:", err));
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
    <UserContext.Provider value={{ name: "Your User Name" }}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <div className="page__content">
            <Header handleAddClick={handleAddClick} weatherData={weatherData} />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    currentTemperatureUnit={currentTemperatureUnit}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    clothingItems={clothingItems}
                    handleAddClick={handleAddClick}
                    onCardClick={handleCardClick}
                    selectedCard={selectedCard}
                    handleEditProfileModal={() => {}}
                    onCardLike={() => {}}
                    handleLogOutClick={() => {}}
                    isLoggedIn={true} // Ensure this is dynamically set if needed
                  />
                }
              />
            </Routes>
            <Footer />
          </div>
          <AddItemModal
            onClose={closeActiveModal}
            isOpen={activeModal === "add-garment"}
            onAddItem={handleAddItem}
            closeActiveModal={closeActiveModal}
          />
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
              handleDeleteCard={() => handleDeleteCard(selectedCard?.id)} // Pass delete function
            />
          )}
        </div>
        <ToggleSwitch />
      </CurrentTemperatureUnitContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
