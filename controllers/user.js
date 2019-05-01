const _ = require('lodash');

exports.get = (req,res,next) => {
    res.render("index");
}

exports.add = (req,res,next) => {

    	var jsonSource =  req.body.jsonSource;
		try{
			jsonSource = JSON.parse(jsonSource)
		}catch(err){}
		var jsonDestination = req.body.jsonDestination;
		try{
			jsonDestination = JSON.parse(jsonDestination)
		}catch(err){
		}
	
	var keyObj1 = Object.keys(jsonSource);
	var keyObj2 = Object.keys(jsonDestination);

	var result = _.difference(keyObj1,keyObj2);

	var	users = [];
	var users1 = [];
	var users2;
		
		_.forEach([result],function(keyObj1,keyObj2){
		if(jsonSource != 0){
		users.push(jsonSource);
		users2 = users;
	}
})

	var mapFunction = _.map(result,keyFunction => {

	users1.push(_.map(users2,arrFunction => {
   		object = {}
   		[keyFunction] = arrFunction[keyFunction] 
	 	return object
   })
   )
   		return users1
 })

 	var finalJson = JSON.stringify(mapFunction)
 	res.send(finalJson);
 	console.log(finalJson);

}




