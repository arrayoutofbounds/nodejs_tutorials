function placeAnOrder(orderid) {
	
	console.log("order id is " + orderid);

	cookAndDeliver(function(){
		console.log("delivered food for " + orderid);
	});

}

//simulate 5 second delay. i.e connect to db. callback is called once db finishes work so single js thread not wasted
function cookAndDeliver(callback){
	setTimeout(callback,5000); // 5 sec delay
}

placeAnOrder(1);

placeAnOrder(2);

placeAnOrder(3);

placeAnOrder(4);

placeAnOrder(5);

placeAnOrder(6);