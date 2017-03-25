$(function() {

    // click in the create button
    $("#create").click(function(event) {
        // clear old elements
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
       var ext = "<input id=\"extension\" type=\"text\" class=\"mini-input1 mini-input2\"><br>";
       var label6 = "<label class=\"label1\">E-mail: </label><br>";

       var elem = bra;
       elem = elem + label1 + "\n" + fname + "\n" + label2 + "\n" + lname + "\n" + label3 + "\n" + sname;
       elem = elem + "\n" + label4 + "\n" + phone + "\n" + label5 + "\n" + ext;
       elem = elem + "\n" + label6;
       var ket = "</div>";
       elem = elem + ket;

       $("#middle-area").html(elem);

    });

    // Change the data on the screen
    $("#change").click(function(event) {

        $("#active-area").remove();

    });

}); // jquery using