// 데이터 베이스에서 아래와 같은 형태의 데이터를 받았을 때 모든 부서의 임금(salary)합계를 구하시오.
// 7700이 나오면 됨
// ts-node ./src/04/getSumSalary.ts
(function() {
  type T = {} | []
  type D = {name: string, salary: number};
  const company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}],
    },
    gahui: [{name: 'jongmin', salary: 300}, {name: 'gahui', salary: 10000 }],
  };
  function sumSalaries(department:T) {
    if (Array.isArray(department)) {
      return department.reduce((prev: number, current: D) => prev + current.salary, 0);
    } else {
      let sum=0;
      for (const subdep of Object.values(department)) {
        sum += sumSalaries(subdep);
      }
      return sum;
    }
  }
  console.log(sumSalaries(company));
})(); 