import * as React from "react";
import {FC, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createSoftare} from "../../api/keysAPI";

interface CreateDeviceProps {
	show: boolean,
	onHide: () => void,
}

const CreateSoft: FC<CreateDeviceProps> = ({show, onHide}) => {

	const [value, setValue] = useState<string>('')

	const addBrand = () => {
		createSoftare({name: value}).then(() => {
			setValue('')
			onHide()
		})
	}

	return (
		<Modal
			size={"lg"}
			centered
			show={show}
			onHide={onHide}
		>
			<Modal.Header closeButton>
				<Modal.Title id={"contained-modal-title-vcenter"}>
					Добавить фирму
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control placeholder={"Введите название ПО"}
						value={value}
						onChange={e => setValue(e.target.value)}
					/>

				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
				<Button variant={"outline-success"} onClick={addBrand}>Добавить</Button>
			</Modal.Footer>
		</Modal>
);
};

export default CreateSoft