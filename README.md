# 지구과학 World

직접 탐구하고 체험하는 지구과학 인터랙티브 수업 자료실입니다. GitHub Pages용 정적 웹사이트입니다.

## 폴더 구성
- `index.html`: 지구과학 World 메인 화면 (주제별 학습실 목록)
- `Eclipses/`: 일식과 월식 학습실
  - `Eclipse_index.html`: 학습실 메뉴
  - `shadow.html`: 체험 01 · 본그림자, 반그림자, 금환그림자
  - `eclipses.html`: 체험 02 · 일식과 월식의 원리
  - `solareclipse.html`: 체험 03 · 달의 그림자와 일식의 진행
  - `orbit_eclipse.html`: 체험 04 · 일식과 월식이 매달 일어나지 않는 이유
  - `lib/world.js`: `solareclipse.html`이 쓰는 세계 지도 데이터 (ECharts 4.9.0, Apache License 2.0)
- `Star/`: 별의 물리량 학습실
  - `Star_index.html`: 학습실 메뉴
  - `radiation.html`: 탐구 01 · 복사 법칙
  - `spectrum.html`: 탐구 02 · 여러 가지 스펙트럼
  - `luminosity.html`: 탐구 03 · 별의 광도

## 페이지 연결
- 메인 화면 → 각 학습실 메뉴(`Eclipses/Eclipse_index.html`, `Star/Star_index.html`)
- 학습실 메뉴 → 각 자료, 상단의 "← 지구과학 World"로 메인 화면 복귀
- 각 자료 → 상단의 "메뉴로 돌아가기"로 해당 학습실 메뉴 복귀

## GitHub Pages 게시
1. GitHub에서 `earth-science-world` 저장소를 만듭니다.
2. 이 폴더의 **내용물**(`index.html`, `Eclipses/`, `Star/` 등)을 저장소 루트에 업로드합니다.
3. 저장소의 Settings → Pages로 이동합니다.
4. Build and deployment에서 `Deploy from a branch`를 선택합니다.
5. Branch는 `main`, 폴더는 `/(root)`로 선택하고 Save를 누릅니다.
6. 게시된 주소를 열어 메인 화면에서 각 학습실과 자료가 차례로 열리는지 확인합니다.

## 주의할 점
- GitHub Pages는 파일·폴더 이름의 **대소문자를 구분**합니다. `Eclipses`, `Star`, `Eclipse_index.html`, `Star_index.html`의 이름을 바꾸면 링크도 함께 고쳐야 합니다.
- `solareclipse.html`은 세계 지도 데이터를 폴더 안의 `Eclipses/lib/world.js`에서 먼저 읽으므로 인터넷이 없어도 지도가 표시됩니다. 이 파일이 없을 때만 인터넷(CDN)에서 받아 옵니다. 사이트를 옮기거나 올릴 때 `lib` 폴더도 함께 넣어 주세요.
- 글꼴은 Google Fonts에서 불러오므로, 오프라인에서는 컴퓨터의 기본 글꼴로 표시됩니다(기능에는 영향 없음).

## 새 자료 추가
1. 해당 학습실 폴더(`Eclipses/` 또는 `Star/`)에 HTML 파일을 넣습니다.
2. 자료 상단에 학습실 메뉴로 돌아가는 링크를 둡니다. 예: `<a class="back" href="./Star_index.html">← [별의 물리량] 메뉴로 돌아가기</a>`
3. 학습실 메뉴 파일에 카드(`<a class="card" href="./새파일.html">…</a>`)를 추가합니다.

새 학습실을 만들 때는 폴더와 메뉴 파일을 만들고, 루트 `index.html`의 `subject-list`에 카드를 추가합니다.

## 제목 수정
- 메인 페이지 제목과 학습실 카드: 루트 `index.html`
- 학습실 제목과 자료 카드: 각 폴더의 `Eclipse_index.html`, `Star_index.html`
- 개별 자료의 제목: 각 자료 HTML 안의 `<title>` 또는 `<h1>`
