const _ = require('lodash');

exports.get = (req, res, next) => {
	res.render("index");
}

exports.differenceJson = (req, res) => {

	var jsonSource = req.body.jsonSource;
	try {
		jsonSource = JSON.parse(jsonSource)
	} catch (err) { }
	
	var jsonDestination = req.body.jsonDestination;
	try {
		jsonDestination = JSON.parse(jsonDestination)
	} catch (err) { }

	var keyObj1 = Object.keys(jsonSource);
	var keyObj2 = Object.keys(jsonDestination);

	var result = _.difference(keyObj1, keyObj2);

	var arrJson = [];
	var arrJson1 = [];
	var json;

	_.forEach([result], function (keyObj1, keyObj2) {
		if (jsonSource != 0) {
			arrJson.push(jsonSource);
			json = arrJson;
		}
	})

	var jsonFunction = _.map(result, keyFunction => {

		arrJson1.push(_.map(json, arrFunction => {
			object = {};
			object[keyFunction] = arrFunction[keyFunction];
			return object;
		})
		)
		return arrJson1;
	})

	var finalJson = JSON.stringify(jsonFunction)
	res.send(finalJson);
	console.log(finalJson)

}




