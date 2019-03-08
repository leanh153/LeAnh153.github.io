// JavaScript source code
let text, i, option;
let j = 0;
let row = 1;
$(document).ready(function (e) {
    e.preventDefault;
    //change option
    $('select').on('change', function () {
        option = $('select').val();
        text = '';
        for (i = 0; i < option; i++) {
            $('#fform').html(function () {

                text += '<form name="form_' + i + '" class="col-sm-6 form_' + i + '">';
                text += '<label>Họ và tên</label>' + '<input type="text" name ="name_' + i + '" class="name_' + i + '"  value="" class="name_' + i + '" />' + '<br><span class="nDtail_' + i + '" ></span><br />' +
                    '<label>Lớp</label>' + '<input type="text" name = "lop_' + i + '"  class="lop_' + i + '"  value="" />' + '<br><span class="lopDtail_' + i + '" ></span><br />' +
                    '<label>Email</label>' + '<input type="email"  name = "email_' + i + '"  class="email_' + i + '"  value="" />' + '<br><span class="eDtail_' + i + '"></span><br />' +
                    '<label>Số điên thoại</label>' + '<input type="tel"  name = "phone_' + i + '"  class="phone_' + i + '"  value="" />' + '<br><span class="pDtail_' + i + '" ></span><br />' +
                    '<label>Điểm văn</label>' + '<input type="number"  name = "dv_' + i + '"  class="dv_' + i + '"  value="" />' + '<br><span class="vDtail_' + i + '"></span><br />' +
                    '<label>Điểm đạo đức</label>' + '<input type="number" name = "ddd_' + i + '"  class="ddd_' + i + '"  value="" />' + '<br><span class="dDtail_' + i + '"></span><br />' +
                    '<label>Điểm lập trình</label>' + '<input type="number" name = "dlt_' + i + '"  class="dlt_' + i + '"  value="" />' + '<br><span class="lDtail_' + i + '" ></span><br />';
                text += "</form>";
                return text;
            });
        }
    });
    // validation and add data to the table
    $('#nhap').on('click', function () {
        option = $('select').val();
        let form_1, name_1, nDtail_1, lop_1, lopDtail_1, email_1, eDtail_1, phone_1, pDtail_1, dv_1, vDtail_1, ddd_1, dDtail_1,
            dlt_1, lDtail_1, form_2, name_2, nDtail_2, lop_2, lopDtail_2, email_2, eDtail_2, phone_2, pDtail_2, dv_2, vDtail_2,
            ddd_2, dDtail_2, dlt_2, lDtail_2, form_3, name_3, nDtail_3, lop_3, lopDtail_3, email_3, eDtail_3, phone_3, pDtail_3,
            dv_3, vDtail_3, ddd_3, dDtail_3, dlt_3, lDtail_3;

        let form_0 = $('.form_0 input');
        let name_0 = $('.name_0').val();
        let nDtail_0 = $('.nDtail_0');
        let lop_0 = $('.lop_0').val();
        let lopDtail_0 = $('.lopDtail_0');
        let email_0 = $('.email_0').val();
        let eDtail_0 = $('.eDtail_0');
        let phone_0 = $('.phone_0').val();
        let pDtail_0 = $('.pDtail_0');
        let dv_0 = $('.dv_0').val();
        let vDtail_0 = $('.vDtail_0');
        let ddd_0 = $('.ddd_0').val();
        let dDtail_0 = $('.dDtail_0');
        let dlt_0 = $('.dlt_0').val();
        let lDtail_0 = $('.lDtail_0');

        try {
            form_1 = $('.form_1 input');
            name_1 = $('.name_1').val();
            nDtail_1 = $('.nDtail_1');
            lop_1 = $('.lop_1').val();
            lopDtail_1 = $('.lopDtail_1');
            email_1 = $('.email_1').val();
            eDtail_1 = $('.eDtail_1');
            phone_1 = $('.phone_1').val();
            pDtail_1 = $('.pDtail_1');
            dv_1 = $('.dv_1').val();
            vDtail_1 = $('.vDtail_1');
            ddd_1 = $('.ddd_1').val();
            dDtail_1 = $('.dDtail_1');
            dlt_1 = $('.dlt_1').val();
            lDtail_1 = $('.lDtail_1');

            form_2 = $('.form_2 input');
            name_2 = $('.name_2').val();
            nDtail_2 = $('.nDtail_2');
            lop_2 = $('.lop_2').val();
            lopDtail_2 = $('.lopDtail_2');
            email_2 = $('.email_2').val();
            eDtail_2 = $('.eDtail_2');
            phone_2 = $('.phone_2').val();
            pDtail_2 = $('.pDtail_2');
            dv_2 = $('.dv_2').val();
            vDtail_2 = $('.vDtail_2');
            ddd_2 = $('.ddd_2').val();
            dDtail_2 = $('.dDtail_2');
            dlt_2 = $('.dlt_2').val();
            lDtail_2 = $('.lDtail_2');

            form_3 = $('.form_3 input');
            name_3 = $('.name_3').val();
            nDtail_3 = $('.nDtail_3');
            lop_3 = $('.lop_3').val();
            lopDtail_3 = $('.lopDtail_3');
            email_3 = $('.email_3').val();
            eDtail_3 = $('.eDtail_3');
            phone_3 = $('.phone_3').val();
            pDtail_3 = $('.pDtail_3');
            dv_3 = $('.dv_3').val();
            vDtail_3 = $('.vDtail_3');
            ddd_3 = $('.ddd_3').val();
            dDtail_3 = $('.dDtail_3');
            dlt_3 = $('.dlt_3').val();
            lDtail_3 = $('.lDtail_3');
        } catch (error) {

        }


        switch (Number(option)) {
            case 1:

                checkForm(form_0, name_0, nDtail_0, lop_0,
                    lopDtail_0, email_0, eDtail_0, phone_0, pDtail_0, dv_0, vDtail_0, ddd_0, dDtail_0, dlt_0, lDtail_0);
                break;
            case 2:
                checkForm(form_0,name_0, nDtail_0, lop_0,
                    lopDtail_0, email_0, eDtail_0, phone_0, pDtail_0, dv_0, vDtail_0, ddd_0, dDtail_0, dlt_0, lDtail_0);

                checkForm(form_1, name_1, nDtail_1, lop_1,
                    lopDtail_1, email_1, eDtail_1, phone_1, pDtail_1, dv_1, vDtail_1, ddd_1, dDtail_1, dlt_1, lDtail_1);


                break;
            case 3:
                checkForm(form_0,name_0, nDtail_0, lop_0,
                    lopDtail_0, email_0, eDtail_0, phone_0, pDtail_0, dv_0, vDtail_0, ddd_0, dDtail_0, dlt_0, lDtail_0);

                checkForm(form_1, name_1, nDtail_1, lop_1,
                    lopDtail_1, email_1, eDtail_1, phone_1, pDtail_1, dv_1, vDtail_1, ddd_1, dDtail_1, dlt_1, lDtail_1);

                checkForm(form_2, name_2, nDtail_2, lop_2,
                    lopDtail_2, email_2, eDtail_2, phone_2, pDtail_2, dv_2, vDtail_2, ddd_2, dDtail_2, dlt_2, lDtail_2);


                break;
            case 4:
                checkForm(form_0,name_0, nDtail_0, lop_0,
                    lopDtail_0, email_0, eDtail_0, phone_0, pDtail_0, dv_0, vDtail_0, ddd_0, dDtail_0, dlt_0, lDtail_0);

                checkForm(form_1, name_1, nDtail_1, lop_1,
                    lopDtail_1, email_1, eDtail_1, phone_1, pDtail_1, dv_1, vDtail_1, ddd_1, dDtail_1, dlt_1, lDtail_1);

                checkForm(form_2, name_2, nDtail_2, lop_2,
                    lopDtail_2, email_2, eDtail_2, phone_2, pDtail_2, dv_2, vDtail_2, ddd_2, dDtail_2, dlt_2, lDtail_2);


                checkForm(form_3,name_3, nDtail_3, lop_3,
                    lopDtail_3, email_3, eDtail_3, phone_3, pDtail_3, dv_3, vDtail_3, ddd_3, dDtail_3, dlt_3, lDtail_3);


                break;

        }

    });
    // tinh trung binh
    $('#tb').on('click', function () {
        $('#table1').html($('#table').html());
        $('#table1 tr').each(function (row, tr) {
            row++;
            let dv = Number($('#table1 tr:nth-child(' + row + ') td:eq(5)').text());
            let ddd = Number($('#table1 tr:nth-child(' + row + ') td:eq(6)').text());
            let dlt = Number($('#table1 tr:nth-child(' + row + ') td:eq(7)').text());
            $('#table1 tr:nth-child(' + row + ') td:eq(8)').text(function () {
                return ((dv + ddd + dlt) / 3).toFixed(2);
            });
        });
    });
    // danh gia hoc sinh
    $('#dg').on('click', function () {
        $('#table1 tr').each(function (row, td) {
            row++;
            for (let td = 6; td < 9; td++) {
                let t = Number($('#table1 tr:nth-child(' + row + ') td:nth-child(' + td + ')').text());
                if (t < 5) {
                    $('#table1 tr:nth-child(' + row + ') td:nth-child(' + td + ')').css("color", "blue");
                } else if (t >= 8) {
                    $('#table1 tr:nth-child(' + row + ') td:nth-child(' + td + ')').css("color", "red");

                } else {
                    $('#table1 tr:nth-child(' + row + ') td:nth-child(' + td + ')').css("color", "black");

                }

            }

        });
    });


    // cac form check du lieu
    function checkForm(form, name, nDtail, lop, lopDtail, email, eDtail, phone, pDtail, dv, vDtail, ddd, dDtail, dlt,
                       lDtail) {

        let result = validate(name, nDtail, lop, lopDtail, email, eDtail, phone, pDtail, dv, vDtail, ddd, dDtail, dlt,
            lDtail);

        if (result) {
            addData(form, name, lop, email, phone, dv, ddd, dlt);
        }


    }

    // validate data form
    function validate(name, nDtail, lop, lopDtail, email, eDtail, phone, pDtail, dv, vDtail, ddd, dDtail, dlt,
                      lDtail) {
        let falseCount = 0;
        let regexp = /^[a-zA-Z0-9.!.$%&&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let regexpp = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
        if (name.length === 0) {
            nDtail.text('Họ và tên bắt buộc nhập');
            nDtail.addClass('error');
            falseCount++;

        } else {
            nDtail.text('');
            nDtail.removeClass('error');


        }

        if (lop.length === 0) {
            lopDtail.text('Lớp bắt buộc nhập');
            lopDtail.addClass('error');
            falseCount++;
        } else {
            lopDtail.text('');
            lopDtail.removeClass('error');

        }

        if (regexp.test(email)) {
            eDtail.text('');
            eDtail.removeClass('error');

        } else {
            eDtail.text('email phải nhập và nhập đúng định dạng');
            eDtail.addClass('error');
            falseCount++;

        }

        if (regexpp.test(phone)) {
            pDtail.text('');
            pDtail.removeClass('error');

        } else {
            pDtail.text('Số điện thoại phải nhập và nhập đúng định dạng');
            pDtail.addClass('error');
            falseCount++;
        }

        if (dv < 0 || dv > 10 || dv.length === 0 || isNaN(dv)) {
            vDtail.text('Điểm văn phải nhập và phải là số từ 0 đến 10');
            vDtail.addClass('error');
            falseCount++;
        } else {
            vDtail.removeClass('error');
            vDtail.text('');

        }


        if (ddd < 0 || ddd > 10 || ddd.length === 0 || isNaN(ddd)) {
            dDtail.text('Điểm đạo đức phải nhập và phải là số từ 0 đến 10');
            dDtail.addClass('error');
            falseCount++;
        } else {
            dDtail.removeClass('error');
            dDtail.text('');

        }

        if (dlt < 0 || dlt > 10 || dlt.length === 0 || isNaN(dlt)) {
            lDtail.text('Điểm lập trình phải nhập và phải là số từ 0 đến 10');
            lDtail.addClass('error');
            falseCount++;
        } else {
            lDtail.removeClass('error');
            lDtail.text('');

        }
        return falseCount===0;

    }


    // add data to table and reset data in form
    function addData(form, name, lop, email, phone, dv, ddd, dlt) {

        j++;
        $('#table table').append('<tr><td>' + j + '</td><td>' + name + '</td><td>' + lop + '</td><td>' + email +
            '</td><td>' + phone + '</td><td>' + dv + '</td><td>' + ddd + '</td><td>' + dlt + '</td><td>' + "?" + '</td></tr>');
        $('#table td:last').css('color', 'red');
        form.val('');
    }



});