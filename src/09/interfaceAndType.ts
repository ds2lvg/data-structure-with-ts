interface A {
  name: string
}

interface B extends A {
  job: string;
}

interface C extends A {
  address: string;
}

type F = {
  name: string
  job?: string;
  address?: string;
}

class D implements B {
  job: "";
  name: "";
}