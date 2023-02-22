import React, {FC} from 'react';
import NavButton from "./NavButton";
import {authRoutes, publicRoutes} from "../../routes";

interface NavButtonsProps {

}

const NavButtons: FC<NavButtonsProps> = () => {

	const routes = {...publicRoutes, ...authRoutes}

	console.group("1")
	console.log(publicRoutes)
	console.log(authRoutes)
	console.log(routes)
	console.groupEnd()

	const entriesFromAppRoute = Object.entries(routes)
	console.log("entriesFromAppRoute", entriesFromAppRoute);

	return (
		<div>

			<ul className={``}>
				{entriesFromAppRoute.map((element, index) =>
					<>
						{console.log(`element=`,element)}
						{element[1].nav &&
            <NavButton key={element + index.toString()}
                       element={element[1]}
            />
						}
					</>
				)}
			</ul>

		</div>
	);
};

export default NavButtons;