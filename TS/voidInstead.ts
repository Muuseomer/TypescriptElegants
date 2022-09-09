{
    // 👎 Bad
    const main = (callback: () => any) => {
      const returnValue = callback();
      // TypeScript does not throw errors
      returnValue.get();
    };
  }
  
  {
    // 👍 Good
    const main = (callback: () => void) => {
      const returnValue = callback();
      // ❌ Property 'get' does not exist on type 'void'
      returnValue.get();
    };
  }
  
  export {};