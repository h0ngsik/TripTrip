# TripTrip ✈️
TripTrip은 Next.js를 기반으로 개발한 여행 관련 플랫폼입니다.

TripTrip은 로그인 기능을 제공하고, 인증된 사용자만 게시글을 작성할 수 있습니다.
사용자는 숙박권을 등록하여 직접 구매/판매할 수 있고, 여행 관련 경험을 공유하는 커뮤니티 공간도 활용할 수 있습니다.

## 개발 환경
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1738475305053?alt=media&token=0541c756-f786-4f6e-b616-cf2e1a699402)](https://github.com/msdio/stackticon)

## 주요 기능
- **로그인 및 회원가입**
- **여행 관련 경험 공유 커뮤니티 제공**
  - 게시글 작성/조회/수정/삭제
  - 게시글 검색(키워드 및 작성 날짜를 통해 검색)
- **숙박권 구매 및 판매**
  - 플랫폼 내 포인트 충전을 통해, 숙박권 구매 및 판매
  - 숙박권 구매 작성/조회/수정/삭제
- **국내 축제 목록 조회**
- **마이페이지**
  - 거래내역 조회
  - 포인트 사용내역 조회
  - 비밀번호 변경

## 주요 화면
![Group 3](https://github.com/user-attachments/assets/fc3cccf8-15d4-4b67-9db2-af2375c75960)

## 프로젝트를 통한 경험
- 회원가입 및 로그인 시 React Hook Form과 Zod를 사용하여 폼 상태 관리 및 검증 자동화
- 안전한 사용자 인증을 위해 RefreshToken을 활용한 인증 구현
- 샬로우 라우팅을 활용한 검색 기능을 구현하여 URL 변경 없이 결과만 갱신해 사용자 경험 향상
- 포트원 결제 API를 연동하여 플랫폼 내 포인트 충전 기능 구현
