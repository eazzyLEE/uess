interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  error?: string;
  label?: string;
}

export function Select({ options, error, label, ...props }: SelectProps) {
  const isPlaceholderValue = props.value === ""
  const textColor = isPlaceholderValue ? "text-gray-400" : "text-black"

  return (
    <div>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <select
        {...props}
        className={`w-full p-2 border ${textColor} rounded-md ${error ? 'border-red-500' : 'border-gray-300'}`}
      >
        <option value="" disabled selected>Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
} 