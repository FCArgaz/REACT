import { useState } from "react";

export default function Lista({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);
    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickActualizar() {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }

    return (
      <form className="ListaUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="ListaInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClickActualizar}>
          Actualizar texto
        </button>
      </form>
    );
  }

  function ListaElement() {
    return (
      <div className="ListaInfo">
        <span className="ListaTitle">{item.title}</span>
        <button className="button" onClick={() => setIsEdit(true)}>Editar</button>
        <button className="buttonDelete" onClick={(e) => onDelete(item.id)}>Delete</button>
      </div>
    );
  }

  return (
    <div className="lista">{isEdit ? <FormEdit /> : <ListaElement />}</div>
  );
}
