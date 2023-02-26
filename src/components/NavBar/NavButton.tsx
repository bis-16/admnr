import React, {FC} from 'react';
import NavButton1 from "./NavButton";
import {NavLink} from "react-router-dom";
import s0 from '../../App.module.scss'
import s from './NavBar.module.scss'

interface NavButtonProps {
	element: {
		path: string;
		name: string;
	}
}

const NavButton: FC<NavButtonProps> = ({element}) => {

	const setActive = (active: any) => active.isActive                                                            //!any
		? `${s.button_active} ${s0.fontPanton}`
		: `${s.button} ${s0.fontPanton}`

	return (
		<li className={`${s.item}`}>
			<NavLink className={setActive}
							 to={element.path}
			>
				{element.name}
			</NavLink>
		</li>
	);
};

export default NavButton;