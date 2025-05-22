import React from 'react';

export const ProductOptionSelector = ({ options, selectedOptions, onOptionChange }: { options: Array<{ id: string; name: string; values: string[] }>; selectedOptions: Record<string, string>; onOptionChange: (optionId: string, value: string) => void }) => (
  <div className='product-options'>
    {options.map((option) => (
      <div key={option.id}>
        <label>{option.name}</label>
        <select value={selectedOptions[option.id] || ''} onChange={(e) => onOptionChange(option.id, e.target.value)}>
          {option.values.map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
      </div>
    ))}
  </div>
);