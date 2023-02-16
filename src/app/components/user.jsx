import React from 'react';
import Bookmark from './bookmark';
import Quality from './quality';

const User = ({
	_id,
	name,
	qualities,
	profession,
	completedMeetings,
	rate,
	bookmark,
	onDelete,
	onToggleBookmark,
}) => {
	return (
		<tr key={_id}>
			<td>{name}</td>
			<td>
				<Quality qualities={qualities} />
			</td>
			<td>{profession.name}</td>
			<td>{completedMeetings}</td>
			<td>{rate} /5</td>
			<td>
				<Bookmark onToggle={onToggleBookmark} id={_id} status={bookmark} />
			</td>
			<td>
				<button onClick={() => onDelete(_id)} className='btn btn-danger'>
					delete
				</button>
			</td>
		</tr>
	);
};

export default User;
