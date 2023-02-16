import React from 'react';

const Bookmark = ({ onToggle, status, id }) => {
	return (
		<button onClick={() => onToggle(id, status)}>
			<i className={'bi bi-bookmark' + (status ? '-fill' : '')}></i>
		</button>
	);
};

export default Bookmark;
