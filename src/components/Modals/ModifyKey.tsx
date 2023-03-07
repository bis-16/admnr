import * as React from "react";
import {FC, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {useAppSelector} from "../../hooks/useAppSelector";
import {RootState} from "../../store/store";
import {createKey, createSoft, fetchKeys, fetchSofts} from "../../api/keyAPI";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setKeys, setSoft} from "../../store/reducers/keys-reducer";
import {Isoftware} from "../../types/data";
import s0 from "../../App.module.scss";

interface ModifyKeyProps {
	show: boolean,
	onHide: () => void,
}

const ModifyKey: FC<ModifyKeyProps> = ({show, onHide}) => {

	const dispatch = useAppDispatch()
	const keys = useAppSelector((state: RootState) => state.keysPage)


	const {activeKey} = useAppSelector((state: RootState) => state.keysPage)


	// const [selectedType, setSelectedType] = useState<Itype>({id: 0, name: "Выберите тип"})
	// const [selectedBrand, setSelectedBrand] = useState<Ibrand>({id: 0, name: "Выберите брэнд"})
	const [selectedSoft, setSelectedSoft] = useState<Isoftware>({id: 0, name: "Выберите ПО", version: "0",})

	// const [info, setInfo] = useState([])
	const [key, setKey] = useState<string>('')
	const [fName, setFName] = useState<string>()
	const [sName, setSName] = useState<string>()
	const [lName, setLName] = useState<string>()
	const [sbNum, setSbNum] = useState<string>()
	const [invNum, setInvNum] = useState<string>()
	const [inDate, setInDate] = useState<string>()
	const [outDate, setOutDate] = useState<string>()
	// const [price, setPrice] = useState<number>(0)
	// const [file, setFile] = useState<HTMLInputElement | null>(null)


	useEffect(() => {
		console.log("!!>!CreateKey.useEffect")
		fetchSofts().then(value => {
			dispatch(setSoft(value))
		})
		// fetchBrands().then(value => {
		// 	dispatch(setBrands(value))
		// })
	}, [])

	// const addInfo = () => {
	// 	// @ts-ignore
	// 	setInfo([...info, {title: "", description: "", number: Date.now()}])
	// }
	// const removeInfo = (number: number) => {
	// 	setInfo(info.filter(i => i.number !== number))
	// }
	// const changeInfo = (key: string, value: string, number: number) => {
	// 	// пробегаемся по массиву информации
	// 	// если номер совпадает с номером итерации
	// 	// тогда возвращаем объект, разворачиваем в него характеристику и по ключу заменяем в нём поле
	// 	// т.е. если ключ у нас был title, то мы заменяем его на новое значение
	// 	// в ином случае, если номер не совпадает, то возвращаем объект неизмененным
	// 	setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
	// }

	const addKey = () => {
		// console.log(info)
		console.log('selectedSoft.id=', selectedSoft.id)

		const formData = new FormData()
		// formData.append('name', name)
		formData.append('key', key)
		formData.append('fName', fName)
		formData.append('sName', sName)
		formData.append('lName', lName)
		formData.append('sbNum', sbNum)
		formData.append('inDate', inDate)
		formData.append('outDate', outDate)
		// formData.append('price', `${price}`)
		// formData.append('img', file)
		// formData.append('typeId', selectedTypeID)
		// formData.append('typeId', selectedType.id)
		// formData.append('brandId', selectedBrand.id)
		// @ts-ignore
		formData.append('softId', selectedSoft.id)
		// formData.append('info', JSON.stringify(info)) //массив низзя т.к. или строка или блоб. на сервере парсится обратно

		createSoft(formData).then(data => onHide())
	}

	// const selectFile = (e: React.ChangeEvent) => {
	// 	console.log("e.target", e.target)
	// 	// const target = e.target as HTMLInputElement
	// 	// console.log("e.target.files",target.files)
	//
	// 	setFile(e.target.files[0])
	// }


	return (
		<>
			{activeKey ?
				<Modal
					size={"lg"}
					centered
					show={show}
					onHide={onHide}
					className={s0.modal}
				>
					<Modal.Header closeButton>
						<Modal.Title id={"contained-modal-title-vcenter"}>
							Редактировать запись
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Dropdown className={"mt-3"}>
								<Dropdown.Toggle>{activeKey.software.id}. {activeKey.software.name}</Dropdown.Toggle>
								<Dropdown.Menu>
									{keys.softwares.map(soft =>
										<Dropdown.Item
											onClick={() => {
												console.log("selectedSoft.0=", selectedSoft)
												console.log("soft=", soft)
												setSelectedSoft({id: soft.id, name: soft.name, version: soft.version})
												console.log("selectedSoft.1=", selectedSoft)
											}
											}>
											{soft.name}
										</Dropdown.Item>
									)}
								</Dropdown.Menu>
							</Dropdown>

							<Form.Label className={""}>Введите ключ</Form.Label>
							<Form.Control
								placeholder={"Введите ключ:"}
								value={activeKey.key}
								onChange={e => setFName(e.target.value)}
							/>
							<Form.Label className={""}>Введите имя пользователя</Form.Label>
							<Form.Control
								placeholder={"Введите имя:"}
								value={activeKey.userFName}
								onChange={e => setFName(e.target.value)}
							/>
							<Form.Label className={""}>Введите отчество пользователя</Form.Label>
							<Form.Control
								placeholder={"Введите отчество:"}
								value={activeKey.userMName}
								onChange={e => setSName(e.target.value)}
							/>
							<Form.Label className={""}>Введите фамилию пользователя</Form.Label>
							<Form.Control
								placeholder={"Введите фамилию:"}
								value={activeKey.userLName}
								onChange={e => setLName(e.target.value)}
							/>
							<Form.Label className={""}>Введите порядковый номер устройства (SB***)</Form.Label>
							sb
							<Form.Control
								placeholder={"Введите порядковый номер устройства (SB***)"}
								type={"number"}
								value={sbNum}
								onChange={e => setSbNum(e.target.value)}
							/>
							<Form.Control
								placeholder={"Введите инвентарный номер устройства"}
								type={"number"}
								value={invNum}
								onChange={e => setInvNum(e.target.value)}
							/>
							<hr/>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
						<Button variant={"outline-success"} onClick={addKey}>Добавить</Button>
					</Modal.Footer>
				</Modal>
				: ''
			}
		</>
	);
};

export default ModifyKey;