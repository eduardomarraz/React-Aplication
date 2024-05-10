import React, { useState, useEffect } from 'react';

function Editar({ index, initialValue, onEdit }) {
  const [text, setText] = useState(initialValue);

  useEffect(() => {
    // Almacenar el valor del input en el localStorage
    localStorage.setItem("editText", JSON.stringify(text));
  }, [text]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onEdit(index, text);
  };

return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Agregar nueva tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="submit-button">Editar</button>
    </form>
  );
}

export default Editar;
