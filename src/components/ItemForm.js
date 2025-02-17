import React , { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategry, setItemCategory] = useState("Produce");
 
  function inputItemName(e){
    setItemName(e.target.value);
  }

  function inputItemCategory(e){
    setItemCategory(e.target.value);
  }
  
  function handleSubmit(event){
      event.preventDefault();
      const newItem = {
        id: uuid(),
        name: itemName,
        category: itemCategry,
      }
      onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={inputItemName}/>
      </label>

      <label>
        Category:
        <select name="category"  onChange={inputItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
