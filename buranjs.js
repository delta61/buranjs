(function(){
	try {
		(function(){

			console.log(this.brn.a[0][0]);
			console.log(this.brn.a[0][1]);
			console.log(this.brn.a[0][2]['privacy_policy']['bottom_notice']);

		})();
	} catch (ba) {};
}).call(this);
