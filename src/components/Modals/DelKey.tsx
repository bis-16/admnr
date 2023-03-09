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
		<>
			{activeKey ?
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
							<div>{activeKey.fName}</div>
							<div>{activeKey.mName}</div>
							<div>{activeKey.lName}</div>
							<div>sb{activeKey.sb}</div>
							<div>{activeKey.inv}</div>
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
											onHide()
										}}
						>
							Не удалять
						</Button>
					</Modal.Footer>
				</Modal>
				: ''
			}
		</>
	);
};

export default DelKey;