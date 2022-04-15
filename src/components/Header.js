import { useContext, useState } from 'react';
import { InputContext } from '../App';
import SearchIcon from '../assets/icons/search-icon.svg';

function Header() {

  const [value, setValue] = useState("");
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleInputChange = e => setValue(e.target.value);
  
  const handleSubmit = () => { 
    setInputValue(value);
    setValue("");
  }

  const handleKeyDown = e => { 
    if (e.key === "Enter") {
      setInputValue(value);
      setValue("");
    }
  }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("refresh prevented");
  // }

  return (
    <div className='flex flex-col justify-center items-center p-24'>
      <h1 className='text-5xl font-cardo font-bold text-gray-800 mb-6'>Dictionary</h1>
        <div className='flex bg-gray-100 p-3 w-96 rounded-md'>
          <img className='mr-3' src = { SearchIcon } alt="search icon"/>
        <input className='w-full text-gray-500 mr-3' type="text" onChange={ handleInputChange } onKeyDown={ handleKeyDown } value={ value } placeholder="search here" />
          <button className='text-gray-500' onClick={handleSubmit} >Search</button>
        </div>
    </div>
  )
}

export default Header;