(function($) {
    var error = false;
    var persons= new Array();

    $("#btnSend").click(function(event){
    	$(".table").css({"border" : "10px solid #000"});
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
                $("#errDate").html("Invalid birth date");
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
                    $("#errDate").html("Invalid birth date");
            });

            $("#compareDate").change(function(){
                var cDate = $(this).val();
                if(cDate < val)
                    $("#errDate").html("");
                else
                    $("#errDate").html("Invalid birth date");
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
                persons.push(person);
                printTable();
            };
            data();

            function printTable(){
                if(persons.length>0){
                    var divTable=$('.table');
                    divTable.empty();
                    var table=$("<table/>");
                    var line=$("<tr/>");
                    var col1=$("<th/>");
                    $(col1).append('First name');
                    var col2=$("<th/>");
                    $(col2).append('Last name');
                    var col3=$("<th/>");
                    $(col3).append('Date of birth');
                    var col4=$("<th/>");
                    $(col4).append('Gender');
                    var col5=$("<th/>");
                    $(col5).append('Delete');
                    line.append(col1);
                    line.append(col2);
                    line.append(col3);
                    line.append(col4);
                    line.append(col5);
                    table.append(line);
                    divTable.append(table);
                }

                persons.forEach(function(obj){
                  var line=$("<tr/>");
                  var col1=$("<td/>");
                  $(col1).append(obj.fname);
                  var col2=$("<td/>");
                  $(col2).append(obj.lname);
                  var col3=$("<td/>");
                  $(col3).append(obj.date);
                  var col4=$("<td/>");
                  $(col4).append(obj.gender);
                    line.append(col1);
                    line.append(col2);
                    line.append(col3);
                    line.append(col4);
                    line.append(col5);
                    table.append(line);
                    divTable.append(table);

                	if($("option[name='selectGender']:checked").val() == "") {
                		$("#table").find($("input[value='male']").empty());
                	}
                });
            }
        }
        error = false;

        (function getSelectedGender(){
             var selectedGender = $("option[name='selectGender']:checked").val();
        	console.log(selectedGender);
        })();

    });

    var wdth = $(".getSizeFromInput").css("width");
    $(".setSize").css({"width" : wdth});

    $("#btnShow").mouseenter(function(){
    	$(".table").stop().fadeIn(250);
    });
    $("#btnShow, #btnSend").mouseleave(function(){
    	$(".table").stop().fadeOut(250);
    });


})(jQuery);
