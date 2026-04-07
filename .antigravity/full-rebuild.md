# AG 작업 매뉴얼 — 0xHenry 전체 자동화 순서

## 사용법
1. Antigravity 열기
2. ~/Desktop/techpulse-eng 레포 열기
3. 아래 세션 프롬프트를 **순서대로** 복붙
4. 각 세션이 끝나면 다음 세션 프롬프트 복붙
5. 토큰 리셋되면: "이어서 해줘. GEMINI.md 읽고 아직 안 한 TASK부터 계속해. main 브랜치, commit + push."

---

# 세션 1: 사이트 디자인 전면 리뉴얼

```
이 레포는 0xhenry.dev — Hugo + PaperMod 기반 테크 블로그야.
GEMINI.md 파일을 먼저 읽고 모든 규칙을 따라.
main 브랜치에서 작업. 완료되면 바로 commit + push.
Cloudflare Pages가 main push 감지해서 자동 배포.

## 핵심 방향
1. 두괄식: 결론 먼저. 스크롤 없이 핵심 파악.
2. 비주얼 퍼스트: 테이블, 이미지, 코드블록으로.
3. 짧게: 500-800 단어.
4. 이중 언어: EN/KO 버전 (hugo.toml에 multilingual 설정 완료됨)

## 절대 금지
- themes/ 폴더 수정 금지
- {{ define "head" }} 블록 금지 → extend_head.html 사용

## 디자인
- 색상: #6c5ce7, #0ea5e9, #f59e0b, #10b981
- 폰트: Inter
- 레퍼런스: Vercel Blog, Linear Blog, Raycast Blog

### TASK 1: 홈페이지
1. 히어로: 강렬한 타이틀 + 서브텍스트 + CTA 2개
2. 카드 그리드: 2컬럼 (모바일 1컬럼), 호버 효과, 카테고리 뱃지
3. 네비: Home | Blog | Radar | About (이모지 없이)
4. EN/KO 언어 토글 확인
→ commit + push

### TASK 2: 포스트 상세 페이지
1. max-width 720px, line-height 1.8
2. 코드블록: 다크, 라운드, 언어 라벨
3. author-card: 인라인 스타일 → CSS 클래스
4. 이전/다음 글, 태그, 공유 버튼
→ commit + push

### TASK 3: 레이더 페이지
1. 블립 호버 툴팁
2. 사이드바 카드형 + 필터
3. 모바일 대응
→ commit + push

### TASK 4: About + 404 + 마감
1. About 리라이팅 (EN/KO 둘 다)
2. 404 페이지 생성
3. 검색/카테고리 스타일
→ commit + push

### TASK 5: 다크모드 + 반응형 QA
1. 전체 다크모드 대응
2. 860px 이하 모바일 점검
3. 불필요한 CSS 정리
→ commit + push

끝나면: "세션 1 완료. 모든 TASK commit + push 됨."
```

---

# 세션 2: 콘텐츠 퀄리티 + 한국어 검수

```
GEMINI.md 먼저 읽어.
main 브랜치. commit + push.

### TASK 1: 한국어 포스트 검수
content/ko/posts/ 의 한국어 포스트 20개를 검수해줘.

체크:
1. 번역체 문장 → 자연스러운 한국어로 수정
2. 코드 블록은 영어 유지
3. 테이블 내용 한국어 확인
4. description 120자 이내
5. 한 세션에 전부 다 해줘

→ 수정된 파일 commit + push

### TASK 2: 영어 포스트 최종 검수
content/posts/ 의 영어 포스트 20개:

1. AI가 쓴 느낌 나는 문장 삭제/수정
2. 두괄식 확인 (결론이 맨 위?)
3. 500-800 단어 넘으면 줄이기
4. 이미지 플레이스홀더 위치 적절한지

→ commit + push

끝나면: "세션 2 완료."
```

---

# 세션 3: 주간 유지보수 (매주 반복)

```
GEMINI.md 먼저 읽어.
main 브랜치. commit + push.

매주 반복 작업:

### 1. 디자인 폴리시
- custom.css 호버/간격/그림자 미세 조정
- 다크모드 깨진 부분 수정
- 모바일 레이아웃 확인

### 2. 콘텐츠 리뷰
- content/posts/에서 3-5개 포스트 퀄리티 개선
- content/ko/posts/ 대응하는 한국어 포스트도 같이 수정
- AI 느낌 문장 제거
- 새 포스트 생성 금지

### 3. 레이더 비주얼
- radar.css 블립/필터 스타일 개선
- 다크모드 가시성

→ commit + push
끝나면: "주간 유지보수 완료."
```

---

# 세션 4: 새 포스트 작성 (필요할 때)

```
GEMINI.md 먼저 읽어.
main 브랜치. commit + push.

새 포스트를 EN + KO 동시에 작성해줘.

규칙:
1. content/posts/YYYY-MM-DD-slug.md (영어)
2. content/ko/posts/YYYY-MM-DD-slug.md (한국어)
3. 두괄식: 결론 먼저
4. 500-800 단어
5. 테이블, 코드블록 활용
6. 이미지 플레이스홀더 포함
7. tags 3개 이하
8. description 120자 이내
9. author: "Henry"

주제: [여기에 주제 입력]

→ EN + KO 둘 다 작성 후 commit + push
```

---

# 세션 5: 긴급 수정 (버그/에러 발생 시)

```
GEMINI.md 먼저 읽어.
main 브랜치. commit + push.

긴급 수정:
1. hugo --minify 빌드 에러 확인 및 수정
2. 깨진 레이아웃/CSS 수정
3. 깨진 링크 수정
4. 다크모드 깨진 부분 수정

에러 내용: [여기에 에러 설명]

→ 수정 후 commit + push
```

---

# 작업 캘린더

| 언제 | 세션 | 뭘 하나 |
|------|------|---------|
| 처음 1회 | 세션 1 | 사이트 디자인 전면 리뉴얼 |
| 처음 1회 | 세션 2 | 콘텐츠 검수 (EN/KO) |
| 매주 1회 | 세션 3 | 디자인 폴리시 + 콘텐츠 리뷰 |
| 필요할 때 | 세션 4 | 새 포스트 작성 |
| 에러 시 | 세션 5 | 긴급 수정 |
