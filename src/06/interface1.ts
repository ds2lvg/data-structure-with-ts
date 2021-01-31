(function() {
  interface User {
    name: string;
    readonly height: number;
    favoriteLanguage?: string;
    get?(): () => void;
    set?(data: string): (data:string) => typeof data;
  }
  const author: User = { name: '안희종', height: 176 };
  // author.height = 183; readonly는 수정불가
  author.name = "백가희";


  // 하이브리드 타입(hybrid type): 호출 시그니쳐와 속성 타입을 동시에 갖는 인터페이스
  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }
  function getCounter(): Counter {
      let counter = <Counter>function (start: number) { };
      counter.interval = 123;
      counter.reset = function () { };
      return counter;
  }
  let c = getCounter();
  c(10);
  c.reset();
  c.interval = 5.0;

  // 제너릭 인터페이스(generic interface)
  interface MyResponse<Data> {
    data: Data;
    status: number;
    ok: boolean;
    /* ... */
  }
  interface User {
    name: string;
    readonly height: number;
    /* ... */
  }
  const getUserApiCall = (): MyResponse<User> => {
     return {
      data: {name: '', height: 176},
      status: 200,
      ok: true,
     }; 
  }
  const user: MyResponse<User> = getUserApiCall();
  user.data.name; // 타입 시스템은 user.name이 string임을 알 수 있다.

  interface GetData {
    <Data>(response: MyResponse<Data>): Data;
  }
})();
