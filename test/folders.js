require('dotenv').config({
	path: '../.env'
});

const fs = require('fs');
const SpringCM = require('../index');

SpringCM.auth.uatna11(process.env.SPRINGCM_CLIENT_ID, process.env.SPRINGCM_CLIENT_SECRET, (err, token) => {
	if (err) {
		return console.log('Auth error: ', err);
	}

	SpringCM.folder.root((err, folder) => {
		if (err) {
			return console.log(err);
		}

		SpringCM.folder.folders(folder, (err, folders) => {
			if (err) {
				return console.log(err);
			}
		});
	});
});
