# TripTrip ✈️
TripTrip은 여행 경험 공유, 숙박권 거래, 국내 축제 정보 제공 기능을 갖춘 여행 플랫폼입니다.

사용자는 여행 후기를 공유하고, 숙박권을 사고팔며, 전국의 다양한 축제를 한눈에 확인할 수 있습니다.

## 🔗 배포 링크
[https://trip-trip-five.vercel.app](https://trip-trip-five.vercel.app)
## ✨ 주요 기능

### 🔑 로그인 및 회원가입
- 이메일 회원가입 및 로그인

### 📝 여행 경험 공유 커뮤니티
- 게시글 작성, 조회, 수정, 삭제
- 키워드 및 작성 날짜를 활용한 게시글 검색

### 🏨 숙박권 거래
- 플랫폼 내 포인트 충전을 통한 **숙박권 구매 및 판매**
- 숙박권 거래 게시글 작성, 조회, 수정, 삭제

### 🎉 국내 축제 정보 조회
- 전국 주요 축제 목록 확인

### 🔖 마이페이지
- 개인 거래 내역 조회
- 포인트 충전 및 사용 내역 조회
- 비밀번호 변경

## 🖥 스크린샷
![Group 3](https://github.com/user-attachments/assets/fc3cccf8-15d4-4b67-9db2-af2375c75960)

## 🛠 기술 스택
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white)  
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=white)
![Apollo Client](https://img.shields.io/badge/Apollo%20Client-311C87?logo=apollographql&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=white)



## 프로젝트를 통한 경험
- 회원가입 및 로그인 시 React Hook Form과 Zod를 사용하여 폼 상태 관리 및 검증 자동화
- 안전한 사용자 인증을 위해 RefreshToken을 활용한 인증 구현
- 샬로우 라우팅을 활용한 검색 기능을 구현하여 URL 변경 없이 결과만 갱신해 사용자 경험 향상
- 포트원 결제 API를 연동하여 플랫폼 내 포인트 충전 기능 구현

## 회고
- REST API는 단순한 요청에 유리하지만, 다수의 요청이 필요할 경우 비효율적이었고, GraphQL은 유연한 데이터 조회가 가능하지만 초기 설정과 최적화가 필요했습니다. 이를 통해 데이터의 특성과 사용 방식에 따라 적절한 API 선택이 중요함을 배웠습니다.
- 프로젝트 초기에 코딩 컨벤션을 정하지 않아 코드 스타일이 일관되지 않았고, 이로 인해 유지보수성과 가독성이 저하되는 문제가 발생했습니다. 이를 통해 코드의 일관성이 유지보수에 미치는 영향을 실감했으며, 다음 프로젝트에서는 초기 단계에서 컨벤션을 정립하여 코드 품질을 향상시키고자 합니다.
