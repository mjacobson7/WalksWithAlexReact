import React from 'react';

const Select = ({ name, handleSelectChange, label, options, children }) => {
	return (
		<div
			style={{
				display: name === 'Title' ? 'none' : 'block',
			}}
			className='select'>
			<label className='select__label'>{label}</label>
			<select
				className='select__select'
				name={name}
				onChange={(e) => handleSelectChange(e)}>
				{options.values.map((value) => (
					<option
						className='select__option'
						key={value.value}
						value={value.value}>
						{value.value}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
