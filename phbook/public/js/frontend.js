$(function() {

     var window1 = "";
     var bra = "<div id=\"active-area\" class=\"dynamic-area\">\n";
       var label1 = "<label class=\"label1\">Имя: </label><br>";
       var fname = "<input id=\"firstName\" type=\"text\" class=\"input1 input2\"><br>";
       var label2 = "<label class=\"label1\">Фамилия: </label><br>";
       var lname = "<input id=\"lastName\" type=\"text\" class=\"input1 input2\"><br>";
       var label3 = "<label class=\"label1\">Отчество: </label><br>";
       var sname = "<input id=\"secondName\" type=\"text\" class=\"input1 input2\"><br>";
       var label4 = "<label class=\"label1\">Телефон: </label><br>";
       var phone = "<input id=\"phone\" type=\"text\" class=\"input1 input2\""
       + " placeholder=\"+7(___) ___-__-__\">";
       var label5 = "<label class=\"label1\"> Вн. номер: </label>";
       var ext = "<input id=\"extension\" type=\"text\" class=\"input1 input2 mini1 mini2\"><br>";
       var label6 = "<label class=\"label1\">E-mail: </label><br>";
       var email = "<input id=\"email\" type=\"text\" class=\"input1 input2\"><br>";

       var window1 = bra;
       window1 = window1 + label1 + "\n" + fname + "\n" + label2 + "\n" + lname + "\n" + label3 + "\n" + sname;
       window1 = window1 + "\n" + label4 + "\n" + phone + "\n" + label5 + "\n" + ext;
       window1 = window1 + "\n" + label6 + "\n" + email;
       var ket = "\n" + "</div>";
       window1 = window1 + ket;

    var window2 = "<div id=\"active-area\" class=\"dynamic-area\">\n";
        window2 = window2 + "<label class=\"label1\">Найти сорудника?</label><br>\n";
        window2 = window2 + "<input id=\"regex\" type=\"text\" class=\"input1 input2 maxi1 maxi2\">\n";
        window2 = window2 + "\n</div>";

    var buttonSearch = "<button id=\"btnSearch\" class=\"button1 button2\">Поиск</button>";

    // click in the create button
    $("#create").click(function(event) {
       
       deleteActiveArea();
        // clear old elements
        addActiveArea(window1);
    });

    // Change the data on the screen
    $("#change").click(function(event) {
        deleteActiveArea();
        addActiveArea(window2);
        $("#left-area").append(buttonSearch);
    });  // change

    $("#btnSearch").click(function(event) {
            alert("Поиск");
    });

    $("#read").click(function(event) {
        deleteActiveArea();
        addActiveArea(window2);
        $("#left-area").append(buttonSearch);
    }); // read

    $("#delete").click(function(event) {
        deleteActiveArea();
    }); // delete


// Here are additional functions
    function addActiveArea(win) { 
        $("#middle-area").html(win);
    }

    function deleteActiveArea() {
        $("#active-area").remove();
        $("#btnSearch").remove();
    }
}); // jquery using