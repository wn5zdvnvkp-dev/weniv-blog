# 🚀 위니브 블로그 프로젝트 (Weniv Blog)
> **바울랩/위니브** 가이드라인을 기반으로 제작한 개인 블로그 웹 사이트입니다.  
> Vanilla JS를 활용하여 회원가입, 로그인, 게시글 관리(CRUD) 기능을 구현합니다.

---

## 📌 주요 요구사항
- **인증**: 회원가입/로그인 및 JWT 토큰 관리
- **목록**: 전체 포스트 목록 표시 (썸네일, 제목, 작성자 등)
- **상세**: 포스트 상세 정보 노출 및 본인 작성 글 수정/삭제
- **작성/수정**: 유효성 검사를 포함한 포스트 에디터 구현

## 🛠 사용 기술
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla JS)
- **API**: [위니브 FastAPI CRUD API](https://dev.wenivops.co.kr/services/fastapi-crud/1)

## 📂 폴더 구조
```text
weniv-blog/
├── index.html              # 홈 (블로그 목록 페이지)
├── login.html              # 로그인 페이지
├── signup.html             # 회원가입 페이지
├── post-detail.html        # 포스트 상세 페이지
├── post-write.html         # 포스트 작성/수정 페이지
├── css/
│   ├── reset.css           # 브라우저 스타일 초기화
│   ├── style.css           # 공통 스타일
│   ├── auth.css            # 인증(로그인/회원가입) 전용 스타일
│   └── post.css            # 게시글 관련 스타일
├── js/
│   ├── api.js              # API 통신 및 토큰 관리 로직
│   ├── auth.js             # 회원가입/로그인 유효성 검사 및 로직
│   ├── post.js             # 게시글 CRUD 로직
│   └── utils.js            # 공통 유틸리티 함수
└── assets/
    └── img/                # 이미지 리소스
