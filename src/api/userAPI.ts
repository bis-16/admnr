import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email: string, password: string) => {
	const response = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
	console.log('reg>response=', response)
	localStorage.setItem('token', response.data.token)
	return jwtDecode(response.data.token)
	// return response
}
export const login = async (email: string, password: string) => {
	const response = await $host.post('api/user/login', {email, password})
	console.group()
		console.log('login>response=', response)
		console.log('login>response.status=', response.status)
		console.log('login>response.data=', response.data)
		console.log('login>response.data.token=', response.data.token)
		console.log('jwtDecode(response.data.token)=', jwtDecode(response.data.token))
	console.groupEnd()
	localStorage.setItem('token', response.data.token)
	return jwtDecode(response.data.token)
	// return response
}

export const check = async () => {
	const response = await $authHost.post('api/user/auth')
	console.log('check>response=', response)
	// return response
	localStorage.setItem('token', response.data.token)
	return jwtDecode(response.data.token)
}