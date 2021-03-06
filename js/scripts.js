(function ($) {
    "use strict";
    $(document).ready(function () {

        // right sidebar animation

      $(".nl-show-sidebar").click(function(){
       $(this).css("color","red"); 
       $(this).parent().parent().parent().parent().find(".right-sidebar--user").toggleClass("animate__right-sidebar--user");

      });

      $(".right-sidebar--user .nl-close").click(function(){

        $(this).parent().parent().find(".right-sidebar--user").removeClass("animate__right-sidebar--user");

        });


        /*==Left Navigation Accordion ==*/
        if ($.fn.dcAccordion) {
            $('#nav-accordion').dcAccordion({
                eventType: 'click',
                autoClose: true,
                saveState: true,
                disableLink: true,
                speed: 'slow',
                showCount: false,
                autoExpand: true,
                classExpand: 'dcjq-current-parent'
            });
        }
        /*==Slim Scroll ==*/
        if ($.fn.slimScroll) {
            $('.event-list').slimscroll({
                height: '305px',
                wheelStep: 20
            });
            $('.conversation-list').slimscroll({
                height: '360px',
                wheelStep: 35
            });
            $('.to-do-list').slimscroll({
                height: '300px',
                wheelStep: 35
            });
        }
        /*==Nice Scroll ==*/
        if ($.fn.niceScroll) {


            $(".leftside-navigation").niceScroll({
                cursorcolor: "#1FB5AD",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

            $(".leftside-navigation").getNiceScroll().resize();
            if ($('#sidebar').hasClass('hide-left-bar')) {
                $(".leftside-navigation").getNiceScroll().hide();
            }
            $(".leftside-navigation").getNiceScroll().show();

            $(".right-stat-bar").niceScroll({
                cursorcolor: "#1FB5AD",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

        }

        /*==Easy Pie chart ==*/
        if ($.fn.easyPieChart) {

            $('.notification-pie-chart').easyPieChart({
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                },
                barColor: "#39b6ac",
                lineWidth: 3,
                size: 50,
                trackColor: "#efefef",
                scaleColor: "#cccccc"

            });

            $('.pc-epie-chart').easyPieChart({
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                },
                barColor: "#5bc6f0",
                lineWidth: 3,
                size:50,
                trackColor: "#32323a",
                scaleColor:"#cccccc"

            });

        }

        /*== SPARKLINE==*/
        if ($.fn.sparkline) {

            $(".d-pending").sparkline([3, 1], {
                type: 'pie',
                width: '40',
                height: '40',
                sliceColors: ['#e1e1e1', '#8175c9']
            });



            var sparkLine = function () {
                $(".sparkline").each(function () {
                    var $data = $(this).data();
                    ($data.type == 'pie') && $data.sliceColors && ($data.sliceColors = eval($data.sliceColors));
                    ($data.type == 'bar') && $data.stackedBarColor && ($data.stackedBarColor = eval($data.stackedBarColor));

                    $data.valueSpots = {
                        '0:': $data.spotColor
                    };
                    $(this).sparkline($data.data || "html", $data);


                    if ($(this).data("compositeData")) {
                        $spdata.composite = true;
                        $spdata.minSpotColor = false;
                        $spdata.maxSpotColor = false;
                        $spdata.valueSpots = {
                            '0:': $spdata.spotColor
                        };
                        $(this).sparkline($(this).data("compositeData"), $spdata);
                    };
                });
            };

            var sparkResize;
            $(window).resize(function (e) {
                clearTimeout(sparkResize);
                sparkResize = setTimeout(function () {
                    sparkLine(true)
                }, 500);
            });
            sparkLine(false);



        }



        if ($.fn.plot) {
            var datatPie = [30, 50];
            // DONUT
            $.plot($(".target-sell"), datatPie, {
                series: {
                    pie: {
                        innerRadius: 0.6,
                        show: true,
                        label: {
                            show: false

                        },
                        stroke: {
                            width: .01,
                            color: '#fff'

                        }
                    }




                },

                legend: {
                    show: true
                },
                grid: {
                    hoverable: true,
                    clickable: true
                },

                colors: ["#ff6d60", "#cbcdd9"]
            });
        }



        /*==Collapsible==*/
        $('.widget-head').click(function (e) {
            var widgetElem = $(this).children('.widget-collapse').children('i');

            $(this)
                .next('.widget-container')
                .slideToggle('slow');
            if ($(widgetElem).hasClass('ico-minus')) {
                $(widgetElem).removeClass('ico-minus');
                $(widgetElem).addClass('ico-plus');
            } else {
                $(widgetElem).removeClass('ico-plus');
                $(widgetElem).addClass('ico-minus');
            }
            e.preventDefault();
        });




        /*==Sidebar Toggle==*/

        $(".leftside-navigation .sub-menu > a").click(function () {
            var o = ($(this).offset());
            var diff = 80 - o.top;
            if (diff > 0)
                $(".leftside-navigation").scrollTo("-=" + Math.abs(diff), 500);
            else
                $(".leftside-navigation").scrollTo("+=" + Math.abs(diff), 500);
        });



        $('.sidebar-toggle-box .fa-bars').click(function (e) {

            $(".leftside-navigation").niceScroll({
                cursorcolor: "#1FB5AD",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

            $('#sidebar').toggleClass('hide-left-bar');
            if ($('#sidebar').hasClass('hide-left-bar')) {
                $(".leftside-navigation").getNiceScroll().hide();
            }
            $(".leftside-navigation").getNiceScroll().show();
            $('#main-content').toggleClass('merge-left');
            e.stopPropagation();
            if ($('#container').hasClass('open-right-panel')) {
                $('#container').removeClass('open-right-panel')
            }
            if ($('.right-sidebar').hasClass('open-right-bar')) {
                $('.right-sidebar').removeClass('open-right-bar')
            }

            if ($('.header').hasClass('merge-header')) {
                $('.header').removeClass('merge-header')
            }


        });
        $('.toggle-right-box .fa-bars').click(function (e) {
            $('#container').toggleClass('open-right-panel');
            $('.right-sidebar').toggleClass('open-right-bar');
            $('.header').toggleClass('merge-header');

            e.stopPropagation();
        });

        $('.header,#main-content,#sidebar').click(function () {
            if ($('#container').hasClass('open-right-panel')) {
                $('#container').removeClass('open-right-panel')
            }
            if ($('.right-sidebar').hasClass('open-right-bar')) {
                $('.right-sidebar').removeClass('open-right-bar')
            }

            if ($('.header').hasClass('merge-header')) {
                $('.header').removeClass('merge-header')
            }


        });


        $('.panel .tools .fa').click(function () {
            var el = $(this).parents(".panel").children(".panel-body");
            if ($(this).hasClass("fa-chevron-down")) {
                $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
                el.slideUp(200);
            } else {
                $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
                el.slideDown(200); }
        });



        $('.panel .tools .fa-times').click(function () {
            $(this).parents(".panel").parent().remove();
        });

        // tool tips

        $('.tooltips').tooltip();

        // popovers

        $('.popovers').popover();


    });

    



})(jQuery);

$( document ).ready(function() {



    $(".nl-btn-menu").click(function(){
        $(this).parent().find(".nl-table-menu").toggleClass("nl-js-display-none").animate(300);
    });
    
    $(".nl-places-select input.search-input").attr("placeholder","поиск");

    // dashboard rub
    $("#graph-area text").css("font-size","10px");
    $("#graph-area text tspan").append(document.createTextNode(" P"));


    $('.nl-js-chart tspan:contains("2012")').text('Июнь');
    $('.nl-js-chart tspan:contains("2011")').text('Май');
    $('.nl-dishes .dataTables_filter:contains("Search: ")').text('Поиск');

    $('.nl-js-chart tspan:contains("2012")').text('июнь');

    $('.nl-dishes label:contains(" на странице")').css("color","red");
    $(".panel-heading").click(function(){
        $(this).parent().find(".panel-body").slideToggle();
    });
});




$( document ).ready(function() {

    // lets choose all checkboxes

    $('thead th input[type=checkbox]').click(function() {
        $(this).closest('table').find(':checkbox').prop('checked',this.checked);
    });

    // Показываем окошко успеха при нажатии на кнопку Подтвердить

    $(".js-nl-btn-proove").click(function(){
         $(this).parent().parent().parent().find(".nl-user__detail-order").hide().animate(300);
         $(this).parent().parent().parent().find(".modal-footer").hide().animate(300);
         $(this).parent().parent().find(".nl-user__message--success").css("display","block");
    });


    $(".nl-user--order-day a").click(function(){
        $(".btn").removeClass("btn-order--active");
        $(this).toggleClass("btn-order--active");
    });

    $(".js-btn-close").click(function(){
        $(this).parent().parent().parent().parent().parent().parent().parent().find(".nl-user-modal__order").hide().animate(300);
    });


    // скрипт для nl-total--item, кнопка закрыть

    // $(".nl-total--close").click(function(event){
    //     event.preventDefault;
    //     $(this).closest(".nl-total--item").hide();
    // });

    var body   = $('.nl-total-body'),
      delbox_str = "<p class='nl-deleted'>Удалено. <a href='#' class='nl-cancel'>И я тотчас передумал!</a></p>";
    
  body.click(function(){
    event.preventDefault();
    
    var target = $(event.target);
    var parent = target.parent();
    
    if (target.hasClass('nl-total--close')){
       var delbox = $(delbox_str);
      
       // parent.css('height', parent.height());
       parent.children().hide();
       parent.append(delbox);
       delbox.fadeOut(3000);
      
    }
    
    if (target.hasClass('nl-cancel')){
      parent.siblings().show();
      parent.remove();
    }
  });


  // dishes page

$(".nl-dishes--calendar").click(function(){
    $(this).parent().find("ul").toggleClass("dishes-hide");
  });
  $("ul li").click(function(){
    $(this).toggleClass("active");
  });
  
  $('.nl-dishes--calendar').click(function(e) {
    var $message = $('.nl-dishes--days');
 
    if ($message.css('display') != 'block') {
        $(this).parent().find('.nl-dishes--days').show();
 
        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
            if (!firstClick && $(e.target).closest('.nl-dishes--days').length == 0) {
                $message.hide();
                $(document).unbind('click.myEvent');
            }
            firstClick = false;
        });
    }
 
    e.preventDefault();
});


  // make-order comment

  $(".nl-user-table__comment span").click(function(){
    $(this).parent().parent().find(".nl-user-table__textarea").slideToggle(200);
  });


  // weather 

  // Docs at http://simpleweatherjs.com

/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});

/* 
* Test Locations
* Austin lat/long: 30.2676,-97.74298
* Austin WOEID: 2357536
*/
$(document).ready(function() {
  loadWeather('Saint Petersburg Federal City',''); //@params location, woeid
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
        
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}



});








