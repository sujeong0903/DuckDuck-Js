# 어덕편덕
> 연예인 사진 자동 분류 웨일 확장앱

   *"어차피 하는 덕질 편하게 덕질하세요!"*

   [어덕편덕](https://store.whale.naver.com/detail/bghcbobamgkjbcpjdlcfmdkjeaahnoah)은 [Naver Clova Face Recognition API](https://developers.naver.com/docs/clova/api/CFR/API_Guide.md#Overview)를 이용해 유명인 사진 다운로드 시 얼굴을 인식하여 파일명을 추천해주고 자동으로 인물별 폴더를 생성해줍니다.

   또한, 기존 사진과 중복되는 사진을 저장하는 경우 알려주는 확장앱입니다.

   [웨일 브라우저](https://whale.naver.com/ko/)와 어덕편덕을 설치하고 좋아하는 연예인 사진 정리에 소요되는 시간을 아껴보세요!

   이제 편하게 덕질합시다 : )
   
   
   ### 주요 기능
   1. 인물 사진 자동 분류
   2. 사진 중복 저장 방지
   3. 최근 다운로드 받은 사진 확인
   4. 다운로드 내역 확인





--------------------------------------------------------------------------------------





# 어떻게 만들어졌나요?
>  어덕편덕은 이런 이유에서 이러한 방식으로 만들어졌어요!

   
   
# 어떻게 사용하나요?
> 이대로만 따라 해주세요!
  1. 웨일 스토어에서 어덕편덕을 다운로드 받으면 사이드바에 덕덕이 아이콘이 나타납니다. <br>
   <img src="https://github.com/yeonwookang/DuckDuck-Js/blob/master/sidebar/src/img/intro/1.PNG?raw=true"></img>
   <br><br>
  2. 사이드바 영역에서는 각종 설정, 최근에 다운로드 받은 이미지의 정보 및 이전 다운로드 내역을 확인할 수 있습니다. (단축키 Alt+A) <br>
   <img src="https://github.com/yeonwookang/DuckDuck-Js/blob/master/sidebar/src/img/intro/2.PNG?raw=true" width="80%"></img>
   <br><br>

  3. 사이드바 영역의 왼쪽 상단에 있는 스위치로 서비스를 키고 끌 수 있습니다. (단축키 Alt+S) <br>
   <img src="https://github.com/yeonwookang/DuckDuck-Js/blob/master/sidebar/src/img/intro/3.PNG?raw=true" width="80%"></img>
   <br><br>

  4. 웹에서 저장할 인물 이미지에 마우스 오른쪽을 클릭하고 이미지 저장하기를 클릭합니다. <br>
   <img src="https://github.com/yeonwookang/DuckDuck-Js/blob/master/sidebar/src/img/intro/4(2).png?raw=true" width="80%"></img>
   <br><br>

  5. 덕덕이가 열심히 이미지를 분석합니다! <br>
    소요 시간은 평균 5초 정도이나 이미지 크기와 네트워크 상태에 따라 조금씩 달라집니다. <br>
   <img src="https://github.com/yeonwookang/DuckDuck-Js/blob/master/sidebar/src/img/intro/5.PNG?raw=true"></img>
   <br><br>
  
  6. 팝업으로 분석 결과를 보여줍니다.<br>
   <img src="https://github.com/yeonwookang/DuckDuck-Js/blob/master/sidebar/src/img/intro/6-1.PNG?raw=true" width="80%"></img><br>
   <img src="https://github.com/yeonwookang/DuckDuck-Js/blob/master/sidebar/src/img/intro/6-2.PNG?raw=true" width="80%"></img><br>
   <br><br>

  7. 덕덕이가 분석한 인물 신뢰도가 60% 이상인 경우 사용자 컴퓨터의 Download-인물이름 경로로 바로 저장됩니다.<br>
     이미지를 분석한 결과 신뢰도가 60% 이하인 경우 사용자가 직접 파일 이름을 입력할 수 있습니다.<br>
   <img src="https://github.com/yeonwookang/DuckDuck-Js/blob/master/sidebar/src/img/intro/7-1.PNG?raw=true" width="80%"></img><br>
   <img src="https://github.com/yeonwookang/DuckDuck-Js/blob/master/sidebar/src/img/intro/7-2.PNG?raw=true" width="80%"></img><br>
   <br><br>

  8. 인물 여러명 인식시 알림이 켜져 있는 경우, 2명 이상 인식 되면 사용자가 직접 파일 이름을 입력할 수 있습니다. <br>
   (해제된 경우에는 신뢰도가 가장 높은 인물을 기준으로 저장합니다.)<br>
   <img src="https://github.com/yeonwookang/DuckDuck-Js/blob/master/sidebar/src/img/intro/8-1.PNG?raw=true" width="80%"></img><br>
   <img src="https://github.com/yeonwookang/DuckDuck-Js/blob/master/sidebar/src/img/intro/8-2.PNG?raw=true" width="80%"></img><br>
   <br><br>

  9. 중복된 이미지를 저장하는 경우 사용자에게 알려줍니다. <br>
   <img src="https://github.com/yeonwookang/DuckDuck-Js/blob/master/sidebar/src/img/intro/9.png?raw=true" width="80%"></img><br>
   <br><br> 
   
  10. 기타 문의 사항이나 오류는 자주 묻는 질문을 참고해주세요.




--------------------------------------------------------------------------------------





# 자주 묻는 질문 (FAQ)
> 사용 방법을 확인했지만 충분하지 않은 경우 FAQ를 확인해주세요.
#### Q. 인물 분석 서비스가 작동하지 않아요.
먼저 서비스 서비스가 켜져있는지 확인하고, 꺼져 있는 경우 사이드바 영역 왼쪽 상단의 스위치를 켭니다. (단축키 Alt+S)

또는 이미지에서 마우스 오른쪽 클릭 후 기존의 '이미지 저장'이나 '다른 이름으로 저장'을 클릭하는 경우에는 서비스가 작동하지 않습니다. 대신,  이미지 저장하기를 클릭해주세요.

#### Q. 계속 '인물 인식 처리 중 문제가 발생했어요.' 창이 나타나요.

어덕편덕은 이미지의 용랑이 2MB 미만인 경우 가장 정확하게 작동합니다. 이미지 용량이 2MB 이상인 경우 이미지 크기를 줄여서 분석하기 때문에 신뢰도가 다소 낮아집니다. 

일명 움짤인 GIF 파일도 지원하나, 이경우 첫 프레임을 기준으로 인식하기에 신뢰도가 떨어집니다.

#### Q. 인물이 다른 이름으로 저장돼요.
어덕편덕은 네이버 Clova Face Recognition API로부터 분석 결과를 받아옵니다. 인물 이미지의 분석 결과는 이미지 저장시 팝업으로 확인하실 수 있습니다. 인물의 검색 빈도가 다소 낮은 경우 분석 결과가 정확하지 않을 수 있습니다.

#### Q. 계속 '서버와의 통신에 실패했습니다.' 창이 나타나요.
네트워크 상태가 불안정한 경우 인물 이미지 처리가 원할하지 않을 수 있습니다. 네트워크 상태를 확인해주세요. 네트워크 상태가 안정적이지만 해당 경고창이 지속적으로 나타난다면, 개발자 이메일로 문의주세요.

#### Q. 제가 다운로드 받은 사진이 서버에 저장되나요?
인물 인식 처리를 위해 임시 파일로 서버에 저장되지만, 주기적으로 임시 파일을 삭제하고 있으며 그외의 기록은 남기지 않습니다.

#### Q. 사진을 다른 위치에 저장하고 싶어요.
웨일 브라우저의 설정 - 다운로드와 캡처 - 위치에서 다운로드 위치를 변경할 수 있습니다.

#### Q. 특정 사이트에 있는 사진이 저장 안되요.
안타깝게도 어덕편덕은 기술적인 문제로 나무위키 및 일부 커뮤니티 사이트에서 지원이 안됩니다. 더 많은 사이트의 이미지를 편리하게 다운받을 수 있도록 더욱 더 노력할게요.





--------------------------------------------------------------------------------------




# 한계점
> 개선할 수 있도록 열심히 노력할게요!
* 어덕편덕은 Naver Clova Face Recognition API로부터 인물 분석 결과값을 받아옵니다. 종종 인물의 검색 빈도가 낮은 경우 분석 신뢰도의 정확도가 떨어지는 경우가 있습니다. 현재로서는 인물 신뢰도가 일정 수치 이하인 경우 사용자가 직접 이름을 입력할 수 있도록 처리하고 있습니다. 더 나은 해결 방안을 모색하도록 열심히 노력하겠습니다.

* 나무위키, 개드립닷컴 등 일부 커뮤니티 사이트에서 기능이 작동하지 않고 "서버와의 통신에 실패했습니다."라는 경고창이 뜹니다. 해당 사이트에서 보안상의 이유로 이미지 수집을 차단한 경우 어덕편덕 서버측에서 이미지를 저장하지 못하는 문제가 있습니다. 빠른 시일 내로 해결하도록 노력하겠습니다.
