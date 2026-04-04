# Antigravity Session: 웹사이트 제대로 만들기

## 매 세션 시작 시 (필수)
```
이 레포는 techblips.com — Hugo + PaperMod 기반 테크 블로그야.
GEMINI.md 파일을 먼저 읽고 모든 규칙을 따라.
main 브랜치에서 작업하고, 작업 완료되면 바로 commit + push 해줘.
Cloudflare Pages가 main push를 감지해서 자동 배포해.
```

---

## SESSION 1: 홈페이지 완전 리디자인 (가장 먼저)
```
techblips.com의 홈페이지를 프로페셔널하게 리디자인해줘.

현재 문제:
- PaperMod 기본 테마 느낌이 너무 강함
- homeInfoParams가 텍스트만 있어서 밋밋함
- 포스트 카드가 기본 리스트 형태

해야 할 것:
1. layouts/index.html 오버라이드 생성 — PaperMod의 list.html 기반으로
2. 히어로 섹션 리디자인:
   - 큰 타이틀 + 서브텍스트 + CTA 버튼 (최신글 보기, Radar 보기)
   - 그라데이션 또는 서브틀한 배경 효과
3. 포스트 카드 그리드:
   - 2-3 컬럼 카드 레이아웃 (모바일은 1컬럼)
   - 카드에 호버 이펙트 (살짝 올라가면서 그림자)
   - 카테고리 뱃지, 읽기 시간 표시
4. "Featured" 또는 "Latest" 섹션 구분
5. assets/css/extended/custom.css 수정

디자인 레퍼런스: Vercel 블로그, Linear 블로그, Raycast 블로그
CSS 변수 시스템은 GEMINI.md 참고.
절대 themes/ 폴더 수정 금지.

commit + push
```

---

## SESSION 2: About 페이지 + 네비게이션 개선
```
About 페이지와 전체 네비게이션을 개선해줘.

1. content/about.md 리라이팅:
   - TechBlips 소개 (AI & 테크 트렌드 미디어)
   - 운영자 소개 (Henry, 간단하게)
   - 사이트의 목적과 가치
   - Contact 정보 또는 소셜 링크

2. 네비게이션 메뉴 개선 (hugo.toml의 [menu]):
   - 이모지 제거하고 텍스트만 깔끔하게
   - 메뉴 순서 정리: Home | Blog | Radar | About
   - 불필요한 카테고리 직링크 제거 (AI, Dev Tools, Trending → Blog 하나로)

3. 네비게이션 CSS:
   - 현재 페이지 하이라이트 (active state)
   - 모바일 햄버거 메뉴 개선
   - 스크롤 시 네비게이션 바 그림자 추가

commit + push
```

---

## SESSION 3: 포스트 상세 페이지 + 타이포그래피
```
블로그 포스트 상세 페이지를 읽기 좋게 개선해줘.

1. layouts/_default/single.html 개선:
   - 본문 max-width 적절하게 (700-750px)
   - 코드 블록 스타일링 (라운드 코너, 배경색, 복사 버튼 위치)
   - 이미지 처리 (max-width: 100%, 라운드 코너, 캡션)
   - 인용문(blockquote) 스타일링
   - h2, h3 앵커 링크
   
2. 타이포그래피:
   - 본문 line-height 1.7-1.8
   - 제목-본문 간격 조정
   - 리스트 아이템 간격
   - 코드 인라인 스타일 (백틱)
   
3. 포스트 하단:
   - author-card.html 스타일 개선
   - 관련 포스트 섹션
   - 이전/다음 글 네비게이션 스타일

commit + push
```

---

## SESSION 4: 다크모드 + 반응형 완성
```
다크모드와 모바일 반응형을 완벽하게 만들어줘.

1. 다크모드:
   - .dark 클래스의 CSS 변수 오버라이드 확인 및 보완
   - 카드 배경, 보더, 그림자 다크모드 대응
   - 코드 블록 다크모드 가독성
   - 레이더 페이지 다크모드 (radar.css)
   - 이미지 밝기 조절 (약간 어둡게)
   - 테마 토글 버튼 스타일

2. 모바일 반응형 (860px 이하):
   - 카드 1컬럼 전환
   - 네비게이션 메뉴 모바일 대응
   - 본문 패딩 조정
   - 레이더 페이지 터치 대응
   - 폰트 사이즈 조정
   - TOC 모바일 대응

commit + push
```

---

## SESSION 5: 레이더 페이지 비주얼 업그레이드
```
/radar/current/ 페이지의 시각적 퀄리티를 높여줘.

1. 레이더 시각화 (static/css/radar.css):
   - 블립 호버 시 툴팁 디자인 개선
   - 쿼드런트 라벨 가독성
   - 링 라벨 스타일링
   - 블립 크기와 색상 개선
   
2. 사이드바:
   - 블립 리스트를 카드 형태로
   - 필터 버튼 디자인 (쿼드런트별, 링별)
   - 검색 기능 스타일

3. 전체 레이아웃:
   - 레이더와 사이드바 비율 조정
   - 모바일에서 레이더 → 리스트 전환
   
commit + push
```
