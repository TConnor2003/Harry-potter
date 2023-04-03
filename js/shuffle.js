var table = [1, 5,];

table.forEach(function (item) {
	var div = document.getElementById(item);
	var buttons = div.getElementsByTagName("button");
	var arr = [];
	for (var i = 0; i < buttons.length; i++) {
		arr.push(buttons[i]);
	}
	arr.sort(function () {
		return 0.5 - Math.random();
	});
	for (var i = 0; i < arr.length; i++) {
		div.appendChild(arr[i]);
	}
});