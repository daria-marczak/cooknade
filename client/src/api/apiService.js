import axios from 'axios';

const url = 'http://localhost:4000/api/recipes';

class apiService {
	static getRecipes() {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await axios.get(url);
				const data = response.data;
				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
}
