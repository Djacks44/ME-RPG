var userInput=[];
    var userChoice= [];
    //storing buttons in vars for easy access.
    var a = $( "#character1" );
    var b = $( "#character2" );
    var c = $( "#character3" );
    var d = $( "#character4" );
    //AP is base Attack Poiints for each corrosponding charachter
    var APa = 6
    var APb = 17
    var APc = 5
    var APd = 150
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
                    $("#attacker").text('You attacked ' + 'Saren'+' for '+APa *t+' damage.');
                    $("#counter").text('Saren'+' attacked you back for '+CAb+' damage.');
                        if (parseInt($('#hp2').text())<=0) {
                        $("#hiddden").append(b);
                        CAb=0;
                        userChoice=[];
                        
                        };

                    });
                    }else if (userChoice=="Illusive_Man") {
                    $("#Defender").append(c);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp1').text(function(i, val) { return val*1-CAc });
                    $('#hp3').text(function(i, val) { return val*1- APa *t });
                    $("#attacker").text('You attacked ' + 'The Illusive Man'+' for '+APa *t+' damage.');
                    $("#counter").text('The Illusive Man'+' attacked you back for '+CAc+' damage.');
                        if (parseInt($('#hp1').text())<=0) {
                                         $("#hiddden").append(a);
                                            alert('You lose!!! Game over');

                        }else if (parseInt($('#hp3').text())<=0) {
                            $("#hiddden").append(c);
                            CAc=0;
                            userChoice=[];
                        };

                    });

                    }else if (userChoice=="Reapers") {
                    $("#Defender").append(d);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp1').text(function(i, val) { return val*1-CAd });
                    $('#hp4').text(function(i, val) { return val*1- APa *t });
                    $("#attacker").text('You attacked ' + 'The Reapers'+' for '+APa *t+' damage.');
                    $("#counter").text('The Reapers'+' attacked you back for '+CAd+' damage.');
                        if (parseInt($('#hp1').text())<=0) {
                                         $("#hiddden").append(a);
                                $("#attacker").text('You lose!!! Game over.');
                            $("#counter").text('Press reset to play again!');

                        }else if (parseInt($('#hp4').text())<=0) {
                            $("#hiddden").append(d);
                            CAd=0;
                            $("#attacker").text('You Win!!! Game over.');
                            $("#counter").text('Press reset to play again!');
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
                    $('#hp2').text(function(i, val) { return val*1-CAa });
                    $('#hp1').text(function(i, val) { return val*1-APb*t });
                    $("#attacker").text('You attacked ' + 'Shepard'+' for '+APb *t+' damage.');
                    $("#counter").text('Shepard'+' attacked you back for '+CAa+' damage.');
                        if (parseInt($('#hp1').text())<=0) {
                        $("#hiddden").append(a);
                        CAa=0;
                        userChoice=[];
                        
                        };

                    });
                    }else if (userChoice=="Illusive_Man") {
                    $("#Defender").append(c);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp2').text(function(i, val) { return val*1-CAc });
                    $('#hp3').text(function(i, val) { return val*1-APb*t });
                    $("#attacker").text('You attacked ' + 'The Illusive Man'+' for '+APb *t+' damage.');
                    $("#counter").text('The Illusive Man'+' attacked you back for '+CAc+' damage.');
                        if (parseInt($('#hp2').text())<=0) {
                                         $("#hiddden").append(b);
                            $("#attacker").text('You lose!!! Game over.');
                            $("#counter").text('Press reset to play again!');

                        }else if (parseInt($('#hp3').text())<=0) {
                            $("#hiddden").append(c);
                            CAc=0;
                            userChoice=[];
                        };

                    });

                    }else if (userChoice=="Reapers") {
                    $("#Defender").append(d);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp2').text(function(i, val) { return val*1-CAd });
                    $('#hp4').text(function(i, val) { return val*1-APb*t });
                    $("#attacker").text('You attacked ' + 'The Reapers'+' for '+APb *t+' damage.');
                    $("#counter").text('The Reapers'+' attacked you back for '+CAd+' damage.');
                        if (parseInt($('#hp2').text())<=0) {
                                         $("#hiddden").append(b);
                            $("#attacker").text('You lose!!! Game over.');
                            $("#counter").text('Press reset to play again!');
                                            

                        }else if (parseInt($('#hp4').text())<=0) {
                            $("#hiddden").append(d);
                            CAd=0;
                            $("#attacker").text('You Win!!! Game over.');
                            $("#counter").text('Press reset to play again!');
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
                    $('#hp3').text(function(i, val) { return val*1-CAa });
                    $('#hp1').text(function(i, val) { return val*1-APc*t });
                    $("#attacker").text('You attacked ' + 'Shepard'+' for '+APc *t+' damage.');
                    $("#counter").text('Shepard'+' attacked you back for '+CAa+' damage.');
                        if (parseInt($('#hp1').text())<=0) {
                        $("#hiddden").append(a);
                        CAa=0;
                        userChoice=[];
                        
                        };

                    });
                    }else if (userChoice=="Saren") {
                    $("#Defender").append(b);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp3').text(function(i, val) { return val*1-CAb });
                    $('#hp2').text(function(i, val) { return val*1-APc*t });
                    $("#attacker").text('You attacked ' + 'Saren'+' for '+APc *t+' damage.');
                    $("#counter").text('Saren'+' attacked you back for '+CAb+' damage.');
                        if (parseInt($('#hp3').text())<=0) {
                                         $("#hiddden").append(c);
                            $("#attacker").text('You lose!!! Game over.');
                            $("#counter").text('Press reset to play again!');

                        }else if (parseInt($('#hp2').text())<=0) {
                            $("#hiddden").append(b);
                            CAb=0;
                            userChoice=[];
                        };

                    });

                    }else if (userChoice=="Reapers") {
                    $("#Defender").append(d);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp3').text(function(i, val) { return val*1-CAd });
                    $('#hp4').text(function(i, val) { return val*1-APc*t });
                    $("#attacker").text('You attacked ' + 'The Reapers'+' for '+APc *t+' damage.');
                    $("#counter").text('The Reapers'+' attacked you back for '+CAd+' damage.');
                        if (parseInt($('#hp3').text())<=0) {
                                         $("#hiddden").append(c);
                            $("#attacker").text('You lose!!! Game over.');
                            $("#counter").text('Press reset to play again!');

                        }else if (parseInt($('#hp4').text())<=0) {
                            $("#hiddden").append(d);
                            $("#attacker").text('You Win!!! Game over.');
                            $("#counter").text('Press reset to play again!');
                            CAd=0;
                            userChoice=[];
                        };

                    });

                    };
                                



                });


            }else if (userInput=="Reapers") {
                $("#attacker").text('You will win automaticly the Reapers are too powerful.');
                $("#counter").text('Press reset to play again! and choose a better protag, this time!');
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
                    $('#hp4').text(function(i, val) { return val*1-CAa });
                    $('#hp1').text(function(i, val) { return val*1-APd*t });
                    $("#attacker").text('You attacked ' + 'Shepard'+' for '+APd *t+' damage.');
                    $("#counter").text('Shepard'+' attacked you back for '+CAa+' damage.');
                        if (parseInt($('#hp1').text())<=0) {
                        $("#hiddden").append(a);
                        CAa=0;
                        userChoice=[];
                        
                        };

                    });
                    }else if (userChoice=="Saren") {
                    $("#Defender").append(b);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp4').text(function(i, val) { return val*1-CAb });
                    $('#hp2').text(function(i, val) { return val*1-APd*t });
                     $("#attacker").text('You attacked ' + 'Saren'+' for '+APd *t+' damage.');
                    $("#counter").text('Saren'+' attacked you back for '+CAb+' damage.');
                        if (parseInt($('#hp4').text())<=0) {
                                         $("#hiddden").append(d);
                                            alert('You lose!!! Game over');

                        }else if (parseInt($('#hp2').text())<=0) {
                            $("#hiddden").append(b);
                            CAb=0;
                            userChoice=[];
                        };

                    });

                    }else if (userChoice=="Illusive_Man") {
                    $("#Defender").append(c);
                    $( "#attack" ).click(function() {
                    t=t+1;
                    $('#hp4').text(function(i, val) { return val*1-CAc });
                    $('#hp3').text(function(i, val) { return val*1-APd*t });
                     $("#attacker").text('You attacked ' + 'The Illusive Man'+' for '+APd *t+' damage.');
                    $("#counter").text('The Illusive Man'+' attacked you back for '+CAc+' damage.');
                        if (parseInt($('#hp4').text())<=0) {
                                         $("#hiddden").append(d);
                                            alert('You lose!!! Game over');

                        }else if (parseInt($('#hp3').text())<=0) {
                            $("#hiddden").append(c);
                            CAc=0;

                            userChoice=[];
                        };

                    });

                    };
                                



                });

            };


        });
                    

    });