

const Modal = ({ data }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Form Data</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <button className="close-btn" onClick={()=>{}}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
