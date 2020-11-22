// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require moment
//= require fullcalendar
//= require bootstrap-sprockets
//= require_tree


//スライド機能追加
$(document).ready(function () {
  $("#theTarget").skippr({
    transition : 'slide',
    speed : 1000,
    easing : 'easeOutQuart',
    navType : 'bubble',
    arrows:true,
    autoPlay : true,
    autoPlaySpeed: 0,
    autoPlayDuration: 1000,
    childrenElementType : 'div',
    cssEase:'linear',
    keyboardOnAlways : true,
    hidePrevious : false
  });
});

//カレンダー機能追加
$(function () {
    // 画面遷移を検知
    $(document).on('turbolinks:load', function () {
        if ($('#calendar').length) {

            function Calendar() {
                return $('#calendar').fullCalendar({
                });
            }
            function clearCalendar() {
                $('#calendar').html('');
            }

            $(document).on('turbolinks:load', function () {
                Calendar();
            });
            $(document).on('turbolinks:before-cache', clearCalendar);

            //events: '/events.json', 以下に追加
            $('#calendar').fullCalendar({
                events: '/events.json',
                //カレンダー上部を年月で表示させる
                titleFormat: 'YYYY年 M月',
                //曜日を日本語表示
                dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
                //ボタンのレイアウト
                header: {
                    left: '',
                    center: 'title',
                    right: 'today prev,next'
                },
                //終了時刻がないイベントの表示間隔
                defaultTimedEventDuration: '03:00:00',
                buttonText: {
                    prev: '前',
                    next: '次',
                    prevYear: '前年',
                    nextYear: '翌年',
                    today: '今日',
                    month: '月',
                    week: '週',
                    day: '日'
                },
                // Drag & Drop & Resize
                editable: true,
                //イベントの時間表示を２４時間に
                timeFormat: "HH:mm",
                //イベントの色を変える
                eventColor: '#87cefa',
                //イベントの文字色を変える
                eventTextColor: '#000000',
                eventRender: function(event, element) {
                    element.css("font-size", "0.8em");
                    element.css("padding", "5px");
                }
            });
        }
    });
});

//topバック機能追加
$(function() {
  $('#back i').on('click',function(event){
    $('container, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});



//星評価機能
//$(function(){
  //$('#star').raty({
   // size: 36,
    //starOff: "/assets/star-off.png",
    //starOn: "/assets/star-on.png",
    //: "post_food_comment[rate]"
  //});
//});

//口コミ機能実装
//$('#star-rate-<%= post_food.id%>').raty({
    //size: 36,
    //starOff: "/assets/star-off.png",
   // starOn: "/assets/star-on.png",
   // starHalf: "/asset/star-half.png",
    //half: true,
   //readOnly: true,
    //score: "<%= post_food.average(:rate).to_f.round(1)%>",
  // 平均点を算出し、round関数で切り上げ
  //});
