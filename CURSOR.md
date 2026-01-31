# cursor.md — ADIT Landing (Next.js + FSD) 작업 가이드

이 문서는 Cursor가 **애드잇(ADIT) 랜딩 단일 페이지**를 빠르고 일관되게 작업할 수 있도록 만든 “프로젝트 작업 규칙/컨텍스트”입니다.  
**브랜딩 사이트가 아니라 성과 중심 세일즈 랜딩**이며, 모든 구현은 아래 원칙을 따른다.

---

## 0) 프로젝트 한 줄 정의

**ADIT does not run ads. ADIT designs presale performance.**  
분양 광고 “집행”이 아니라 **분양 성과 설계(타깃·타이밍·효율)**를 판매하는 단일 랜딩 페이지.

---

## 1) 기술 스택(고정)

- Next.js (App Router)
- TypeScript
- pnpm
- Tailwind CSS v4 (OKLCH 테마)
- Framer Motion
- FSD 아키텍처
- Public API(`index.ts`) import 규칙

---

## 2) 제품/도메인 컨텍스트(카피/구조 작성 기준)

### 타깃(1차)
- 시행사 / 시공사 / 분양대행사 / 분양 PM
- 30~50대 의사결정자
- “노출/트래픽”이 아니라 **문의, 방문, 청약, 계약** KPI에 민감
- 비효율 광고에 피로감, 비용 대비 성과에 집착

### ADIT 핵심 서비스(반드시 반영)
- 직방 / 호갱노노 기반
- 앱푸시, 채널톡 메시지 캠페인, 프리미엄 단지 마커, 분양상담사 리드 상품 등
- 강점: **실거래/가격/행동 데이터 기반 정밀 타겟팅**

### 반복해야 하는 핵심 메시지
- 광고는 지출이 아니라 **성과 설계**
- 무차별 노출은 예산 낭비
- 분양은 한 번의 캠페인이 아니라 **시기별 전략 프로세스**
- **“모든 사람에게 노출되는 광고는, 결국 아무에게도 도달하지 않습니다.”**

---

## 3) 아키텍처 원칙(FSD 고정)

### 계층 의존성(절대 준수)
`app → widgets → features → entities → shared`

- 상위는 하위만 import 가능
- 하위가 상위를 import 하면 안 됨

### Public API 규칙(절대 준수)
- 각 슬라이스는 **반드시 `index.ts`를 통해 export/import**
- 내부 구현 경로 import 금지

✅ Good
```ts
import { HeroSection } from '@/widgets/hero';
```

❌ Bad
```ts
import HeroSection from '@/widgets/hero/ui/HeroSection';
```

---

## 4) 라우팅/페이지 정책(단일 페이지)

* 라우트 분기 없음
* `src/app/page.tsx`에서 **섹션을 조합만** 한다 (로직/상태 최소화)
* `src/app/layout.tsx`는 Header/Footer + 공통 레이아웃 + 인트로/전역 애니메이션만 담당

---

## 5) 섹션 구성 규칙(위젯 단위)

### 섹션은 widgets로 분리

* `src/widgets/<section>/ui/<SectionName>.tsx`
* `src/widgets/<section>/index.ts`에서 export

### 섹션 순서(권장)

1. Hero (문제 정의 + CTA)
2. Market Problem (시장/성과 하락/비용 증가)
3. ADIT Solution (전략/타깃/타이밍/프로세스)
4. Data & Platform Credibility (직방/호갱노노 데이터 근거)
5. Presale Phase Strategy (사전/런칭/사후 3단계)
6. Core Products (목적 기반: 인지도-문의-전환-소진)
7. Differentiation (비용효율/패키지/데일리리포트/투명성)
8. Final CTA (상담 신청)

---

## 6) 애니메이션 정책(접속 시 등장 필수)

### 요구사항

* 페이지 접속 시 **인트로/등장 애니메이션**이 반드시 있다.
* 과한 연출 금지: **신뢰감/정밀함**을 해치지 않는 범위.

### 구현 가이드

* 인트로 오버레이(권장): 첫 진입 시 0.8~1.5s 내 종료
* 섹션 reveal: 스크롤 viewport 진입 시 자연스럽게 등장
* 애니메이션은 공통 모션 프리셋(shared)로 관리(반복 최소화)

