# React로 영화 소개 앱 만들기

https://hyeong1.github.io/react-movie-app

## URL 구성
- "/" : 영화 리스트를 확인할 수 있는 메인 페이지
- "movie/:id" : 개별 영화의 정보를 확인할 수 있는 페이지

## 사용한 API
yts API가 제공하는 영화 데이터 사용

전체 영화 리스트 조회

https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year


개별 영화 데이터 조회

https://yts.mx/api/v2/movie_details.json?movie_id=
