
  const apple1: Fruit.APPLE = Fruit.APPLE;
  // All numeric types can be assigned to it.
  // TypeScript does not throw errors.
  const apple2: Fruit.APPLE = 3000;
}

{
  enum Fruit {
    APPLE = 'Apple',
    PINEAPPLE = 'Pineapple',
    ORANGE = 'Orange',
  }

  // ✅ Only itself can be assigned to it.
  const apple1: Fruit.APPLE = Fruit.APPLE;
  // ❌ Even the same string literal.
  const apple2: Fruit.APPLE = 'Apple';
}

export {};