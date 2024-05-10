{"filter":false,"title":"Editar.js","tooltip":"/lista-de-tareas/src/components/Editar.js","undoManager":{"mark":24,"position":24,"stack":[[{"start":{"row":0,"column":0},"end":{"row":35,"column":24},"action":"insert","lines":["import React, { useState, useEffect } from 'react';"," ","function TodoForm({ onAdd }) {","const [text, setText] = useState(() => {","  // getting stored value","  const saved = localStorage.getItem(\"text\");","  const initialValue = JSON.parse(saved);","  return initialValue || \"\";","});"," ","  useEffect(() => {","    // almacenar el valor del input","    localStorage.setItem(\"text\", JSON.stringify(text));","  }, [text]);"," ","  const handleSubmit = (e) => {","    e.preventDefault();","    if (!text.trim()) return;","    onAdd(text);","    setText('');","  };"," ","  return (","    <form onSubmit={handleSubmit}>","      <input","        type=\"text\"","        placeholder=\"Agregar nueva tarea\"","        value={text}","        onChange={(e) => setText(e.target.value)}","      />","      <button type=\"submit\">Agregar</button>","    </form>","  );","}"," ","export default TodoForm;"],"id":1}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":17},"action":"remove","lines":["TodoForm"],"id":2},{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["E"]},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["d"]},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["i"]},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["t"]},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["a"]},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["r"]}],[{"start":{"row":35,"column":15},"end":{"row":35,"column":23},"action":"remove","lines":["TodoForm"],"id":3},{"start":{"row":35,"column":15},"end":{"row":35,"column":21},"action":"insert","lines":["Editar"]}],[{"start":{"row":20,"column":4},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":21,"column":0},"end":{"row":21,"column":2},"action":"insert","lines":["  "]},{"start":{"row":21,"column":2},"end":{"row":22,"column":0},"action":"insert","lines":["",""]},{"start":{"row":22,"column":0},"end":{"row":22,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":22,"column":2},"end":{"row":27,"column":4},"action":"insert","lines":["  const handleEditTodo = (index, newText) => {","    const newTodos = [...todos];","    newTodos[index] = newText;","    setTodos(newTodos);","    localStorage.setItem('todos', JSON.stringify(newTodos));","  };"],"id":5}],[{"start":{"row":22,"column":3},"end":{"row":22,"column":4},"action":"remove","lines":[" "],"id":6}],[{"start":{"row":23,"column":3},"end":{"row":23,"column":4},"action":"remove","lines":[" "],"id":7}],[{"start":{"row":22,"column":2},"end":{"row":22,"column":3},"action":"remove","lines":[" "],"id":8}],[{"start":{"row":23,"column":2},"end":{"row":23,"column":3},"action":"remove","lines":[" "],"id":9}],[{"start":{"row":30,"column":20},"end":{"row":30,"column":32},"action":"remove","lines":["handleSubmit"],"id":11},{"start":{"row":30,"column":20},"end":{"row":30,"column":34},"action":"insert","lines":["handleEditTodo"]}],[{"start":{"row":14,"column":0},"end":{"row":21,"column":2},"action":"remove","lines":[" ","  const handleSubmit = (e) => {","    e.preventDefault();","    if (!text.trim()) return;","    onAdd(text);","    setText('');","  };","  "],"id":12}],[{"start":{"row":0,"column":0},"end":{"row":35,"column":22},"action":"remove","lines":["import React, { useState, useEffect } from 'react';"," ","function Editar({ onAdd }) {","const [text, setText] = useState(() => {","  // getting stored value","  const saved = localStorage.getItem(\"text\");","  const initialValue = JSON.parse(saved);","  return initialValue || \"\";","});"," ","  useEffect(() => {","    // almacenar el valor del input","    localStorage.setItem(\"text\", JSON.stringify(text));","  }, [text]);","","  const handleEditTodo = (index, newText) => {","  const newTodos = [...todos];","    newTodos[index] = newText;","    setTodos(newTodos);","    localStorage.setItem('todos', JSON.stringify(newTodos));","  };"," ","  return (","    <form onSubmit={handleEditTodo}>","      <input","        type=\"text\"","        placeholder=\"Agregar nueva tarea\"","        value={text}","        onChange={(e) => setText(e.target.value)}","      />","      <button type=\"submit\">Agregar</button>","    </form>","  );","}"," ","export default Editar;"],"id":13},{"start":{"row":0,"column":0},"end":{"row":29,"column":0},"action":"insert","lines":["import React, { useState, useEffect } from 'react';","","function Editar({ index, initialValue, onEdit }) {","  const [text, setText] = useState(initialValue);","","  useEffect(() => {","    // Almacenar el valor del input en el localStorage","    localStorage.setItem(\"editText\", JSON.stringify(text));","  }, [text]);","","  const handleSubmit = (e) => {","    e.preventDefault();","    if (!text.trim()) return;","    onEdit(index, text);","  };","","  return (","    <form onSubmit={handleSubmit}>","      <input","        type=\"text\"","        value={text}","        onChange={(e) => setText(e.target.value)}","      />","      <button type=\"submit\">Guardar</button>","    </form>","  );","}","","export default Editar;",""]}],[{"start":{"row":26,"column":1},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":20}],[{"start":{"row":27,"column":0},"end":{"row":38,"column":0},"action":"insert","lines":["return (","  <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>","    <input","      type=\"text\"","      value={text}","      onChange={(e) => setText(e.target.value)}","      style={{ marginRight: '10px' }}","    />","    <button type=\"submit\">Guardar</button>","  </form>",");",""],"id":22}],[{"start":{"row":21,"column":49},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":23},{"start":{"row":22,"column":0},"end":{"row":22,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":22,"column":8},"end":{"row":22,"column":39},"action":"insert","lines":["style={{ marginRight: '10px' }}"],"id":24}],[{"start":{"row":27,"column":1},"end":{"row":39,"column":0},"action":"remove","lines":["","return (","  <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>","    <input","      type=\"text\"","      value={text}","      onChange={(e) => setText(e.target.value)}","      style={{ marginRight: '10px' }}","    />","    <button type=\"submit\">Guardar</button>","  </form>",");",""],"id":25}],[{"start":{"row":16,"column":0},"end":{"row":26,"column":4},"action":"remove","lines":["  return (","    <form onSubmit={handleSubmit}>","      <input","        type=\"text\"","        value={text}","        onChange={(e) => setText(e.target.value)}","        style={{ marginRight: '10px' }}","      />","      <button type=\"submit\">Guardar</button>","    </form>","  );"],"id":26},{"start":{"row":16,"column":0},"end":{"row":28,"column":0},"action":"insert","lines":["return (","  <form onSubmit={handleSubmit} className=\"form-container\">","    <input","      type=\"text\"","      placeholder=\"Agregar nueva tarea\"","      value={text}","      onChange={(e) => setText(e.target.value)}","      className=\"input-field\"","    />","    <button type=\"submit\" className=\"submit-button\">Guardar</button>","  </form>",");",""]}],[{"start":{"row":26,"column":0},"end":{"row":26,"column":9},"action":"remove","lines":["  </form>"],"id":27}],[{"start":{"row":24,"column":6},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":28},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":25,"column":4},"end":{"row":25,"column":13},"action":"insert","lines":["  </form>"],"id":29}],[{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"remove","lines":[" "],"id":30},{"start":{"row":25,"column":4},"end":{"row":25,"column":5},"action":"remove","lines":[" "]}],[{"start":{"row":16,"column":0},"end":{"row":28,"column":2},"action":"remove","lines":["return (","  <form onSubmit={handleSubmit} className=\"form-container\">","    <input","      type=\"text\"","      placeholder=\"Agregar nueva tarea\"","      value={text}","      onChange={(e) => setText(e.target.value)}","      className=\"input-field\"","    />","    </form>","    <button type=\"submit\" className=\"submit-button\">Guardar</button>","",");"],"id":31},{"start":{"row":16,"column":0},"end":{"row":28,"column":0},"action":"insert","lines":["return (","  <div className=\"form-container\">","    <input","      type=\"text\"","      placeholder=\"Agregar nueva tarea\"","      value={text}","      onChange={(e) => setText(e.target.value)}","      className=\"input-field\"","    />","    <button type=\"submit\" className=\"submit-button\" onClick={handleSubmit}>Guardar</button>","  </div>",");",""]}],[{"start":{"row":16,"column":0},"end":{"row":30,"column":1},"action":"remove","lines":["return (","  <div className=\"form-container\">","    <input","      type=\"text\"","      placeholder=\"Agregar nueva tarea\"","      value={text}","      onChange={(e) => setText(e.target.value)}","      className=\"input-field\"","    />","    <button type=\"submit\" className=\"submit-button\" onClick={handleSubmit}>Guardar</button>","  </div>",");","","","}"],"id":32},{"start":{"row":16,"column":0},"end":{"row":28,"column":1},"action":"insert","lines":["return (","    <form onSubmit={handleSubmit} className=\"form-container\">","      <input","        type=\"text\"","        placeholder=\"Agregar nueva tarea\"","        value={text}","        onChange={(e) => setText(e.target.value)}","        className=\"input-field\"","      />","      <button type=\"submit\" className=\"submit-button\">Guardar</button>","    </form>","  );","}"]}],[{"start":{"row":25,"column":54},"end":{"row":25,"column":61},"action":"remove","lines":["Guardar"],"id":33},{"start":{"row":25,"column":54},"end":{"row":25,"column":55},"action":"insert","lines":["E"]},{"start":{"row":25,"column":55},"end":{"row":25,"column":56},"action":"insert","lines":["d"]},{"start":{"row":25,"column":56},"end":{"row":25,"column":57},"action":"insert","lines":["i"]},{"start":{"row":25,"column":57},"end":{"row":25,"column":58},"action":"insert","lines":["t"]},{"start":{"row":25,"column":58},"end":{"row":25,"column":59},"action":"insert","lines":["a"]},{"start":{"row":25,"column":59},"end":{"row":25,"column":60},"action":"insert","lines":["r"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":31,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1715358439880,"hash":"b05e8cbdf4b3accad46d70d5fbd938d01ec91e9e"}