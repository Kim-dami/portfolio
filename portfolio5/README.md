# 김다미 포트폴리오

설치나 빌드 없이 열 수 있는 HTML·CSS·JavaScript 웹사이트입니다.

## 2026-10-23 변경

- 첨부한 네 프로젝트의 썸네일과 배경색 적용
- 썸네일·자세히보기에서 독립된 상세 페이지로 이동
- 메인과 상세 페이지의 dami 로고 및 상단 메뉴·닫기 버튼 고정
- 상세 본문을 화면 너비에 맞춰 확장: PC 좌우 32–64px, 모바일 16px 여백
- Overview와 프로젝트 정보는 반응형 HTML로 구현
- 수정된 배달긱·푸드컨시어지·파트너센터 구간은 피그마 원본 에셋과 HTML·CSS로 구현
- 나머지 상세 디자인은 원본 섹션 경계에서 무손실 WebP로 분할, 원본 가로 2,800px 유지
- 섹션별 스크롤 등장, 고정 SCROLL 표시, 목업 뒤 워터마크 적용
- 확대 보기, Esc 닫기, 포커스 복귀 및 동작 줄이기 설정 지원

## 파일 구성

- `index.html`, `style.css`, `script.js`: 메인·소개·프로젝트 목록
- `sphere.js`: 그라데이션 구체 모션
- `project-bunyangsin.html`: 분양의신
- `project-baedalgeek.html`: 배달긱
- `project-food-concierge.html`: 푸드컨시어지
- `project-partner-center.html`: 파트너센터
- `project.css`, `project.js`: 상세 페이지 공통 디자인과 동작
- `figma-latest.css`: 수정된 피그마 본문 스타일
- `case-studies.json`: 상세 디자인 섹션별 구성 목록
- `assets/thumbnails/`: 사용자 첨부 썸네일
- `assets/mockups/`: 투명 배경 목업 원본
- `assets/case-studies/`: 상세 디자인 원본 섹션 이미지
- `assets/fonts/`, `licenses/`: 로컬 폰트 및 라이선스

## 로컬에서 보기

`index.html`을 브라우저에서 열거나, 이 폴더에서 다음을 실행합니다.

```sh
python3 -m http.server 8080
```

그런 다음 `http://localhost:8080`에 접속합니다. API 키나 외부 서비스 연결은 필요하지 않습니다.

## 기존 GitHub Pages 업데이트

이 폴더 **안의 파일과 assets 폴더 전체**를 `Kim-dami/portfolio` 저장소의 `portfolio5/` 안에 덮어써 주세요. 폴더 자체를 한 단계 더 중첩하지 않습니다.

기존 Pages 설정을 유지하면 주소는 다음과 같습니다.

https://kim-dami.github.io/portfolio/portfolio5/index.html

상세 페이지가 추가되어 `index.html`만 업로드하면 동작하지 않습니다. `project-*.html`, `project.css`, `project.js`, `assets/`를 함께 업로드해야 합니다.

## 내용 수정

- 소개와 프로젝트 제목: `index.html`
- 상세 소개·기간·역할·다음 프로젝트 링크: 각 `project-*.html`
- 공통 너비·고정 헤더·모션: `project.css`, `project.js`
- 상세 이미지를 바꿀 때: 해당 HTML의 이미지 경로·width·height와 `case-studies.json`을 함께 갱신

상세 이미지의 중간 조각에는 별도의 간격을 넣지 않습니다. `.case-section`이 하나의 완성된 디자인 섹션이며, 이 요소에 스크롤 등장 효과가 적용됩니다.
