(function($) {
    var persons= new Array();

    $("#btnSend").click(function(event){
        var error = false;
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

            if(setDate.date > val || setDate.date == ""){
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
    
        if (error == false){
            $(".table").css({"border" : "10px solid #000"});
            data();
        }
    });

    function data(){
        var person = new Object();
        person.fname = $("#fName").val();
        person.lname = $("#lName").val();
        person.date = $("#compareDate").val();
        person.gender = $("input[name='gender']:checked").val();
        persons.push(person);
        printTable();
    }

    function printTable(){
        var divTable=$('.table');
        divTable.empty();
        var selectedGender = getSelectedGender();
        var checkedAge = isCheckedAge();
        var arr = new Array();

        persons.forEach(function(obj){
            if(selectedGender == 'm' && obj.gender == 'male')
                arr.push(obj);
            else if(selectedGender == "f" && obj.gender == "female")
                arr.push(obj);
            else if(selectedGender == "a")
                arr.push(obj);
        });

        if(arr.length>0){
            var table=$("<table/>");
            var line=$("<tr/>");
            var col1=$("<th/>");
            $(col1).append('First name');
            var col2=$("<th/>");
            $(col2).append('Last name');
            var col3=$("<th/>");
            if(checkedAge)
                $(col3).append("Age");
            else
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

        arr.forEach(function(obj){
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
            table.append(line);
            divTable.append(table);
        });
    }
    

    function getSelectedGender(){
         var selectedGender = $("option[name='selectGender']:checked").val();
         return selectedGender;
    }

    $("#selectGender").change(function(){
        printTable();
    });

    function isCheckedAge(){
        return $("#showAge").is(":checked");
    }   

    $("#showAge").change(function(){
        printTable();
    });

    var date1 = $("#compareDate").val();
    console.log(date1);

    var wdth = $(".getSizeFromInput").css("width");
    $(".setSize").css({"width" : wdth});

    $("#btnShow, .table").mouseenter(function(){
    	$(".table").stop().fadeIn(250);
    });
    $("#btnShow, #btnSend, .table").mouseleave(function(){
    	$(".table").stop().fadeOut(250);
    });


})(jQuery);
