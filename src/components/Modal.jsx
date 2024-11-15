const Modal = ({ data }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Datos formulario</h2>
        <p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </p>        
        <button className="close-btn" onClick={()=>{ window.location.reload() }}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
