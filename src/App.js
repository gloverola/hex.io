import React, {useState} from 'react'
import Values from 'values.js';

// Import color components
import SingleColor from './components/SingleColor';

const App = () => {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  //Submit inputed color
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors)
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            error={error}
          />

          <button type='submit'>Submit</button>
          {error && <h2>Cant pass wrong value</h2>}
        </form>
        <input type='color' />
      </section>

      <section>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
