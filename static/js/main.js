$(document).ready(function() {

    $('#bohunirbachoni').click(function() {

        if (!$('#input-text').val().replace(/\s/g, '').length) {
            $('#input-text').val("");
            $('#input-text').attr("placeholder", "এখানে লিখুন");
            return;
        }
        if ($('#input-text').val().trim() !== "") {
            var fired_button = $(this).val();

            $.ajax({
                data: {
                    sentence: $('#input-text').val(),
                    fired_button: fired_button
                },
                url: '/',
                type: 'POST'
            }).done(function(data) {

                if (data.error) {
                    console.log("ERROR!");
                } else {
                    var entity1 = "e1";
                    if (data.data == "at_location") {
                        $('#input-text').val(entity1 + " কোথায়?");
                    } else if (data.data == "born_in") {
                        $('#input-text').val(entity1 + " এর শুরু?");
                    } else if (data.data == "capable_of") {
                        $('#input-text').val(entity1 + " এর দক্ষতা/ক্ষমতা কি?");
                    } else if (data.data == "causes") {
                        $('#input-text').val(entity1 + " এর কারণে কি হয়?");
                    } else if (data.data == "consumed") {
                        $('#input-text').val(entity1 + " কি গ্রহণ করতো?");
                    } else if (data.data == "enjoyed") {
                        $('#input-text').val(entity1 + " এর উপভোগের মাধ্যম কি?");
                    } else if (data.data == "has_a") {
                        $('#input-text').val(entity1 + " এর কি আছে?");
                    } else if (data.data == "has_property") {
                        $('#input-text').val(entity1 + " এর বৈশিষ্ট্য কি?");
                    } else if (data.data == "has_subevent") {
                        $('#input-text').val(entity1 + " এর পরে কি ঘটে?");
                    } else if (data.data == "has_prerequisite") {
                        $('#input-text').val(entity1 + " এর পূর্বশর্ত কি?");
                    } else if (data.data == "is_a") {
                        $('#input-text').val(entity1 + " কি/কে?");
                    } else if (data.data == "job_done") {
                        $('#input-text').val(entity1 + " কি করেছে?");
                    } else if (data.data == "made_of") {
                        $('#input-text').val(entity1 + " এর অংশ/উপাদান কি?");
                    } else if (data.data == "motivated_by") {
                        $('#input-text').val(entity1 + " এর প্রভাবক কি?");
                    } else if (data.data == "obstructed_by") {
                        $('#input-text').val(entity1 + " এর বাধা কি?");
                    } else if (data.data == "results_in") {
                        $('#input-text').val(entity1 + " এর ফলাফল কি?");
                    } else if (data.data == "study_in") {
                        $('#input-text').val(entity1 + " এর শিক্ষা কোথায়?");
                    } else if (data.data == "used_for") {
                        $('#input-text').val(entity1 + " এর ব্যবহার কোথায়? ");
                    } else if (data.data == "work_in") {
                        $('#input-text').val(entity1 + " কোথায় কাজ করেন?");
                    } else if (data.data == "work_of") {
                        $('#input-text').val(entity1 + " কার/কিসের কাজ?");
                    } else {
                        $('#input-text').val("প্রশ্ন তৈরির জন্য পর্যাপ্ত তথ্য নেই");
                    }
                }

            });
        }
    });

    $('#shotto-mittha').click(function() {
        if (!$('#input-text').val().replace(/\s/g, '').length) {
            $('#input-text').val("");
            $('#input-text').attr("placeholder", "এখানে লিখুন");
            return;
        }
        var fired_button = $(this).val();
        var splitSent = $('#input-text').val().split(" ");

        $.ajax({
            data: {
                sentence: splitSent[Math.floor(Math.random() * splitSent.length)],
                fired_button: fired_button
            },
            url: '/',
            type: 'POST'
        }).done(function(data) {

            if (data.error) {
                console.log("ERROR!");
            } else {
                for (i = 0; i < splitSent.length; i++) {
                    if (splitSent[i] === "বিদ্যালয়টি") {
                        splitSent[i] = "কলেজ";
                    }
                }
                var str = "";
                for (i = 0; i < splitSent.length; i++) {
                    str += (splitSent[i] + ' ');
                }
                $('#input-text').val(str);
            }

        });

    });

    $('#shunnosthan').click(function() {
        if (!$('#input-text').val().replace(/\s/g, '').length) {
            $('#input-text').val("");
            $('#input-text').attr("placeholder", "এখানে লিখুন");
            return;
        }
        var fired_button = $(this).val();
        var splitSent = $('#input-text').val().split(" ");

        $.ajax({
            data: {
                sentence: splitSent[Math.floor(Math.random() * splitSent.length)],
                fired_button: fired_button
            },
            url: '/',
            type: 'POST'
        }).done(function(data) {

            if (data.error) {
                console.log("ËRROR!");
            } else {
                for (i = 0; i < splitSent.length; i++) {
                    if (splitSent[i] === "বিদ্যালয়টি") {
                        splitSent[i] = "_____";
                    }
                }
                var str = "";
                for (i = 0; i < splitSent.length; i++) {
                    str += (splitSent[i] + ' ');
                }
                $('#input-text').val(str);
            }

        });

    });

});