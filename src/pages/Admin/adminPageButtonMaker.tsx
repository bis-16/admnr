import {Button} from "react-bootstrap";
import * as React from "react";

const adminPageButtonMaker = (text: string,
															action: boolean, //true == add; false == remove
															callback: any,
															callbackValue: boolean | string) => {
	// console.log (value typeof(value))
	return <Button
		variant={action ? "outline-dark" : "danger"}
		// variant={"outline-dark"}
		className={"p-2 m-1"}
		onClick={() => {
			console.log(callbackValue)
			callback(callbackValue)
		}}
	>
		{text}
	</Button>
}

export default adminPageButtonMaker