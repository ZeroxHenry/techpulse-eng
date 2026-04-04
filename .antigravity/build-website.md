# Antigravity: TechBlips 웹사이트 완전 리빌드

## 매 세션 시작 시 반드시 먼저 입력:
```
이 레포는 techblips.com — Hugo + PaperMod 기반 테크 블로그.
GEMINI.md 파일을 먼저 읽고 규칙을 따라.
main 브랜치에서 작업. 완료되면 commit + push.
Cloudflare Pages가 main push 감지해서 자동 배포.
```

---

# SESSION 1: 홈페이지 완전 리디자인

아래를 AG에 통째로 복붙:

```
techblips.com 홈페이지를 Vercel 블로그, Linear 블로그 수준으로 완전히 리디자인해줘.

먼저 GEMINI.md를 읽어.

## 현재 상태
- PaperMod 기본 테마 + custom.css(713줄) 으로 커스텀된 상태
- 홈페이지는 PaperMod의 homeInfoParams로 히어로 텍스트만 표시
- 포스트 리스트는 PaperMod 기본 리스트 형태
- 네비게이션에 이모지 사용 중 (촌스러움)

## 수정 가능한 파일들
- assets/css/extended/custom.css — 메인 CSS (전부 다시 써도 됨)
- layouts/_default/single.html — 포스트 상세 페이지 (이미 오버라이드됨)
- layouts/partials/extend_head.html — head 확장
- layouts/partials/footer.html — 푸터
- layouts/partials/newsletter.html — 뉴스레터 폼
- layouts/partials/author-card.html — 저자 카드
- hugo.toml — Hugo 설정, 네비게이션 메뉴

## 절대 금지
- themes/ 폴더 절대 수정 금지
- PaperMod 테마 파일 건들지 마
- {{ define "head" }} 블록 사용 금지 (PaperMod에서 안 됨)
- head 확장은 반드시 layouts/partials/extend_head.html 사용

## 해야 할 것

### 1. 네비게이션 메뉴 (hugo.toml)
- 이모지 전부 제거
- 메뉴 정리: Home | Blog | Radar | About (4개만)
- AI, Dev Tools, Trending 카테고리 직링크 제거

### 2. 홈페이지 히어로 섹션
- hugo.toml의 homeInfoParams 수정
- 또는 layouts/index.html 오버라이드 생성
- 큰 타이틀 + 서브텍스트 + CTA 버튼 2개 (Latest Posts, Tech Radar)
- 서브틀한 그라데이션 배경 (현재 것 개선 또는 교체)
- 프로페셔널하고 임팩트 있게

### 3. 포스트 카드 리스트
- 카드 그리드 레이아웃 (데스크톱 2컬럼, 모바일 1컬럼)
- 카드 호버 시 살짝 올라가면서 그림자 (현재 것 개선)
- 카테고리 뱃지 색상 구분
- 읽기 시간, 날짜 표시 개선
- 깔끔한 간격과 정렬

### 4. 다크모드 완벽 대응
- custom.css의 [data-theme=dark] 섹션 보완
- 카드, 히어로, 코드블록, 네비게이션 전부 다크모드 대응
- 다크모드 전환 시 깜빡임 없이 부드럽게

### 5. 모바일 반응형 (860px 이하)
- 카드 1컬럼
- 네비게이션 모바일 메뉴 개선
- 히어로 섹션 폰트 축소
- 전체적인 패딩/마진 조정

### 6. 푸터 개선
- 저작권 + 간단한 링크 (Home, Radar, About)
- 뉴스레터 폼은 유지하되 스타일 개선

### 디자인 참고
- 색상: #6c5ce7 (보라), #0ea5e9 (파랑), #f59e0b (노랑), #10b981 (초록)
- 폰트: Inter (이미 로드됨)
- 느낌: 미니멀, 클린, 화이트스페이스 충분히, 프로페셔널

작업 완료 후 commit + push 해줘.
```

---

# SESSION 2: 포스트 상세 페이지 + 타이포그래피

