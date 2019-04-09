// JavaScript source code using jquery 3.2.1

$(document).ready(function () {
    //change option  
    var form = $("#form").html();
    $('select').on('change', function () {
      var  option = $('select').val();
        $("#form").html("");
        for (var i = 0; i < option; i++) {
            $("#form").append(form);
        }

    });

    // validate and add data to the table
    $('#submit').on('click', function () {
        var names = $("form #name");
        var sClass = $("form #class");
        var emails = $("form #email");
        var phones = $("form #tel");
        var physics = $("form #physics");
        var maths = $("form #maths");
        var its = $("form #it");

        if (validate(names, sClass, emails, phones, physics, maths, its)) {
            
            addData( names, sClass, emails, phones, physics, maths, its);
            $(":input").val("");
        }

    });



    // average
    $('#average').on('click', function () {
        $('#table1-area').show();
        $('#table1').html($('#table').html());

        $("#table1 tr:gt(0)").each(function (index, element) {
            var sum = 0;
            var avg = 0;
            var data = $(element).find("td");
            sum = parseFloat($(data[5]).text()) + parseFloat($(data[6]).text()) + parseFloat($(data[7]).text());
            avg = (sum / 3).toFixed(2);
            $(data[8]).text(avg);
        });


    });


    // grade student
    $('#grade').on('click', function () {
        $('#table1 tr:gt(0)').each(function (index, element) {
            var data = $(element).find("td");
            var val = 0;
            for (var i = 5; i < data.length; i++) {
                val = parseFloat($(data[i]).text());
                if (val < 5) {
                    $(data[i]).css("color", "blue");
                } else if (val >= 8) {
                    $(data[i]).css("color", "red");

                } else {
                    $(data[i]).css("color", "black");

                }
            }


        });
    });


    // validate data form
    function validate(names, sClass, emails, phones, physics, maths, its) {

        var falseCount = 0;

        $.each(names, function (indexInArray, valueOfElement) {
            var falseReturn = checkString(valueOfElement);
            falseCount += falseReturn;
        });

        $.each(sClass, function (indexInArray, valueOfElement) {
            var falseReturn = checkString(valueOfElement);
            falseCount += falseReturn;
        });

        $.each(emails, function (indexInArray, valueOfElement) {
            var regexE = /^[a-zA-Z0-9.!.$%&&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var falseReturn = checkWithRegex(valueOfElement, regexE);
            falseCount += falseReturn;
        });

        $.each(phones, function (indexInArray, valueOfElement) {
            var regexPhone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
            var falseReturn = checkWithRegex(valueOfElement, regexPhone);
            falseCount += falseReturn;
        });

        $.each(physics, function (indexInArray, valueOfElement) {
            var falseReturn = checkNumber(valueOfElement);
            falseCount += falseReturn;

        });

        $.each(maths, function (indexInArray, valueOfElement) {
            var falseReturn = checkNumber(valueOfElement);
            falseCount += falseReturn;
        });

        $.each(its, function (indexInArray, valueOfElement) {
            var falseReturn = checkNumber(valueOfElement);
            falseCount += falseReturn;
        });
        return falseCount === 0;

    }

    // function for checking up String
    function checkString(valueOfElement) {
        var falseCount = 0;
        var val = valueOfElement.value;
            if (val.length === 0) {
                $(valueOfElement).next().filter($(".error")).show();
                falseCount++;

            } else {
                $(valueOfElement).next().filter($(".error")).hide();
        }
        return falseCount;
    }
    
    // function for checking up regex
    function checkWithRegex(valueOfElement, regex) {
        var falseCount = 0;
        var val = valueOfElement.value;
        if (regex.test(val)) {
            $(valueOfElement).next().filter($(".error")).hide();

        } else {

            $(valueOfElement).next().filter($(".error")).show();
            falseCount++;

        }
        return falseCount;
    }

    // function for checking up number
    function checkNumber(valueOfElement) {
        var falseCount = 0;
        var val = valueOfElement.value;
        if (val < 0 || val > 10 || val.length === 0 || isNaN(val)) {
            $(valueOfElement).next().filter($(".error")).show();
            falseCount++;

        } else {

            $(valueOfElement).next().filter($(".error")).hide();
        } 
        return falseCount;
  }

    // add data to table and reset data in form
    function addData(names, sClass, emails, phones, physics, maths, its) {
        // check whether table contains data, start from 1
        $("#table-area").show();
        var sNumber = Number($("#table .no:last").text());
        sNumber = sNumber >= 1 ? sNumber + 1 : 1;
        option =$('select').val();
        for (var j = 0; j < option; j++) {
            $('#table table').append('<tr><td class="no">' + Number(j + sNumber) +
                '</td><td>' + names[j].value + '</td><td>' + sClass[j].value +
                '</td><td>' + emails[j].value + '</td><td>' + phones[j].value +
                '</td><td>' + physics[j].value + '</td><td>' + maths[j].value +
                '</td><td>' + its[j].value + '</td><td>' + "?" + '</td></tr>');
            $('#table td:last').css('color', 'red');

        }


    }
});