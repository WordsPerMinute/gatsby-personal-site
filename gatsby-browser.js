import "./src/styles/global.scss"

export const onClientEntry = () => {
    const originalConsoleError = console.error;
    console.error = (...args) => {
      if (args.some(arg => 
        typeof arg === 'string' && 
        arg.includes('react-burger-menu')
      )) {
        return;
      }
      originalConsoleError(...args);
    };
  };
  