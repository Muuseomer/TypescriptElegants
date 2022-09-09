{
    interface PrintName {
      (name: string): void;
    }
  
    // ✅ Auto merge
    interface PrintName {
      (name: number): void;
    }
  }
  

  
  {
    type PrintName = (name: string) => void;
  
    // ❌ Duplicate identifier 'PrintName'
    type PrintName = (name: number) => void;
  }
  
  export {};