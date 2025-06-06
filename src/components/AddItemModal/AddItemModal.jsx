import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, closeActiveModal }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleImageUrlChange = (e) => setImageUrl(e.target.value);
  const handleWeatherChange = (e) => setWeather(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form...");

    try {
      await onAddItem({ name, imageUrl, weather }); // Ensure the function completes
      console.log("Item added successfully. Attempting to close modal...");
      closeActiveModal(); // Call close function
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  console.log("Modal open state in AddItemModal:", isOpen);

  return (
    <ModalWithForm
      title="New garment"
      onClose={() => {
        console.log("Closing modal from ModalWithForm...");
        closeActiveModal();
      }}
      isOpen={isOpen}
      name="addgarment"
      onSubmit={handleSubmit}
    >
      <label htmlFor="additemmodal-name" className="modal__input_type_name">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="additemmodal-name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label
        htmlFor="additemmodal-imageUrl"
        className="modal__input_type_image"
      >
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="additemmodal-imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleImageUrlChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            name="radio-weather"
            className="modal__radio-input"
            value="hot"
            onChange={handleWeatherChange}
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            name="radio-weather"
            className="modal__radio-input"
            value="warm"
            onChange={handleWeatherChange}
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            name="radio-weather"
            className="modal__radio-input"
            value="cold"
            onChange={handleWeatherChange}
          />{" "}
          Cold
        </label>
      </fieldset>
      <button type="submit" className="modal__submit">
        Add garment
      </button>
    </ModalWithForm>
  );
};

export default AddItemModal;
