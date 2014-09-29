var productsSearch = [];
var products;

$(document).ready(function(){

	$.getJSON("data/products.json", function (data) {
		//products = data;
		$.each(JSON.parse(data), function(idx, obj) {
			console.log("teste");
		});

	});






	var productsBH = new Bloodhound({
		name: "Products",
		datumTokenizer: function (d) {
		return Bloodhound.tokenizers.whitespace(d.name);
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		local: products,
		limit: 10
	});

	productsBH.initialize();

	$("#searchbox").typeahead({
			minLength: 3,
			highlight: true,
			hint: false
		}, {
			name: "Bairros",
			displayKey: "name",
			source: productsBH.ttAdapter(),
			templates: {
			header: "<h4 class='typeahead-header'>Produtos</h4>"
			}
		});

});