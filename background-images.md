# 배경 이미지 링크 목록

현재 랜딩페이지에서 사용 중인 배경 이미지들입니다.

## 1. Hero Section (메인 히어로 섹션)
- **파일**: `src/widgets/hero/ui/HeroSection.tsx`
- **이미지 URL**: https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80
- **다운로드 링크**: https://unsplash.com/photos/c627a92ad1ab/download?force=true
- **설명**: 도시 빌딩/비즈니스 이미지

## 2. Media Coverage Section (매체 커버리지 섹션)
- **파일**: `src/widgets/media-coverage/ui/MediaCoverageSection.tsx`
- **이미지 URL**: https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80
- **다운로드 링크**: https://unsplash.com/photos/afdab827c52f/download?force=true
- **설명**: 데이터/차트/분석 이미지

## 3. Stats Section (통계 섹션)
- **파일**: `src/widgets/stats/ui/StatsSection.tsx`
- **이미지 URL**: https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=1920&q=80
- **다운로드 링크**: https://unsplash.com/photos/4c4c79ecde51/download?force=true
- **설명**: 팀 협업 이미지

## 4. Why Us Section (차별성 섹션)
- **파일**: `src/widgets/why-us/ui/WhyUsSection.tsx`
- **현재 이미지**: `/asset/bg/team-people.jpg` (한국인 팀 사진으로 이미 변경됨)
- ~~이전 URL: https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80~~

## 5. CTA Section (문의 폼 섹션)
- **파일**: `src/widgets/cta/ui/CtaSection.tsx`
- **현재 이미지**: `/asset/bg/team-people.jpg` (한국인 팀 사진으로 이미 변경됨)
- ~~이전 URL: https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80~~

---

## 이미지 다운로드 방법

### 방법 1: 브라우저에서 직접 다운로드
위의 "다운로드 링크"를 클릭하면 고해상도 이미지를 다운로드할 수 있습니다.

### 방법 2: curl 명령어 사용 (터미널)
```bash
# Hero Section 이미지
curl -L "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" -o hero-bg.jpg

# Media Coverage Section 이미지
curl -L "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80" -o media-bg.jpg

# Stats Section 이미지
curl -L "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=1920&q=80" -o stats-bg.jpg
```

### 방법 3: wget 사용
```bash
wget https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80 -O hero-bg.jpg
wget https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80 -O media-bg.jpg
wget https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=1920&q=80 -O stats-bg.jpg
```

## 로컬 이미지로 변경하는 방법

다운로드한 이미지를 `/public/asset/bg/` 폴더에 저장 후:

```typescript
// 예시: Hero Section
style={{
  backgroundImage: 'url(/asset/bg/hero-bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed'
}}
```
