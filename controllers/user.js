
exports.get = (req,res,next) => {
    res.render("index");
}

exports.add = (req,res,next) => {

    	var jsonSource =  req.body.jsonSource;
		try{
			jsonSource = JSON.parse(jsonSource)
		}catch(err){

		}
		var jsonDestination = req.body.jsonDestination;
		try{
			jsonDestination = JSON.parse(jsonDestination)
		}catch(err){

		}

	
	var keyObj1 = Object.keys(jsonSource);
	var keyObj2 = Object.keys(jsonDestination);

	console.log(keyObj1);
	console.log(keyObj2);

	var valueObj1 = Object.values(jsonSource);
	var valueObj2 = Object.values(jsonDestination);

	
	if(keyObj1.length > keyObj2.length) { 
		var biggestKey = keyObj1.length;
		console.log('biggestKey1',biggestKey)
	} else {
		var biggestKey = keyObj2.length;
		console.log('biggestKey2',biggestKey)
	}

	for(var i=0; i<biggestKey; i++) {
		if(keyObj1[i] == keyObj2[i] && valueObj1[i] == valueObj2[i]) {
			res.send(valueObj2[i]);	
		} 
		else if(keyObj1[i] != keyObj2[i]) {
			res.send(keyObj1[i]);
			console.log(valueObj1[i]);
		}
		else {
			res.send(keyObj2[i]);
			console.log(valueObj2[i]);
		}
	}	

}

function json(sourceObj,destinationObj){
	var arr1=[];
	for(int i=0;keyObj1.length>0;i++){

	}
}