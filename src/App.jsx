import { useState } from 'react';

const Color = ({ color, selectedColor, setSelectedColor }) => {
  const isSelected = selectedColor === color;
  const classNames = `color-circle ${color} ${isSelected ? 'selected' : ''}`;

  return (
    <div 
    className={`color-circle ${color}`} onClick={() => setSelectedColor(color)}
    ></div>
  );
};
const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>

      <div id="colors-list">
        <Color color="orange" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="red" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;