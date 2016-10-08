function createCell() {
	var d = document.createElement("div");
	d.innerHTML = "<p class='p1'></p><p class='p2'></p>";
	d.setCellWithModel = function(model) {
	 	var p1 = d.querySelector(".p1");
	 	var p2 = d.querySelector(".p2");

		p1.innerHTML = model.name;
		p2.innerHTML = model.phone;
	}
	return d;
}