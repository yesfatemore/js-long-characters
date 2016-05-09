	var arr = [];
	var million = Math.pow(10, 6);
	var longzero, maxzero = 0;
	for(var i = 0; i < million; i++){
		arr.push(Math.round(-1 + Math.random() * (1 - (-1))));
	};
	
	//alert(arr);
	
	for(num in arr){
		if(arr[num] == 0){
			longzero++;
		}else{ 
			if(longzero > maxzero){
				maxzero = longzero;				
			};
			longzero = 0;
		};
	};
	
	alert('Максимально кол-во совпадений подряд: ' + maxzero);
