import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Loading = () => <FontAwesomeIcon className='loading' icon={faSpinner} />;

export default Loading;
