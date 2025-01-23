import { useEffect, useState } from "react";
import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";

function App() {
  // State management
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: null },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    imageUrl: "",
    weatherType: "",
  });

  // Handle card click
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  // Handle opening the add garment modal
  const handleAddClick = () => setActiveModal("add-garment");

  // Close any active modal
  const closeActiveModal = () => {
    setActiveModal("");
  };

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      weatherType: e.target.id,
    }));
  };

  // Fetch weather data on component mount
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setWeatherData({
          type: "unknown",
          temp: { F: "N/A" },
          city: "N/A",
        });
      });
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        {/* Pass weatherData and click handlers */}
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
      </div>

      {/* Modal for adding a garment */}
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        isOpen={activeModal === "add-garment"}
        onClose={closeActiveModal}
      >
        <label htmlFor="name" className="modal__label">
          Name
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
            value={formValues.imageUrl}
            onChange={handleInputChange}
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              id="hot"
              name="weatherType"
              type="radio"
              className="modal__radio-input"
              checked={formValues.weatherType === "hot"}
              onChange={handleRadioChange}
            />
            Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="warm"
              name="weatherType"
              type="radio"
              className="modal__radio-input"
              checked={formValues.weatherType === "warm"}
              onChange={handleRadioChange}
            />
            Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="cold"
              name="weatherType"
              type="radio"
              className="modal__radio-input"
              checked={formValues.weatherType === "cold"}
              onChange={handleRadioChange}
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>

      {/* Modal for previewing a selected card */}
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
      />

      <Footer />
    </div>
  );
}

export default App;
