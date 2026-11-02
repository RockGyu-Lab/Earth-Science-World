/* 저작권 표시: 모든 페이지 아래쪽에 작게 고정 (내용을 밀어내지 않아 패드 한 화면 맞춤에 영향 없음)
   오른쪽 끝은 본문(main 또는 .wrap)의 내용이 끝나는 자리에 맞춤
   문구를 바꿀 때는 아래 TEXT만 고치면 모든 페이지에 함께 반영됨 */
(function () {
  var TEXT = '© Rock Gyu';
  var s = document.createElement('style');
  s.textContent = '.copyright{position:fixed;right:10px;bottom:4px;z-index:50;pointer-events:none;' +
    'font:500 11px/1.4 "Pretendard Variable",Pretendard,system-ui,-apple-system,"Noto Sans KR",sans-serif;' +
    'letter-spacing:.02em;color:rgba(120,126,142,.85);text-shadow:0 0 3px rgba(255,255,255,.6)}' +
    '@media (prefers-color-scheme:dark){.copyright{color:rgba(170,176,192,.8);text-shadow:0 0 3px rgba(0,0,0,.6)}}' +
    '@media print{.copyright{position:static;text-align:right;margin:8px}}';
  document.head.appendChild(s);
  var d = document.createElement('div');
  d.className = 'copyright';
  d.textContent = TEXT;
  document.body.appendChild(d);

  var box = document.querySelector('main') || document.querySelector('.wrap');
  function align() {
    if (!box) return;
    var r = box.getBoundingClientRect(), pr = parseFloat(getComputedStyle(box).paddingRight) || 0;
    d.style.right = Math.max(4, document.documentElement.clientWidth - (r.right - pr)) + 'px';
  }
  align();
  window.addEventListener('resize', align);
  window.addEventListener('load', align);
  if (box && window.ResizeObserver) new ResizeObserver(align).observe(box);
})();
