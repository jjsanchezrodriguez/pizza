$(document).ready(function(){
	

	var precio = 11;
	topicsButton(".btn-green-peppers", ".green-pepper", ".js-green-pep");
	topicsButton(".btn-mushrooms", ".mushroom", ".js-mush");
	souceCrustButton(".sauce", "sauce-white", ".btn-sauce", ".js-sau");	
	souceCrustButton(".crust", "crust-gluten-free", ".btn-crust", ".js-gluten-fre");



	$(".btn-green-peppers").on("click",function(){
		topicsButton(".btn-green-peppers", ".green-pepper", ".js-green-pep");
		$("strong").html("$" + calculatePrice(".btn-green-peppers", 1));
	});

	$(".btn-mushrooms").on("click",function(){
		topicsButton(".btn-mushrooms", ".mushroom", ".js-mush");
		$("strong").html("$" + calculatePrice(".btn-mushrooms", 1));
	});

	$(".btn-pepperonni").on("click",function(){
		topicsButton(".btn-pepperonni", ".pep", ".js-pepp");
		$("strong").html("$" + calculatePrice(".btn-pepperonni", 1));
	});

	$(".btn-sauce").on("click",function(){
		souceCrustButton(".sauce", "sauce-white", ".btn-sauce", ".js-sau");
		$("strong").html("$" + calculatePrice(".btn-sauce", 3));
		
	});

	$(".btn-crust").on("click",function(){
		souceCrustButton(".crust", "crust-gluten-free", ".btn-crust", ".js-gluten-fre");
		$("strong").html("$" + calculatePrice(".btn-crust", 5));
	});

	function souceCrustButton(topic, classtopic, btntopic, jstopic){
		$(topic).toggleClass(classtopic);
		$(btntopic).toggleClass("active");
		$(jstopic).toggle();
	}


	function topicsButton(btntopic, topic, jstopic){
		$(btntopic).toggleClass("active");
		$(topic).toggle();
		$(jstopic).toggle();
	}


	function calculatePrice(tclass,amount){
		if(!$(tclass).hasClass("active"))
			amount*=-1;

		return precio += amount;
	}
});

