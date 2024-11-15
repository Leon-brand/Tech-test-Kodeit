const Modal = ({ data }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Datos formulario</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>      
        <button 
          className="close-btn" 
          onClick={()=>{ window.location.href="https://www.linkedin.com/in/leonvelasco" }}>
            Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
