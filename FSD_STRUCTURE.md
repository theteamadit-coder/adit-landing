# FSD (Feature-Sliced Design) 구조

## 📁 현재 폴더 구조

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃 (Header, Footer 포함)
│   ├── page.tsx           # 메인 페이지 (위젯 조합)
│   └── globals.css        # 전역 스타일
│
├── widgets/               # 🎨 독립적인 UI 블록
│   ├── header/           # 헤더
│   │   ├── ui/
│   │   │   └── Header.tsx
│   │   └── index.ts
│   ├── footer/           # 푸터
│   │   ├── ui/
│   │   │   └── Footer.tsx
│   │   └── index.ts
│   ├── hero/             # 히어로 섹션
│   │   ├── ui/
│   │   │   └── HeroSection.tsx
│   │   └── index.ts
│   ├── about/            # 소개 섹션
│   │   ├── ui/
│   │   │   └── AboutSection.tsx
│   │   └── index.ts
│   ├── strategy/         # 마케팅 전략
│   │   ├── ui/
│   │   │   └── StrategySection.tsx
│   │   └── index.ts
│   ├── promise/          # 차별화 포인트
│   │   ├── ui/
│   │   │   └── PromiseSection.tsx
│   │   └── index.ts
│   ├── reviews/          # 리뷰 캐러셀
│   │   ├── ui/
│   │   │   └── ReviewsSection.tsx
│   │   └── index.ts
│   ├── process/          # 프로세스
│   │   ├── ui/
│   │   │   └── ProcessSection.tsx
│   │   └── index.ts
│   ├── partners/         # 파트너 로고
│   │   ├── ui/
│   │   │   └── PartnersSection.tsx
│   │   └── index.ts
│   └── cta/              # CTA 섹션
│       ├── ui/
│       │   └── CtaSection.tsx
│       └── index.ts
│
├── features/              # 🔧 사용자 시나리오 (추후 추가)
│   └── .gitkeep
│
├── entities/              # 📦 비즈니스 엔티티 (추후 추가)
│   └── .gitkeep
│
├── shared/                # 🔨 공유 리소스
│   ├── ui/               # 재사용 가능한 UI 컴포넌트
│   │   └── .gitkeep
│   ├── lib/              # 유틸리티 함수
│   │   └── utils.ts
│   └── types/            # 타입 정의
│       └── .gitkeep
```

## 🏗️ 계층 구조 및 의존성

```
app (최상위)
 ↓
widgets (페이지 구성 요소)
 ↓
features (동적 기능, 추후)
 ↓
entities (비즈니스 엔티티, 추후)
 ↓
shared (공통 리소스)
```

**규칙**: 상위 계층만 하위 계층을 import 가능

## ✅ 완료된 작업

- [x] FSD 디렉토리 구조 생성
- [x] Header 위젯 분리
- [x] Footer 위젯 분리
- [x] Hero 위젯 분리
- [x] About 위젯 분리
- [x] Strategy 위젯 분리
- [x] Promise 위젯 분리
- [x] Reviews 위젯 분리
- [x] Process 위젯 분리
- [x] Partners 위젯 분리
- [x] CTA 위젯 분리
- [x] layout.tsx에 Header, Footer 적용
- [x] page.tsx에서 위젯 조합
- [x] Public API (index.ts) 생성

## 📝 향후 작업

### features (동적 기능 추가)
- [ ] inquiry-form - 문의 폼 (Client Component)
- [ ] mobile-menu - 모바일 햄버거 메뉴
- [ ] carousel - 리뷰 슬라이더 (Swiper 등)

### entities (비즈니스 엔티티)
- [ ] 필요시 추가

### shared/ui (공통 컴포넌트)
- [ ] Button - 재사용 가능한 버튼
- [ ] Input - 폼 입력 컴포넌트
- [ ] Card - 카드 컴포넌트

## 🔗 Import 예시

```typescript
// ✅ Good - Public API 사용
import { Header } from '@/widgets/header';
import { HeroSection } from '@/widgets/hero';
import { formatNumber } from '@/shared/lib/utils';

// ❌ Bad - 내부 구현 직접 import
import Header from '@/widgets/header/ui/Header';
```

## 📖 FSD 핵심 원칙

1. **단방향 의존성**: 상위 → 하위만 가능
2. **Public API**: `index.ts`를 통한 export
3. **격리성**: 각 슬라이스는 독립적
4. **계층화**: app → widgets → features → entities → shared
