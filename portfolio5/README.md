# 김다미 포트폴리오

HTML · CSS · JavaScript로 구성한 정적 웹사이트입니다. 설치나 빌드 없이 GitHub Pages에서 사용할 수 있습니다.

## 폴더 구성

- `index.html`: 메인, 소개, 프로젝트 화면과 팝업 구조
- `style.css`: 전체 디자인, 반응형 레이아웃, 모션 스타일
- `script.js`: 메뉴 이동, 스크롤 전환, 커서, 상세 팝업
- `sphere.js`: 메인 그라데이션 구체와 색상 전환
- `projects.json`: 프로젝트별 상세 포트폴리오 이미지 목록 원본
- `update-projects.py`: JSON 변경 내용을 HTML 내부 데이터에 반영하는 관리 스크립트
- `assets/`: 현재 사용하는 이미지, 폰트, Lenis 스크롤 라이브러리
- `.nojekyll`: 정적 파일을 그대로 제공하도록 설정

## GitHub Pages에 올리기

1. GitHub에서 저장소를 만들거나 기존 포트폴리오 저장소를 엽니다.
2. 이 폴더 **안의 내용 전체**를 저장소 루트에 업로드하고 커밋합니다. `index.html`이 저장소 첫 화면에 보이는 위치여야 합니다.
3. 저장소의 **Settings → Pages**로 이동합니다.
4. **Build and deployment → Source**에서 **Deploy from a branch**를 선택합니다.
5. **Branch**를 업로드한 브랜치(예: `main`), 폴더를 **/ (root)**로 선택하고 저장합니다.
6. 배포가 끝나면 Pages에 표시되는 주소를 엽니다.

`https://사용자명.github.io/저장소명/` 형태에서도 동작하도록 파일 경로는 상대 경로로 작성했습니다. 저장소 이름을 `사용자명.github.io`로 만들면 기본 주소에서도 사용할 수 있습니다.

## 로컬에서 확인하기

이 폴더에서 다음 명령을 실행하고 브라우저에서 `http://localhost:8080`을 엽니다.

```sh
python3 -m http.server 8080
```

팝업 데이터가 `index.html`에 포함되어 있어 JSON 파일을 별도로 요청하지 않습니다. 위 HTTP 서버로 배포 환경과 동일하게 확인할 수 있습니다.

## 수정할 때

- 본문과 프로젝트 소개: `index.html`
- 색상, 크기, 여백: `style.css`
- 상세 포트폴리오 페이지: `assets/projects/`와 `projects.json`을 수정한 뒤 `python3 update-projects.py` 실행
- 구체 색상과 전환 시간: `sphere.js`의 `palettes`, `paletteDuration`

기존 대표 목업, 상세 포트폴리오, 로컬 폰트를 함께 포함했습니다. 로그인·API 키·외부 호스팅 서비스 연결은 필요하지 않습니다.

## 참고 및 라이선스

- [GitHub Pages 공식 배포 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Lenis](https://github.com/darkroomengineering/lenis), [Pretendard](https://github.com/orioncactus/pretendard), [Cormorant Garamond](https://github.com/CatharsisFonts/Cormorant)의 라이선스는 `licenses/`에 포함했습니다.
