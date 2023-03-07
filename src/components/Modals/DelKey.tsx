import React, {FC, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import s0 from "../../App.module.scss"
import {Ikey} from "../../types/data";
import {useAppSelector} from "../../hooks/useAppSelector";
import {RootState} from "../../store/store";

interface DelKeyProps {
	show: boolean,
	onHide: () => void,
}

const DelKey: FC<DelKeyProps> = ({show, onHide}) => {
	const {activeKey} = useAppSelector((state: RootState) => state.keysPage)
	console.log("DelKey>activeKey=", activeKey)

	return (
		<Modal size={"lg"}
					 centered
					 show={show}
					 onHide={onHide}
					 className={s0.modal}
		>
			<Modal.Header closeButton>
				<Modal.Title id={"contained-modal-title-vcenter"}>
					Подтвердите удаление
				</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<div>
					<div>Вы уверены, что хотите удалить следующую запись?</div>
					<div>{activeKey.key}</div>
					<div>{activeKey.userFName}</div>
					<div>{activeKey.userMName}</div>
					<div>{activeKey.userLName}</div>
					<div>sb{activeKey.sb}</div>
					<div>{activeKey.inventory}</div>
				</div>
			</Modal.Body>

			<Modal.Footer>
				<Button variant={"outline-danger"}
								onClick={() => {
								}}
				>
					Удалить
				</Button>
				<Button variant={"outline-success"}
								onClick={() => {
								}}
				>
					Не удалять
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default DelKey;