```
techblips.com의 블로그 포스트 상세 페이지를 리디자인해줘.

먼저 GEMINI.md를 읽어.

## 수정 파일
- layouts/_default/single.html — 이미 오버라이드되어 있음
- assets/css/extended/custom.css — .post-content 관련 섹션
- layouts/partials/author-card.html — 인라인 스타일 → CSS 클래스로 교체

## 해야 할 것

### 1. 본문 레이아웃
- max-width: 720px, 중앙 정렬
- line-height: 1.8
- 충분한 문단 간격

### 2. 코드 블록
- 다크 배경 (#1e1e2e 계열)
- 라운드 코너 12px
- 상단에 언어 라벨 표시
- 복사 버튼 위치/스타일 개선
- 인라인 코드는 accent 배경

### 3. 타이포그래피
- h2: 볼드, 하단 보더, 위 여백 충분히
- h3: accent 색상
- blockquote: 왼쪽 accent 보더 + 연한 배경
- 리스트 아이템 간격
- 링크: accent 색상 + 밑줄 호버

### 4. 이미지
- max-width: 100%
- border-radius: 8px
- 캡션 스타일 (figcaption)

### 5. author-card.html 개선
- 인라인 스타일 제거 → CSS 클래스 사용
- 아바타: 그라데이션 원형 배경에 "H"
- 이름 + 한 줄 소개
- 호버 시 약간의 그림자 추가

### 6. 포스트 하단
- 태그 뱃지 스타일 유지/개선
- 이전/다음 글 네비게이션 카드 스타일
- 공유 버튼 아이콘 정리

### 7. 다크모드 + 모바일 대응
- 코드 블록, 인용문, 카드 전부 다크모드 대응
- 모바일에서 코드 블록 가로 스크롤

commit + push
```

---

# SESSION 3: 레이더 페이지 비주얼 업그레이드

```
techblips.com/radar/current/ 레이더 페이지를 시각적으로 업그레이드해줘.

먼저 GEMINI.md를 읽어.

## 수정 파일
- static/css/radar.css — 레이더 전용 CSS
- static/js/radar.js — D3.js 시각화 (조심해서 수정)
- layouts/radar/single.html — 레이더 페이지 레이아웃

## 현재 상태
- D3.js로 원형 레이더 그려짐
- 블립(점) 30개, 4 쿼드런트, 4 링
- 블립 클릭 시 상세 페이지 이동
- 사이드바에 블립 리스트

## 해야 할 것

### 1. 블립 인터랙션
- 호버 시 툴팁 (이름 + 카테고리 + 링)
- 호버 시 블립 약간 커지는 효과
- 클릭 피드백

### 2. 사이드바
- 블립 리스트를 카드 형태로
- 쿼드런트별 필터 버튼 (컬러 매칭)
- 링별 필터 (Adopt/Trial/Assess/Hold)

### 3. 쿼드런트 라벨
- 가독성 높이기
- 반투명 배경 + 볼드

### 4. 전체 레이아웃
- 레이더 + 사이드바 비율 조정 (7:3)
- 충분한 패딩
- 상단에 레이더 설명 텍스트

### 5. 모바일
- 레이더 크기 자동 조절
- 모바일에서 사이드바를 레이더 아래로

### 6. 다크모드
- 쿼드런트 배경색 다크 대응
- 블립 색상 다크모드 가시성
- 보더, 라벨 전부 대응

commit + push
```

---

# SESSION 4: About 페이지 + 전체 마감

```
techblips.com의 About 페이지와 사이트 전체 마감 작업을 해줘.

먼저 GEMINI.md를 읽어.

## 해야 할 것

### 1. About 페이지 (content/about.md)
- 현재 텍스트 개선 (더 프로페셔널하게)
- TechBlips 소개: AI & 테크 트렌드를 빠르게 전달하는 미디어
- Henry 소개: 간결하게
- 사이트 목적과 가치
- Contact 섹션

### 2. 검색 페이지 스타일
- #searchbox 스타일 개선
- 검색 결과 카드 스타일 포스트 카드와 통일

### 3. 카테고리/태그 페이지
- .terms-tags 스타일 개선
- 카테고리별 색상 구분
- 포스트 수 뱃지 개선

### 4. 404 페이지
- layouts/404.html 생성 (없으면)
- 심플한 디자인 + 홈으로 돌아가기 버튼

### 5. 스크롤 프로그레스 바
- 현재 .progress-bar CSS 개선
- 모든 브라우저 호환

### 6. 전체 QA
- 모든 페이지 다크모드 확인
- 모든 페이지 모바일 확인
- 불필요한 CSS 정리
- 성능 체크 (불필요한 animation 제거)

commit + push
```

---

# 세션 순서

| 순서 | 내용 | 예상 시간 |
|------|------|----------|
| 1 | 홈페이지 + 네비 + 전체 레이아웃 | 3-5시간 |
| 2 | 포스트 상세 + 타이포그래피 | 2-3시간 |
| 3 | 레이더 페이지 비주얼 | 2-3시간 |
| 4 | About + 전체 마감 | 2-3시간 |

AG 세션이 5시간이니까 하루 1세션씩, 4일이면 완성.
