# **아토믹 디자인 패턴이란**

아토민 디자인 패턴은 폴더가 원자(atoms), 분자(molecules), 유기체(organisms), 템플릿(templates), 페이지(pages) 이렇게 5단계로 구성되어 있다.

- 원자(atoms)
  검색 버튼이나 기타 글자, 이미지 등 더이상 쪼갤 수 없는 것들이 들어간다.<br>
  이 외에도 글꼴, 색상 팔레트, 애니메이션 같은 추상적인 요소도 들어갈 수 있다.
- 분자(molecules)
  원자(atoms)를 모여져 최소 한가지의 기능을 수행하는 것들이 들어간다.<br>
  검색창이나 네비게이션 바 등, 토스트 등이 들어간다.
  이때 분자는 그 기능을 잘 수행해야 하는 것이 좋다.
- 유기체(organisms)
  원자(atoms)와 분자(molecules)가 모여 만들어진다.<br>
  유기체는 로고, 검색 창, 소셜 미디어 채널 같은 것들이 구성될 수 있다.<br>
  유기체는 독립적이고 재사용 가능한 구성 요소로 만드는 것이 좋다.
- 템플릿(templates)
  템플릿은 한 페이지를 구성하기 위한 유기체의 그룹으로 구성된다.<br>
  아직 데이터가 존재하지 않는 최종 레이아웃의 형태를 띈다.
- 페이지(pages)
  템플릿의 인스턴스로 여기에는 사용자가 보게 될 내용들로 대체되어 최종 디자인의 형태를 갖는다.
