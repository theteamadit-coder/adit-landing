# 🚀 배포 준비 체크리스트

## ✅ 빌드 & 테스트 완료

### 1. 프로덕션 빌드 성공
- ✅ **빌드 상태**: 성공
- ✅ **빌드 시간**: ~8초
- ✅ **빌드 크기**: 185MB
- ✅ **페이지 생성**: 정적 페이지로 사전 렌더링 완료

### 2. TypeScript 체크
- ✅ **타입 에러**: 없음
- ✅ **컴파일**: 성공

### 3. ESLint 검사
- ✅ **린트 에러**: 없음
- ✅ **코드 품질**: 통과

### 4. 파일 구조
- ✅ **TypeScript 파일**: 31개
- ✅ **FSD 아키텍처**: 적용됨
- ✅ **컴포넌트 구조**: 체계적

---

## 📦 프로젝트 정보

### 기술 스택
- **프레임워크**: Next.js 16.1.5 (App Router)
- **React**: 19.2.3
- **TypeScript**: 5.x
- **스타일링**: Tailwind CSS v4 (OKLCH)
- **애니메이션**: Framer Motion 12.29.2
- **패키지 매니저**: pnpm

### 주요 기능
1. ✅ 인트로 애니메이션 (직방 + 호갱노노 로고)
2. ✅ Framer Motion 스크롤 애니메이션 (모든 섹션)
3. ✅ 반응형 디자인 (모바일/태블릿/데스크톱)
4. ✅ 다크 테마 + 배경 오버레이
5. ✅ 헤더 네비게이션 (부드러운 스크롤)
6. ✅ 한국어 줄바꿈 최적화 (break-keep)
7. ✅ 섹션별 배경 이미지 최적화

### 섹션 구성
1. **Hero Section** - 메인 히어로 (빌딩 배경)
2. **About Section** - 회사 소개 및 통계
3. **Services Section** - 6가지 광고 상품
4. **Media Coverage Section** - 매체 소개 (빌딩 배경)
5. **Why Us Section** - 차별점 6가지 (대시보드 배경)
6. **Process Section** - 4단계 프로세스
7. **Partners Section** - 클라이언트 & 집행사례
8. **CTA Section** - 문의 폼 (대시보드 배경)

---

## 🔧 배포 전 확인 사항

### 환경 설정
- [ ] `.env.production` 파일 확인 (현재 없음)
- [ ] API 엔드포인트 설정
- [ ] 분석 도구 설정 (Google Analytics 등)

### 이미지 & 에셋
- ✅ 로컬 이미지 최적화 완료
  - `/asset/logo.png`
  - `/asset/직방.png`
  - `/asset/호갱노노.png`
  - `/asset/bg/photo-1460925895917-afdab827c52f.jpeg`
  - `/asset/bg/photo-1486406146926-c627a92ad1ab.jpeg`

### SEO & 메타데이터
- [ ] 메타 태그 설정 (`layout.tsx`)
- [ ] Open Graph 이미지
- [ ] 파비콘 설정
- [ ] robots.txt
- [ ] sitemap.xml

### 폼 & 백엔드
- [ ] 문의 폼 제출 API 연동
- [ ] 이메일 전송 설정
- [ ] 데이터 검증 강화

### 성능 최적화
- ✅ 이미지 최적화 (Next.js Image)
- ✅ 코드 스플리팅
- ✅ 정적 페이지 생성
- [ ] 이미지 압축 추가 최적화
- [ ] 폰트 최적화 (`next/font`)

---

## 🌐 배포 옵션

### 1. Vercel (권장)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

**장점**:
- Next.js 최적화
- 자동 HTTPS
- 무료 티어
- CI/CD 자동화
- 글로벌 CDN

### 2. Netlify
```bash
# 빌드 설정
Build command: pnpm build
Publish directory: .next
```

### 3. 커스텀 서버
```bash
# 프로덕션 시작
pnpm build
pnpm start
```

---

## 📝 배포 후 체크리스트

### 즉시 확인
- [ ] 메인 페이지 로딩 확인
- [ ] 모든 섹션 표시 확인
- [ ] 애니메이션 작동 확인
- [ ] 모바일 반응형 확인
- [ ] 네비게이션 작동 확인

### 브라우저 테스트
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge
- [ ] 모바일 Safari
- [ ] 모바일 Chrome

### 성능 체크
- [ ] Lighthouse 점수 확인
- [ ] Core Web Vitals 확인
- [ ] 페이지 로딩 속도 (<3초)
- [ ] 이미지 로딩 확인

---

## ⚠️ 알려진 경고

### Next.js Workspace Root 경고
```
Warning: Next.js inferred your workspace root
```
**해결 방법**: `next.config.ts`에 `turbopack.root` 설정
**영향**: 빌드에는 영향 없음

### 빌드 캐시 경고
```
No build cache found
```
**해결 방법**: CI/CD 환경에서 캐시 설정
**영향**: 첫 빌드 시간만 길어짐

---

## 🔒 보안 체크

- ✅ 민감한 정보 없음 (`.env` 파일 없음)
- ✅ API 키 하드코딩 없음
- [ ] CORS 설정 (API 연동 시)
- [ ] Rate limiting (폼 제출)
- [ ] XSS 방지

---

## 📞 문의 정보 설정

현재 하드코딩된 정보:
- **전화**: 02-6949-5032
- **이메일**: team@ad-it.co.kr

**변경 필요 시**: `/src/widgets/cta/ui/CtaSection.tsx` 수정

---

## 🎯 배포 명령어

### 개발 서버
```bash
pnpm dev
```

### 프로덕션 빌드
```bash
pnpm build
```

### 프로덕션 실행
```bash
pnpm start
```

### 린트 체크
```bash
pnpm lint
```

---

## ✨ 배포 준비 완료!

모든 빌드 및 테스트가 통과했습니다. 위의 체크리스트를 확인하고 배포를 진행하세요.

**추천 배포 플랫폼**: Vercel
**예상 배포 시간**: 3-5분
**다운타임**: 0초

---

**작성일**: 2026-01-31
**버전**: 0.1.0
**상태**: 배포 준비 완료 ✅
