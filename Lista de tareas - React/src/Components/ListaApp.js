import { useState } from "react";
import Lista from "./Lista";
import "./ListaApp.css";

export default function ListaApp() {
  const [title, setTitle] = useState("Banana");
  const [lista, setLista] = useState([]);

  function handleChange(e) {
    const value = e.target.value;

    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    const temp = [...lista];
    temp.unshift(newItem);

    setLista(temp);

    setTitle('');
  }

  function handleActualizar(id, value) {
    const temp = [...lista];
    const item = temp.find((item) => item.id == id);
    item.title = value;
    setLista(temp);
  }

  function handleDelete(id){
    const temp = lista.filter(item => item.id != id);

    setLista(temp);

  };

  return (
    <div className="ListaAppConteiner">
      <form className="ListaAppCreateForm" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="ListaAppInput"
          value={title}
        />
        <input
          onClick={handleSubmit}
          type="submit"
          Value="Create ListaApp"
          className="buttonCreate"
        ></input>
      </form>

      <div className="ListaConteiner">
        {lista.map((item) => (
          <Lista key={item.id} item={item} onUpdate={handleActualizar} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
