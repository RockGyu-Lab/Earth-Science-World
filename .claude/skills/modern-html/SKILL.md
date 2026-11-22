---
name: modern-html
description: 수업용 인터랙티브 HTML 자료(지구과학 World, 통합과학 World, Earth-Test-Lab)의 HTML·CSS·JavaScript를 짜거나 고칠 때 따르는 최신 작성법과 지원 범위 기준. 새 자료·새 탭·팝업·애니메이션·그래프를 만들거나, 기존 코드의 구조·동작을 손볼 때 먼저 읽는다. 설명 글만 고칠 때는 읽지 않아도 된다.
---

# 최신 HTML 작성법 (수업용 단일 HTML 자료)

이 저장소의 자료는 빌드 도구 없이 **HTML 파일 하나에 CSS와 JS를 함께 넣은** 정적 페이지이고, GitHub Pages로 게시한다.
이 문서는 코드를 **어떻게** 짤지를 정한다. 화면에 **무엇을** 어떻게 보여 줄지(단추 색, 단계 설명 상자, 그림 폭, 용어 등)는 `CLAUDE.md`가 정하며, 둘이 부딪히면 `CLAUDE.md`를 따른다.

## 0. 먼저 지킬 것
- **기존 파일을 고칠 때는 그 파일의 방식에 맞춘다.** 이 문서와 다르다는 이유만으로 요청받지 않은 부분을 다시 짜지 않는다(`CLAUDE.md` 작업 원칙 2). 바꾸면 좋겠다고 보이면 사용자에게 먼저 제안한다.
- **새로 짜는 코드**(새 자료, 새 탭, 새 팝업, 새 애니메이션)는 이 문서를 따른다.
- 화면 모양과 동작이 학생에게 똑같이 보이는 것이 기준이다. 코드 방식을 바꿀 때도 보이는 결과는 바뀌지 않아야 한다.

## 1. 지원 범위 (학교 컴퓨터와 학생 기기)
학교 컴퓨터는 업데이트가 늦고, 학생 태블릿은 오래된 iPad인 경우가 많다. 다음을 기준으로 한다.

| 기준 | 버전 |
|---|---|
| Chrome · Edge · Whale (Windows, 크롬북) | 108 이상 (2022년 말) |
| Safari (iPad · iPhone · Mac) | 15.4 이상 (iPadOS 15.4, 2022년 3월) |
| Samsung Internet | 21 이상 |

- **그냥 써도 되는 것:** CSS 변수, flex·grid·`gap`, `clamp()`·`min()`·`max()`, `aspect-ratio`, `dvh`(바로 앞에 `vh` 대체값을 함께), `:focus-visible`, `:is()`·`:where()`, `inset`, `prefers-color-scheme`, `prefers-reduced-motion`, `color-scheme`, `<dialog>`와 `showModal()`, Pointer Events, `ResizeObserver`, `structuredClone`, 선택적 연결 `?.`·`??`, `Array.prototype.at()`.
- **대체 방법과 함께만 쓰는 것:** `inert` 속성(Safari 15.5), `:has()`(Chrome 105), 컨테이너 쿼리 `@container`(Safari 16). 없어도 화면이 깨지지 않게 쓴다.
- **쓰지 않는 것:** CSS 중첩(Safari 17.2), `popover` 속성(Safari 17), `@starting-style`, View Transitions, `color-mix()`(Safari 16.2), 아직 실험 중인 기능 전부.
- 버전이 확실하지 않은 기능은 MDN의 호환성 표(Browser compatibility)로 확인한 뒤 쓴다. 기준보다 새로우면 쓰지 않는다.

## 2. 문서 기본 틀
```html
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<!-- 테스트 사이트(Earth-Test-Lab)만: <meta name="robots" content="noindex"> -->
<title>탐구 NN · 제목</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css">
<style>/* … */</style>
</head>
<body>
<main> … </main>
<script> /* 맨 끝에 둔다 */ </script>
<script src="../copyright.js"></script>
</body>
</html>
```
- `lang="ko"`를 반드시 넣는다(화면 낭독기, 줄바꿈, 맞춤법 처리에 쓰임).
- 스크립트는 `</body>` 바로 앞에 두어 DOM이 다 만들어진 뒤 실행되게 한다.

