# 어덕편덕

* 웨일 확장앱 공모전 참가작

# 추가해야할 기능 & 수정해야할 것
* 이미지 중복 처리 (수정)

# 인수인계 사항
### - 현재 진행 상황 (2018.11.25)
#### 0. 서버에 파이썬 모듈 업로드 완료 (파이썬 모듈 실행시 json문자열을 결과값으로 받습니다.)
#### 1. 이미지 다운로드시 신뢰도가 60%이하면 사용자에게 이대로 저장할 것인지 수정할 것인지 알림
#### 2. 사용자에게 파일 이름을 받는 경우 파일이름에 null값을 입력해버리면 원본이름으로 정리 (그외에 파일명으로 사용할 수 없는 문자 ex> .,?,! 등 처리해주어야함. - 면접 다녀와서 수정할게요!)
#### 3. 인물 여러명 인식시 알림 여부는 체크박스로 처리 (UI 수정 부탁해요. 지은짱!)
#### 4. 인물 여러명 일때는 각 인물 이름과 신뢰도 목록으로 보여주고 기본 파일이름값으로는 신뢰도가 가장 높은 인물을 줌
#### 5. 이미지 파일이 아닌 경우 또는 서버 모듈 장애(대부분 네트워크 문제)인 경우 원본이름으로 저장할지 알림


**대부분의 오류는 try-catch로 처리해서 수정되었으나 혹시 발견하는 오류가 있으면 알려주세요!**



-----------------------------------------------------------------
(작성중)

어떻게 사용하나요?

1. 웨일 확장앱에서 어덕편덕을 다운로드 받으시면, 사이드바에 아이콘이 나타납니다. 

2. 사이드바 페이지에서 오른쪽 상단에 있는 스위치로 서비스를 키고 끌 수 있습니다.

3. 원하시는 인물 이미지에서 마우스 오른쪽을 클릭하고 '이미지 저장'을 클릭하세요.
('다른 이름으로 저장' 클릭시 정상적으로 경로가 지정되지 않을 수도 있습니다.)

4. 인물 인식이 완료되고 분석 신뢰도가 60%이상인 경우 바로 사용자 컴퓨터의 '다운로드-인물이름'폴더로 저장됩니다. 

5. 분석 신뢰도가 60%이하인 경우 사용자가 직접 파일 이름을 입력할 수 있습니다.

6. '인물이 여러명 인식된 경우 알림'이 체크되어 있는 경우, 이미지 저장시 2명 이상 인식 되면 사용자가 직접 파일 이름을 입력할 수 있습니다.
(체크 해제된 경우에는 가장 신뢰도가 높은 인물을 기준으로 저장합니다.)

7. 기타 문의 사항이나 오류는 FAQ 탭을 참고해주세요.

FAQ. (최종 업데이트 2018.11.25)

Q. 인물이 다른 이름으로 저장돼요.
A. 어덕편덕은 네이버 클로버의 유명인 인식 서비스로부터 분석 결과를 받아옵니다. 인물 사진의 분석 결과는 어덕편덕 사이드바앱의 다운로드 로그에서 확인하실 수 있습니다. 분석 결과가 정확하지 않은 경우 Clova Face Recognition API의 개발자 포럼으로 문의주세요.

Q. 사진 저장 경로가 '다운로드-인물 폴더'가 아니에요.
A. 이미지에서 마우스 오른쪽 클릭 후 '다른 이름으로 저장'을 클릭하는 경우 경로가 제대로 지정되지 않습니다. 대신, '이미지 저장'을 클릭해주세요.

Q. 계속 '인물 사진 처리에 실패했습니다' 경고창이 나타나요. 
A. 네트워크 상태가 불안정한 경우 인물 사진 처리가 원할하지 않을 수 있습니다. 네트워크 상태를 확인해주세요. 네트워크 상태가 안정적이지만 해당 경고창이 지속적으로 나타난다면, 개발자 연락처로 문의주세요.

Q. 제가 다운로드 받은 사진이 서버에 저장되나요?
A. 인물 인식 처리를 위해 임시 파일로 저장되지만, 일정 시간 이후 자동으로 삭제되며 기록을 남기지 않습니다.

Q. 
