import axios from 'axios'
export const GET = (url, params) => {
	return new Promise((resolve, reject) => {
		axios.get(url, { params}).then(res => {
			resolve(res.data)
		})
	})
}