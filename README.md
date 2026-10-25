# 지구과학 World

GitHub Pages용 정적 웹사이트 시작 파일입니다.

## 폴더 구성
- `index.html`: 지구과학 World 메인 화면
- `eclipse/index.html`: 일식과 월식 주제 페이지
- `eclipse/shadow-types/index.html`: 본그림자와 반그림자 인터랙티브 자료
- `eclipse/eclipse-principle/index.html`: 일식과 월식의 원리 인터랙티브 자료

## GitHub Pages 게시
1. GitHub에서 `earth-science-world` 저장소를 만듭니다.
2. 이 ZIP의 **내용물**을 저장소 루트에 업로드합니다. ZIP 파일 자체만 올리는 것이 아닙니다.
3. 저장소의 Settings → Pages로 이동합니다.
4. Build and deployment에서 `Deploy from a branch`를 선택합니다.
5. Branch는 `main`, 폴더는 `/(root)`로 선택하고 Save를 누릅니다.
6. 게시된 주소를 열어 메인 화면에서 두 자료가 차례로 열리는지 확인합니다.

## 제목 수정
- 메인 페이지 제목: 루트 `index.html`
- 주제 페이지 제목 및 두 자료의 카드 제목: `eclipse/index.html`
- 개별 HTML 안에 보이는 제목은 각 자료의 `index.html` 안의 `<title>` 또는 `<h1>`에서 수정할 수 있습니다.

현재 두 인터랙티브 HTML의 본문과 기능은 유지했으며, 각 자료 상단에 주제 페이지로 돌아가는 링크만 추가했습니다.
