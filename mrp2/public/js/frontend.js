/**
 * Created by dpetrov on 05.04.17.
 */

// All JQuery functions for the frontend applications
$(function () {

    // Define the current date on the top of page
    $("#hd-001").ready(function () {
       $("#hd-001").append(getTextDate());
    });

    // Date picker
    $("#atDate").datepicker(
        {
            dateFormat: "dd-mm-yy",
            monthNames: ["Январь", "Февраль", "Март", "Апрель",
                "Май", "Июнь", "Июль", "Август",
                "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
        }
    );

    // Additional functions

    // Define an initial date and create a header row
    function getTextDate() {

        var now = new Date();

        var txtDay = buildTextValue(now.getDate());
        var txtMonth = buildTextValue((now.getMonth() + 1));
        var txtDate = "Сегодня: " + txtDay + "." + txtMonth + "." + now.getFullYear();

        return ("<h2>" + txtDate + "</h2>");
    }

    // Build value with initial zeroes
    function buildTextValue(moment) {
        if (moment >= 1 && moment <= 9) {
            value = '0' + moment;
        } else {
            value = moment;
        }
        return value;
    }

    // Click on the fields

    // Materials selection

    $("#fromMaterial").click(function(event) {
        getAllMaterials("/materials", "MATRAS", "#fromMaterial");
    });

    $("#toMaterial").click(function(event) {
        getAllMaterials("/materials", "MATRAS", "#toMaterial");
    });

    // Material data reading
    function getAllMaterials(url, cmd, sel) {

        $.post(url, {"mat": cmd}, function(data) {

            var info = JSON.parse(data);

            if (info.length > 0) {
                for (var i = 0; i < info.length; i++) {
                    var matnr = parseInt(info[i].material);
                    var txtOpt = "<option>" + matnr.toString() + " " + info[i].description + "</option>" + "\n";
                    $(sel).append(txtOpt);
                }
            }

        });


    }

}); // end of jquery functions
