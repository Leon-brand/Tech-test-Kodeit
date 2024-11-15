import { useState } from "react";

const Form = ({ onFormSubmit }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  //const [checkboxValues, setCheckboxValues] = useState([]);
  const [responses, setResponses] = useState({
    reactivo1: { 'Sí': false, 'No': false, 'No Aplica': false },
    reactivo2: { 'Sí': false, 'No': false, 'No Aplica': false },
    //reactivo3: { 'Sí': false, 'No': false, 'No Aplica': false },
    //reactivo4: { 'Sí': false, 'No': false, 'No Aplica': false },
  });
  const [selectedOption, setSelectedOption] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');

/*   const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setCheckboxValues((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  }; */
  const handleCheckboxChange = (reactivo, option) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [reactivo]: {
        ...prevResponses[reactivo],
        [option]: !prevResponses[reactivo][option],  // Alternar entre true/false
      },
    }));
  };

/*   const handleSubmit = () => {
    const formData = {
      selectedImage,
      checkboxValues,
      selectedOption,
      textAreaValue,
    };
    onFormSubmit(formData);
  }; */
  const handleSubmit = () => {
    const formData = {
      selectedImage,
      reactivo1: Object.keys(responses.reactivo1).filter(option => responses.reactivo1[option]),
      reactivo2: Object.keys(responses.reactivo2).filter(option => responses.reactivo2[option]),
      //reactivo3: Object.keys(responses.reactivo3).filter(option => responses.reactivo3[option]),
      //reactivo4: Object.keys(responses.reactivo4).filter(option => responses.reactivo4[option]),
      selectedOption,
      textAreaValue,
    };
    onFormSubmit(formData); // Enviar los datos al componente principal
  };

  return (
    <div className="form-container">
      {/* Imagen */}
      <div className="first-block-container">
        <div>
          <label htmlFor="options"></label>
          <select
            id="options"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Expediente Crédito">Expediente Crédito</option>
            <option value="Expediente Captación">Expediente Captación</option>
          </select>
        </div>
        <div className="button-container">
          {['Identificacion', 'Comprobante', 'Propiedad', 'Contrato', 'Contacto', 'Fotografia'].map((id) => (
            <button key={id} className="image-btn" onClick={() => setSelectedImage(id)}>
              {id}
            </button>
          ))}
        </div>
      </div>
        {selectedImage && <img className="selected-image" src={`/images/${selectedImage}.jpg`} alt={selectedImage}/>}  

      {/* Checkbox */}
      <div className="checkbox-container">
        <div>
          <p><strong>Seleciona tus respuestas de acuerdo a lo que ves en las fotografias</strong></p>
          <label className="gray-font">¿La digitalización de la ID está a color?  </label>
          {['Sí', 'No', 'No aplica'].map((option) => (
            <label key={option} className="checkbox-label">
              <input
                type="checkbox"
                checked={responses.reactivo1[option]}
                onChange={() => handleCheckboxChange('reactivo1', option)}
              />
              {option}
            </label>
          ))}<br/>
         
          <label className="gray-font">¿Los datos en ambas ID, expediente y digitalizada coinciden?  </label>
          {['Sí', 'No', 'No aplica'].map((option) => (
            <label key={option}className="checkbox-label">
              <input
                type="checkbox"
                checked={responses.reactivo2[option]}
                onChange={() => handleCheckboxChange('reactivo2', option)}
              />
              {option}
            </label>
          ))}
        </div>        
      </div>

      <h2>Aqui van lo links</h2>

      <div className="checkbox-container">
        <div>
          <p><strong>Seleciona tus respuestas de acuerdo a lo que ves en las fotografias</strong></p>
          <label className="gray-font">¿La digitalización de la ID está a color?  </label>
          {['Sí', 'No', 'No aplica'].map((option) => (
            <label key={option} className="checkbox-label">
              <input
                type="checkbox"
                checked={responses.reactivo1[option]}
                onChange={() => handleCheckboxChange('reactivo1', option)}
              />
              {option}
            </label>
          ))}<br/>
         
          <label className="gray-font">¿Los datos en ambas ID, expediente y digitalizada coinciden?  </label>
          {['Sí', 'No', 'No aplica'].map((option) => (
            <label key={option}className="checkbox-label">
              <input
                type="checkbox"
                checked={responses.reactivo2[option]}
                onChange={() => handleCheckboxChange('reactivo2', option)}
              />
              {option}
            </label>
          ))}
        </div>        
      </div>

    <div className="last-block-container">
      <label><strong>RESPUESTA DE SOLICITUD</strong></label>
      {/* Select */}
      <div className="select-container">
        <label htmlFor="options"></label>
        <select
          id="options"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="">--Select--</option>
          <option value="Option A">Option A</option>
          <option value="Option B">Option B</option>
          <option value="Option C">Option C</option>
        </select>
      </div>

      {/* Textarea */}
      <div className="textarea-container">
        <label htmlFor="message">Your message:</label>
        <textarea
          id="message"
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.target.value)}
        />
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Finalizar
      </button>  
      </div>    
    </div>
  );
};

export default Form;
