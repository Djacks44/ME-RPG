var userInput=[];
    var userChoice= [];
    //storing buttons in vars for easy access.
    var a = $( "#character1" );
    var b = $( "#character2" );
    var c = $( "#character3" );
    var d = $( "#character4" );
    //AP is base Attack Poiints for each corrosponding charachter
    var APa = 6
    var APb = 5
    var APc = 8
    var APd = 10
    //CA is Counter Attack power
    var CAa = 10
    var CAb = 5
    var CAc = 15
    var CAd = 20

    // var t is the amount of times attack is hit, used to calculate AP.
    var t = 0;
    $( window ). ready(function() {
        $('#character1, #character2, #character3, #character4').on('click',function(){
            userInput.push($(this).data('name'));
            console.log(userInput)
            if (userInput=="Shepard") {
                $("#yourChar").append(a);   
                $("#enemies").append(b);
                $("#enemies").append(c);
                $("#enemies").append(d);
                console.log(userInput)
                $( '#character2, #character3, #character4').click(function() {
                    userChoice.push($(this).data('name'));
                    if (userChoice=="Saren") {
                    $("#Defender").append(b);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp1').text(function(i, val) { return val*1-CAb });
                    $('#hp2').text(function(i, val) { return val*1- APa *t });
                        if (parseInt($('#hp2').text())<0) {
                        $("#hiddden").append(b);
                        userChoice=[];
                        
                        };

                    });
                    }else if (userChoice=="Illusive_Man") {
                    $("#Defender").append(c);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp1').text(function(i, val) { return val*1-CAc });
                    $('#hp3').text(function(i, val) { return val*1- APa *t });
                        if (parseInt($('#hp1').text())<=0) {
                                         $("#hiddden").append(a);
                                            alert('You lose!!! Game over');

                        }else if (parseInt($('#hp3').text())<0) {
                            $("#hiddden").append(c);
                            userChoice=[];
                        };

                    });

                    }else if (userChoice=="Reapers") {
                    $("#Defender").append(d);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp1').text(function(i, val) { return val*1-CAd });
                    $('#hp4').text(function(i, val) { return val*1- APa *t });
                        if (parseInt($('#hp1').text())<=0) {
                                         $("#hiddden").append(a);
                                            alert('You lose!!! Game over');

                        }else if (parseInt($('#hp4').text())<0) {
                            $("#hiddden").append(d);
                            alert('You Win!!! Game over')
                            userChoice=[];
                        };

                    });

                    };
                                



                });
                           







            }else if (userInput=="Saren") {
                $("#enemies").append(a);   
                $("#yourChar").append(b);
                $("#enemies").append(c);
                $("#enemies").append(d);
                console.log(userInput)
                $( '#character1, #character3, #character4').click(function() {
                    userChoice.push($(this).data('name'));
                    if (userChoice=="Shepard") {
                    $("#Defender").append(a);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp2').text(function(i, val) { return val*1-2 });
                    $('#hp1').text(function(i, val) { return val*1-6*t });
                        if (parseInt($('#hp1').text())<0) {
                        $("#hiddden").append(a);
                        userChoice=[];
                        
                        };

                    });
                    }else if (userChoice=="Illusive_Man") {
                    $("#Defender").append(c);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp2').text(function(i, val) { return val*1-5 });
                    $('#hp3').text(function(i, val) { return val*1-6*t });
                        if (parseInt($('#hp2').text())<=0) {
                                         $("#hiddden").append(a);
                                            alert('You lose!!! Game over');

                        }else if (parseInt($('#hp3').text())<0) {
                            $("#hiddden").append(c);
                            userChoice=[];
                        };

                    });

                    }else if (userChoice=="Reapers") {
                    $("#Defender").append(d);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp2').text(function(i, val) { return val*1-15 });
                    $('#hp4').text(function(i, val) { return val*1-6*t });
                        if (parseInt($('#hp2').text())<=0) {
                                         $("#hiddden").append(a);
                                            alert('You lose!!! Game over');

                        }else if (parseInt($('#hp4').text())<0) {
                            $("#hiddden").append(d);
                            alert('You Win!!! Game over')
                            userChoice=[];
                        };

                    });

                    };
                                



                });





            }else if (userInput=="Illusive_Man") {
                $("#enemies").append(a);   
                $("#enemies").append(b);
                $("#yourChar").append(c);
                $("#enemies").append(d);
                console.log(userInput)
                $( '#character1, #character2, #character4').click(function() {
                    userChoice.push($(this).data('name'));
                    if (userChoice=="Shepard") {
                    $("#Defender").append(a);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp3').text(function(i, val) { return val*1-2 });
                    $('#hp1').text(function(i, val) { return val*1-6*t });
                        if (parseInt($('#hp1').text())<0) {
                        $("#hiddden").append(a);
                        userChoice=[];
                        
                        };

                    });
                    }else if (userChoice=="Saren") {
                    $("#Defender").append(b);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp3').text(function(i, val) { return val*1-5 });
                    $('#hp2').text(function(i, val) { return val*1-6*t });
                        if (parseInt($('#hp3').text())<=0) {
                                         $("#hiddden").append(c);
                                            alert('You lose!!! Game over');

                        }else if (parseInt($('#hp2').text())<0) {
                            $("#hiddden").append(b);
                            userChoice=[];
                        };

                    });

                    }else if (userChoice=="Reapers") {
                    $("#Defender").append(d);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp3').text(function(i, val) { return val*1-15 });
                    $('#hp4').text(function(i, val) { return val*1-6*t });
                        if (parseInt($('#hp3').text())<=0) {
                                         $("#hiddden").append(c);
                                            alert('You lose!!! Game over');

                        }else if (parseInt($('#hp4').text())<0) {
                            $("#hiddden").append(d);
                            alert('You Win!!! Game over')
                            userChoice=[];
                        };

                    });

                    };
                                



                });


            }else if (userInput=="Reapers") {
                $("#enemies").append(a);   
                $("#enemies").append(b);
                $("#enemies").append(c);
                $("#yourChar").append(d);
                console.log(userInput)
                $( '#character1, #character2, #character3').click(function() {
                    userChoice.push($(this).data('name'));
                    if (userChoice=="Shepard") {
                    $("#Defender").append(a);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp4').text(function(i, val) { return val*1-2 });
                    $('#hp1').text(function(i, val) { return val*1-6*t });
                        if (parseInt($('#hp1').text())<0) {
                        $("#hiddden").append(a);
                        userChoice=[];
                        
                        };

                    });
                    }else if (userChoice=="Saren") {
                    $("#Defender").append(b);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp4').text(function(i, val) { return val*1-5 });
                    $('#hp2').text(function(i, val) { return val*1-6*t });
                        if (parseInt($('#hp4').text())<=0) {
                                         $("#hiddden").append(d);
                                            alert('You lose!!! Game over');

                        }else if (parseInt($('#hp2').text())<0) {
                            $("#hiddden").append(b);
                            userChoice=[];
                        };

                    });

                    }else if (userChoice=="Illusive_Man") {
                    $("#Defender").append(c);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp4').text(function(i, val) { return val*1-15 });
                    $('#hp3').text(function(i, val) { return val*1-6*t });
                        if (parseInt($('#hp4').text())<=0) {
                                         $("#hiddden").append(d);
                                            alert('You lose!!! Game over');

                        }else if (parseInt($('#hp3').text())<0) {
                            $("#hiddden").append(c);
                            alert('You Win!!! Game over')
                            userChoice=[];
                        };

                    });

                    };
                                



                });

            };


        });
                    

    });