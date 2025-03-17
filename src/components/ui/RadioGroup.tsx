interface RadioGroupProps {
  options: { label: string; value: string }[];
  name: string;
  error?: string;
  onChange: (value: string) => void;
  value: string;
  label?: string;
}

export function RadioGroup({ options, name, error, onChange, value, label }: RadioGroupProps) {
  return (
    <div>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="flex gap-4">
        {options.map((option) => (
          <label key={option.value} className="flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="mr-2"
            />
            {option.label}
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
} 