# AG 한방 프롬프트: 사이트 전체 대개편

아래를 AG에 통째로 복붙.
토큰 초기화되면 "이어서 해줘. GEMINI.md 읽고 아직 안 한 것부터 계속해" 입력.

---

```
이 레포는 techblips.com — Hugo + PaperMod 기반 테크 블로그야.
GEMINI.md 파일을 먼저 읽고 모든 규칙을 따라.
main 브랜치에서 작업하고, 작업 완료되면 바로 commit + push 해줘.
Cloudflare Pages가 main push를 감지해서 자동 배포해.

## 핵심 방향

이 사이트의 콘텐츠 철학이 바뀌었어:
1. **두괄식**: 결론/결과를 맨 위에. 스크롤 없이 핵심 파악 가능하게.
2. **비주얼 퍼스트**: 텍스트 벽 금지. 테이블, 이미지, 코드블록, 다이어그램으로 보여줘.
3. **짧게**: 포스트는 500-800 단어 이내. 긴 글 아무도 안 읽어.
4. **실제 경험**: AI가 만든 느낌 나는 제너릭한 문장 전부 삭제.

## 절대 금지
- themes/ 폴더 수정 금지
- {{ define "head" }} 블록 사용 금지
- head 확장은 반드시 layouts/partials/extend_head.html 사용

## 수정 가능한 파일
- assets/css/extended/custom.css (전부 다시 써도 됨)
- layouts/_default/single.html
- layouts/partials/*.html
- static/css/radar.css
- static/js/radar.js
- layouts/radar/single.html
- hugo.toml
- content/ 폴더 전체
- 필요하면 layouts/index.html, layouts/404.html 새로 생성 가능

## 디자인 스펙
- 색상: #6c5ce7 (보라), #0ea5e9 (파랑), #f59e0b (노랑), #10b981 (초록)
- 폰트: Inter (이미 로드됨)
- 느낌: 미니멀, 임팩트, 화이트스페이스, 프로페셔널
- 레퍼런스: Vercel Blog, Linear Blog, Raycast Blog

---

### TASK 1: 홈페이지 대개편

1. 히어로 섹션:
   - 강렬한 한 줄 타이틀
   - 서브텍스트 짧게
   - CTA 버튼 2개 (Blog, Radar)
   - 그라데이션 배경 (브랜드 컬러 기반)

2. 포스트 카드 그리드:
   - 2컬럼 카드 (모바일 1컬럼)
   - 카드에 카테고리 뱃지 + 읽기시간
   - 호버: 살짝 올라가면서 그림자
   - 썸네일/이미지 영역 (없으면 그라데이션 플레이스홀더)

3. 네비게이션:
   - 이모지 제거, 텍스트만
   - 4개: Home | Blog | Radar | About

→ commit + push 하고 다음으로

---

### TASK 2: 포스트 상세 페이지

1. 레이아웃:
   - max-width: 720px
   - 큰 제목 + description이 서브타이틀처럼
   - 메타 정보 (날짜, 읽기시간, 태그) 깔끔하게

2. 타이포그래피:
   - 본문 line-height: 1.8
   - h2: 굵게, 하단 라인
   - 코드블록: 다크, 라운드, 언어 라벨
   - blockquote: 왼쪽 accent 보더
   - 이미지: 풀 width, 라운드 코너

3. author-card:
   - 인라인 스타일 → CSS 클래스
   - 깔끔한 카드 디자인

→ commit + push 하고 다음으로

---

### TASK 3: 레이더 페이지

1. 블립 호버 툴팁 (이름 + 링 + 카테고리)
2. 사이드바 카드형 리스트 + 필터 버튼
3. 레이더:사이드바 = 7:3
4. 모바일: 사이드바 아래로

→ commit + push 하고 다음으로

---

### TASK 4: About + 404 + 마감

1. About 페이지 리라이팅 (간결하게)
2. 404 페이지 생성
3. 검색, 카테고리 페이지 스타일
4. 프로그레스 바

→ commit + push 하고 다음으로

---

### TASK 5: 다크모드 + 반응형 전체 QA

1. 모든 컴포넌트 다크모드 대응
2. 860px 이하 모바일 전체 점검
3. 불필요한 CSS 정리

→ 최종 commit + push

모든 작업 끝나면: "사이트 대개편 완료. 모든 TASK commit + push 됨."
```
