import React from 'react';
import s from './News.module.scss'

const Story = () => {
	return (
		<div className={s.wrapper__story}>
			<div className={s.story__title}>Story Title</div>
			<div className={s.story__text}>Text</div>
			<div className={s.story__date}>Date</div>
		</div>
	);
};

export default Story;