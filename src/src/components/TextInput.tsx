import { useState, type SetStateAction } from 'react'

interface TextInputProps {
  regx: string
}
const TextInput: React.FC<TextInputProps> = ({ regx }) => {
  const [value, setValue] = useState('')

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value)
  }

  const containsSearchString = new RegExp(regx, 'u').test(value)
  const inputBackgroundColor = !!!value
    ? 'bg-white'
    : containsSearchString
      ? 'bg-green-200'
      : 'bg-red-200'

  return (
    <div className="w-96">
      <input
        type="text"
        aria-label="Resource name"
        value={value}
        onChange={handleChange}
        placeholder="Insert name here"
        className={`w-full p-1 py-2 mt-1 pl-3 pr-10 text-sm rounded-md leading-5 text-gray-900 focus:ring-0 ${inputBackgroundColor}`}
      />
    </div>
  )
}

export default TextInput
