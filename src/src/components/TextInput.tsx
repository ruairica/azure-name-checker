import { useState, type SetStateAction } from 'react';


interface TextInputProps {
  searchString: string;
}
const TextInput: React.FC<TextInputProps> = ({ searchString }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setValue(e.target.value);
  };

  const containsSearchString = value.includes(searchString);
  const inputBackgroundColor = !(!!value)  ?  'bg-white' : containsSearchString ? 'bg-green-200' : 'bg-red-200';

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter resource name"
        className={`w-full p-1 py-2 mt-6 pl-3 pr-10 text-sm rounded-md leading-5 text-gray-900 focus:ring-0 ${inputBackgroundColor}`}

      />
      <p>search string : { inputBackgroundColor }</p>
      <p>Value: {value}</p>
            {containsSearchString && <p>It contains</p>}

    </div>
  );
};

export default TextInput;