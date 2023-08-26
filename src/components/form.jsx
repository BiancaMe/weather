import { useState } from "react";
import '../styles/form.css';

const Form = ({onChangeCity}) => {
  const [city, setCity] = useState('');

  const onChange = (e) => {
    const value = e.target.value;
    if(value !== ''){
        setCity(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <div className="form-c">
        <h2 className="search-text">Search your City:</h2>
    <form onSubmit={handleSubmit}>
        <input type='text' onChange={onChange} />
        <button className="submit" type="submit">Search</button>
    </form>
    </div>
  )
}

export default Form;