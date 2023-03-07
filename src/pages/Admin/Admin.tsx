import React from 'react';
import {Button, Modal} from "react-bootstrap";
import adminPageButtonMaker from "./adminPageButtonMaker";

const Admin = () => {

	const Emp = <>
		{adminPageButtonMaker("Добавить абонента", true, console.log, "click emp add btn")}
		{adminPageButtonMaker("Удалить абонента", false, console.log, "click emp del btn")}
	</>
	const Service = <>
		{adminPageButtonMaker("Добавить услугу", true, console.log, "click service add btn")}
		{adminPageButtonMaker("Удалить услугу", false, console.log, "click service del btn")}
	</>


	return (
		<div>
			<h3 className={"mt-4"}>Сотрудники:</h3>
			{Emp}

			<h3 className={"mt-4"}>Услуги:</h3>
			{Service}

		</div>
	);
};

export default Admin;