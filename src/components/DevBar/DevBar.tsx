import React from 'react';
import s0 from '../../App.module.scss'
import {useAppSelector} from "../../hooks/useAppSelector";
import {RootState} from "../../store/store";

const DevBar = () => {
	const {user, isAuth} = useAppSelector((state: RootState) => state.profilePage)

	return (
		<div className={s0.wrapper__devbar}>
			<div>isAuth={isAuth}; user={user.userID + ` ` + user.userFName +` ` + user.userSName} {user.admin}</div>
		</div>
	);
};

export default DevBar;