---

## 7) 스타일/디자인 규칙

* 미니멀, 흑/백/뉴트럴 중심
* 장식적 요소 금지, “컨설팅 보고서 같은 톤”
* 실사 느낌: 프로젝트/데이터/미팅(이미지는 후속)
* UI는 과장된 그라데이션/형광 컬러 금지
* 타이포는 명확한 위계(h1/h2/본문/캡션)

---

## 8) 코드 스타일/구현 원칙

### Server/Client 컴포넌트

* 기본: Server Component
* 상태/이벤트/브라우저 API 필요 시에만 `'use client'`
* Header(모바일 메뉴), 인트로 애니메이션 등은 client 가능

### 재사용 UI는 shared로

* `shared/ui`: Container, Section, Button, Badge, Card 등
* `shared/lib`: cn(), motion preset, constants 등

### 성능

* 이미지 사용 시 `next/image`
* 불필요한 클라이언트 번들 최소화
* Framer Motion은 필요한 곳만 client로

---

## 9) 파일/폴더 템플릿(권장)

예시(현재 방향성):

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css

  shared/
    ui/
    lib/
    config/

  widgets/
    header/
      ui/Header.tsx
      index.ts
    footer/
      ui/Footer.tsx
      index.ts
    hero/
      ui/HeroSection.tsx
      index.ts
    market-problem/
      ui/MarketProblemSection.tsx
      index.ts
    solution/
      ui/SolutionSection.tsx
      index.ts
    credibility/
      ui/CredibilitySection.tsx
      index.ts
    phase-strategy/
      ui/PhaseStrategySection.tsx
      index.ts
    products/
      ui/ProductsSection.tsx
      index.ts
    differentiation/
      ui/DifferentiationSection.tsx
      index.ts
    cta/
      ui/CtaSection.tsx
      index.ts

  features/
    request-consult/
      ui/RequestConsultForm.tsx
      model/
      index.ts

  entities/
    lead/
      model/
      index.ts
```

---

## 10) Cursor 작업 지시(프롬프트 템플릿)

Cursor에서 작업 지시할 때 아래 포맷을 사용한다.

### A) 새 섹션 생성

* 목표: widgets에 섹션 생성 + public api 연결 + page.tsx 조합

프롬프트 예시:

> `FSD 규칙 준수해서 widgets/<name> 섹션 생성해줘. ui/<Name>Section.tsx 만들고 index.ts로 export. page.tsx에 섹션을 순서대로 추가. 내부 import는 public api만 사용.`

### B) CTA 폼(feature) 생성

프롬프트 예시:

> `features/request-consult 폴더 만들고, RequestConsultForm(client) 구성. 입력: 회사명, 담당자, 연락처, 현장명, 문의내용. 제출은 일단 console.log + 기본 validation. widgets/cta 섹션에서 이 feature를 사용.`

### C) 인트로 오버레이 추가(접속 시 등장)

프롬프트 예시:

> `Framer Motion으로 접속 시 인트로 오버레이 구현. layout.tsx에 삽입. 1.2초 내 fade-out 후 unmount. 접근성 고려(스크린리더, reduced motion).`

---

## 11) 체크리스트(머지 전)

* [ ] 라우팅 추가 없음(단일 page)
* [ ] 모든 import는 `index.ts` Public API 경유
* [ ] FSD 의존성 위반 없음
* [ ] 접속 시 등장 애니메이션 존재
* [ ] CTA(상담 요청) 최소 2곳(히어로 + 마지막)
* [ ] 카피가 “노출/트래픽” 중심이 아닌 “성과 설계” 중심
* [ ] Tailwind v4 OKLCH 테마 유지
* [ ] 불필요한 `'use client'` 최소화

---

## 12) 개발 명령어

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm format
pnpm format:check
```

---

## 13) 문서의 목적

이 cursor.md는 Cursor가:

* 폴더 구조를 흔들지 않고
* FSD/공개 API 규칙을 지키며
* “단일 랜딩 + 인트로 애니메이션” 요구사항을 놓치지 않고
* 분양 실무 관점의 설득 구조로

일관되게 생산할 수 있도록 만든 기준 문서다.