## 3. CSS
- **색은 변수로:** `:root`에 `--bg`, `--fg`, `--card`, `--acc` 등을 두고, 다크 화면은 같은 변수를 다시 정한다. 그림판(SVG·canvas)은 사이트 공통으로 어두운 판(#0b1026 계열) 위에 밝은 글씨이므로, 그림 안 글자색은 화면 모드와 상관없는 고정색을 쓴다.
- `color-scheme: light dark`를 `:root`에 넣어 스크롤 막대·입력 칸도 화면 모드를 따르게 한다.
- **화면 높이:** `height: 100vh; height: 100dvh;`처럼 `vh`를 먼저 쓰고 `dvh`로 덮는다(오래된 기기 대비).
- **크기:** 글자·여백은 `clamp()`로 화면 폭에 맞춘다. 고정 px 미디어 쿼리를 늘리기보다 `clamp()`와 grid의 `minmax()`를 먼저 쓴다.
- **키보드 초점:** `outline: none`으로 초점 표시를 지우지 않는다. 지워야 하면 `:focus-visible`에 다른 표시(테두리, 그림자)를 반드시 준다.
- **움직임 줄이기:** 계속 움직이는 효과(반짝임, 무한 회전)는 `@media (prefers-reduced-motion: reduce)`에서 멈추거나 줄인다. 학습 내용 자체인 애니메이션(재생 단추로 보는 과정)은 그대로 둔다.
- `!important`는 `[hidden]` 처리처럼 꼭 필요한 곳에만 쓴다.

## 4. HTML 구조와 접근성
- **동작은 `<button type="button">`, 이동은 `<a href>`.** `div`에 `onclick`을 달아 단추처럼 쓰지 않는다.
- **위쪽 탭:** `role="tablist"` 안에 `role="tab"` 단추, 각 탭에 `aria-selected`·`aria-controls`, 내용에 `role="tabpanel"`. 고른 탭만 `tabindex="0"`, 나머지는 `-1`이고 ←/→ 키로 옮겨 간다(기존 `openTab` 방식).
- **팝업(정답 확인, 자세히 이해하기, 읽을거리):** 새로 만드는 팝업은 `<dialog>`와 `showModal()`로 만든다.
  - Esc로 닫힘, 뒤쪽 화면 클릭·초점 막기, 닫은 뒤 초점 되돌리기를 브라우저가 해 준다.
  - 바깥(배경)을 누르면 닫히게: `dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });` (안쪽 내용은 `<div>`로 한 번 감싼다)
  - 배경 색은 `dialog::backdrop`으로 준다.
  - 기존 `div.ov` 팝업이 있는 파일에 팝업을 하나 더할 때는, 한 파일 안에서 방식이 섞이지 않도록 그 파일의 `div.ov` 방식을 따른다.
- **그림:** 설명이 필요한 SVG에는 `role="img"`와 `aria-label`(무엇을 보여 주는지 한 문장). 꾸밈용 그림은 `aria-hidden="true"`.
- **바뀌는 설명:** 단계마다 바뀌는 설명 상자에는 `aria-live="polite"`를 준다.
- **표:** 수치 비교는 그림보다 `<table>`(머리칸 `<th>`)이 낫다.

## 5. JavaScript
- `const`·`let`만 쓴다(`var` 쓰지 않음). 화살표 함수, 템플릿 문자열을 쓴다.
- 이벤트는 `addEventListener`로 단다. HTML 속성(`onclick="…"`)은 쓰지 않는다.
- `document.write`는 쓰지 않는다(외부 자원 대체 방법은 7번).
- 글자만 넣을 때는 `textContent`, 직접 만든 HTML 조각을 넣을 때만 `innerHTML`.
- **애니메이션:**
  - `requestAnimationFrame`을 쓰고, 프레임 수가 아니라 **지난 시간(ms)**으로 진행한다(빠른 화면·느린 컴퓨터에서 같은 빠르기).
  - 한 번에 고르는 간격은 최대값을 둔다(예: `Math.min(0.05, dt)`). 탭이 숨었다 돌아올 때 그림이 건너뛰지 않게.
  - 탭·작은 메뉴를 바꾸면 돌던 애니메이션을 `cancelAnimationFrame`으로 반드시 멈춘다.
  - 반짝임처럼 되풀이되는 효과는 `setInterval`보다 CSS 애니메이션으로 만든다.
- **끌기·누르기:** Pointer Events(`pointerdown`·`pointermove`·`pointerup` + `setPointerCapture`)로 마우스·손가락·펜을 한꺼번에 처리하고, 끄는 영역에 `touch-action: none`을 준다. 키보드로도 같은 조작이 되게 ←/→ 키를 함께 단다.
- **canvas:** `devicePixelRatio`만큼 키워 그려 선명하게 하고, 크기가 바뀌는 것은 `ResizeObserver`로 감지한다.
- **움직임 줄이기 설정 읽기:** `matchMedia('(prefers-reduced-motion: reduce)').matches`.
- 전역 변수가 많아지면 한 탭의 코드를 `{ … }` 블록이나 함수로 묶어 이름이 겹치지 않게 한다.

## 6. SVG와 canvas 고르기
- **SVG:** 이름표·화살표·눈금이 많은 개념도, 확대해도 선명해야 하는 그림, 요소를 눌러야 하는 그림.
- **canvas:** 점이 수천 개 이상이거나(해수면 온도 지도 등) 매 프레임 전체를 다시 그리는 그림.
- SVG를 매 프레임 `innerHTML = ''`로 비우고 다시 만들면 요소가 많을 때 느려진다. 움직이는 부분만 속성(`setAttribute`)으로 바꾸는 방식을 먼저 생각한다.

## 7. 외부 자원과 오프라인
- 기능에 꼭 필요한 라이브러리·데이터는 학습실의 `lib/`에 두고 먼저 읽는다(`CLAUDE.md` 4번).
- `lib/` 파일이 없을 때만 CDN을 쓰는 대체 방법은 `document.write` 대신 다음처럼 한다.
  ```html
  <script src="./lib/world.js"></script>
  <script>
  if (!window.WORLD) {               // lib 파일이 정한 이름으로 확인
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/…';
    s.onload = start;                 // 불러온 뒤 시작
    document.head.append(s);
  } else start();
  </script>
  ```
- 글꼴(Pretendard)은 CDN을 써도 된다. 없으면 기본 글꼴로 보이므로 기능에는 지장이 없다.

## 8. 확인 방법 (클라우드 세션, Playwright + Chromium)
고친 뒤 다음을 확인한다. 사무실 PC에서는 `CLAUDE.md`의 Edge 방법을 쓴다.
1. **오류:** `page.on('pageerror')`로 스크립트 오류가 없는지.
2. **화면 크기:** 1024×700, 768×1000에서 제목 줄·글·단추가 그림 폭과 맞는지(`CLAUDE.md` 6번).
3. **화면 모드:** `colorScheme: 'dark'`와 `'light'`로 각각 찍어 글자가 보이는지.
4. **움직임 줄이기:** `reducedMotion: 'reduce'`에서 깨지지 않는지.
5. **오프라인:** `page.route('**/*', r => r.request().url().startsWith('file:') ? r.continue() : r.abort())`로 외부 접속을 막고 기능이 동작하는지.
6. **키보드:** Tab으로 단추·탭에 초점이 보이고, Enter/Space로 눌리며, 팝업이 Esc로 닫히는지.

화면 사진은 사용자에게 보여 줄 것이면 `deviceScaleFactor: 2`, 확인용이면 1로 찍는다.
