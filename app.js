function start() {
	$("input").change(function(){
		var red = $("#redInput").val();
		var green = $("#greenInput").val();
		var blue = $("#blueInput").val();
		var a = $("#alphaInput").val();
		console.log(red);
		console.log(green);
		console.log(blue);
		console.log(a);
		$("body").css("background-color","rgba("+red+","+green+","+blue+","+a+")"); 
		$("#RGB").html(+red+","+green+","+blue);
		$("#diese").html("#"+a);
		
	});
};
start();