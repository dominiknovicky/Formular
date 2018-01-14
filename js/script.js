(function($) {
	var error = false;

	$("#btn").click(function(event){
		var fName = $("#fName").val();
		if(fName.trim().length<2){
			$("#errfname").html("Invalid first name");
			error = true;
		}
		else {
			$("#errfname").html("");
		}

		var lName = $("#lName").val();
		if(lName.trim().length<2){
			$("#errlname").html("Invalid last name");
			error = true;
		}
		else {
			$("#errlname").html("");
		}

		$("#fName").keyup(function(){
			var fName = $("#fName").val();
			if(fName.trim().length>1){
				$("#errfname").html("");
			}
		});
		$("#lName").keyup(function(){
			var lName = $("#lName").val();
			if(lName.trim().length>1){
				$("#errlname").html("");
			}
		});


		(function compareDate(){

			var setDate = new Object();
			setDate.date = $("#compareDate").val();

			var date = new Date();
			var month = (date.getMonth()+1);
			if (month < 10){
				var val = date.getFullYear()+"-0"+(date.getMonth()+1)+"-"+date.getDate();
			}
			else{
				var val = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
			}

			if(setDate.date > val){
				$("#errDate").html("Invalid date");
				error = true;
			}
			else {
				$("#errDate").html("");
			}

			$("#compareDate").keyup(function(){
				var cDate = $(this).val();
				if(cDate < val){
					$("#errDate").html("");
				}
				else 
					$("#errDate").html("Invalid date");
			});

			$("#compareDate").change(function(){
				var cDate = $(this).val();
				if(cDate < val)
					$("#errDate").html("");
				else
					$("#errDate").html("Invalid date");
			});
		
		})();

		if(error === false){
			function data(){
				var person = new Object();
				person.fname = $("#fName").val();
				person.lname = $("#lName").val();
				person.date = $("#compareDate").val();
				person.gender = $("input[name='gender']:checked").val();
				console.log(person);
			};
			data();
		}
		error = false;

	});

	var wdth = $(".getSizeFromInput").css("width");
	$(".setSize").css({"width" : wdth});

})(jQuery);
