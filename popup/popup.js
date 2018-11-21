$(function () {

  // toggle 버튼과 스토리지 상의 toggle 정보 동기화
    whale.storage.sync.get(['toggle'], function(result) {
        if(result.toggle) $('.checkbox[data-type=toggle]').click();
    });


    // toggle 버튼이 클릭 될 때
    $('.checkbox[data-type=toggle]').on('click', function () {
        var color = $('#lever').css('background-color'); // 레버의 색상으로 판별
        //alert(color);
        if(color!=='rgba(0, 0, 0, 0.38)') { //눌러지는 타이밍 기준 배경색이 회색이 아니면
            whale.storage.sync.set({'toggle': false}); // 서비스 끄기
        }else {
            whale.storage.sync.set({'toggle': true}); // 서비스 켜기
        }
    });

});