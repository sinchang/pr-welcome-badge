declare module 'react-codecopy' {
    import { ComponentType, ReactNode } from 'react';
  
    interface Props {
      text: string;
      theme?: 'dark' | 'light';
      iconComponent?: ReactNode;
      onCopy?: () => void;
      copy?: (text: string) => void
      children?: ReactNode;
    }
  
    const ReactCodeCopy: ComponentType<Props>;
  
    export default ReactCodeCopy;
  }