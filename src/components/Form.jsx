import { useState } from "react";

const Form = ({ onFormSubmit }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [responses, setResponses] = useState({
    DigitIDColor: { 'Sí': false, 'No': false, 'No Aplica': false },
    DatosCoinciden: { 'Sí': false, 'No': false, 'No Aplica': false },
    InfoConsultaVigente: { 'Sí': false, 'No': false, 'No Aplica': false },
    infoConsultaCoincideID: { 'Sí': false, 'No': false, 'No Aplica': false },
  });
  const [expediente, setExpediente] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [motivo, setMotivo] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleCheckboxChange = (reactivo, option) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [reactivo]: {
        ...prevResponses[reactivo],
        [option]: !prevResponses[reactivo][option],  // Alternar entre true/false
      },
    }));
  };
  const handleSubmit = () => {
    const formData = {
      selectedImage,
      DigitIDColor: Object.keys(responses.DigitIDColor).filter(option => responses.DigitIDColor[option]),
      DatosCoinciden: Object.keys(responses.DatosCoinciden).filter(option => responses.DatosCoinciden[option]),
      InfoConsultaVigente: Object.keys(responses.InfoConsultaVigente).filter(option => responses.InfoConsultaVigente[option]),
      infoConsultaCoincideID: Object.keys(responses.infoConsultaCoincideID).filter(option => responses.infoConsultaCoincideID[option]),
      expediente,
      respuesta,
      motivo,
      textAreaValue,
    };
    onFormSubmit(formData); //Enviar los datos al comonente principal
  };

  return (
    <div className="form-container">    
      <div className="first-block-container">
        <div>
          <select
            id="options"
            value={expediente}
            onChange={(e) => setExpediente(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Crédito">Expediente Crédito</option>
            <option value="Captación">Expediente Captación</option>
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
      <div className="checkbox-container">
        <div>
          <p><strong>Seleciona tus respuestas de acuerdo a lo que ves en las fotografias</strong></p>
          <label className="gray-font">¿La digitalización de la ID está a color?  </label>
          {['Sí', 'No', 'No aplica'].map((option) => (
            <label key={option} className="checkbox-label">
              <input
                type="checkbox"
                checked={responses.DigitIDColor[option]}
                onChange={() => handleCheckboxChange('DigitIDColor', option)}
              />
              {option}
            </label>
          ))}<br/>
         
          <label className="gray-font">¿Los datos en ambas ID, expediente y digitalizada coinciden?  </label>
          {['Sí', 'No', 'No aplica'].map((option) => (
            <label key={option}className="checkbox-label">
              <input
                type="checkbox"
                checked={responses.DatosCoinciden[option]}
                onChange={() => handleCheckboxChange('DatosCoinciden', option)}
              />
              {option}
            </label>
          ))}
        </div>        
      </div>
      <div className="first-block-container">
        <h4>Links externos</h4>
        <div className="links-container">
            <a href="##">INE</a>
            <a href="##">CURP</a>
            <a href="##">SEPOMEX</a>
            <a href="##">Otros</a>
        </div>
      </div>
      <div className="checkbox-container">
        <div>
          <p><strong>Seleciona tus respuestas de acuerdo al resultado de la búsqueda</strong></p>
          <label className="gray-font">¿La información de vuelta por tus consultas es vigente?  </label>
          {['Sí', 'No', 'No aplica'].map((option) => (
            <label key={option} className="checkbox-label">
              <input
                type="checkbox"
                checked={responses.InfoConsultaVigente[option]}
                onChange={() => handleCheckboxChange('InfoConsultaVigente', option)}
              />
              {option}
            </label>
          ))}<br/>
         
          <label 
            className="gray-font">
              ¿La información de vuelta por tus consultas coinciden con la ID del cliente?
          </label>
          {['Sí', 'No', 'No aplica'].map((option) => (
            <label key={option}className="checkbox-label">
              <input
                type="checkbox"
                checked={responses.infoConsultaCoincideID[option]}
                onChange={() => handleCheckboxChange('infoConsultaCoincideID', option)}
              />
              {option}
            </label>
          ))}
        </div>        
      </div>
      <div className="last-block-container">
        <div><h4>RESPUESTA DE SOLICITUD</h4></div>
        <div className="last-block-align">
          <label>Respuesta</label>        
          <div className="select-container">            
            <select
              id="options2"
              value={respuesta}
              onChange={(e) => setRespuesta(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Aprobada">Aprobada</option>
              <option value="Rechazada">Rechazada</option>
            </select>
          </div>
          <div className="textarea-container">            
            <textarea
              id="message"
              value={textAreaValue}
              placeholder="Observaciones ..."
              onChange={(e) => setTextAreaValue(e.target.value)}
            />
          </div>
        </div>
        <div className="last-block-align">
          <label>Motivo</label>
            <div className="select-container">            
            <select
              id="options3"
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Foto no coincide">Fotografía no coincide</option>
              <option value="Foto no valida">Fotografía borrosa o manipulada</option>
              <option value="Foto no visible">Fotografía no visible</option>
            </select>
          </div>
          <div>
            <button className="submit-btn" onClick={handleSubmit}>
              Finalizar
            </button> 
          </div>
        </div>  

      </div>    
    </div>
  );
};

export default Form;
