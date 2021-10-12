import React, { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FAQItem = ({ question, answer }) => {
	const [isOpen, setisOpen] = useState(false);

	return (
		<>
			<button
				id='isInsured'
				className='faq__button'
				onClick={() => setisOpen((prevState) => !prevState)}>
				{question}
				<FontAwesomeIcon
					className={`faq__chevron ${isOpen ? 'faq__chevron_rotate' : ''}`}
					icon={faChevronDown}
				/>{' '}
			</button>
			<div className={`faq__item ${isOpen ? 'faq__item_show' : ''}`}>
				<p className='faq__description'>{answer}</p>
			</div>
		</>
	);
};

export default FAQItem;
