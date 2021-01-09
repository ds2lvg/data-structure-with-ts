// 데이터 베이스에서 아래와 같은 형태의 데이터를 받았을 때 모든 부서의 임금(salary)합계를 구하시오.
// 7700이 나오면 됨
 
const company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

function salary1():number  { 
  let total = company.sales[0].salary + company.sales[1].salary
    +company.development.sites[0].salary +company.development.sites[1].salary
    +company.development.internals[0].salary;
    return total;
}
function salary2():number  { 
  let sales = 0;
  let sites = 0;
  let internals = 0;
  let total = 0;

  for(let sal of company.sales) {
    sales += sal.salary;
  }
  for(let sit of company.development.sites) {
    sites += sit.salary;
  }
  for(let int of company.development.internals) {
    internals += int.salary;
  }
    return total = sales+sites+internals;
}

console.log('1',salary1());
console.log('2',salary1())