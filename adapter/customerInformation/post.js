
module.exports={
	name : name
}

function name(model){
	console.log(model);
	delete model.stage
	return model;
}
