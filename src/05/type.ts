type Programmer = {framework: string };
const 개발자: Programmer = { framework: 'vue' };
type Favorite = { favorite: string };
const 취미: Favorite = { favorite: '요리' };

// 회원, 구매
// 특정회원의 구매내역 = 회원 & 구매 (수학:합집합, DB:조인, TS:인터섹션)

type 개발자백가희의취미1 = { favoriteLanguage: string; favorite: string; };
type 개발자백가희의취미2 = Programmer & Favorite;

const 개발자백가희: 개발자백가희의취미2 = { 
  framework: 'vue',
  favorite: '요리',
};

// 정적인 정보를 카테고리를 묶어 관리해야 하는 경우
const enum PostURL {
  API = 'https://www.api.com:8090',
  AUTH = 'https://www.google.auth.com',
}

// axios.post({url: PostURL.API});
