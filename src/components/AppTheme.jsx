import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { darkTheme, lightTheme } from '@/utils/Theme';

const AppTheme = ({ children }) => {
  const { darkMode } = useSelector((state) => ({ ...state.darkMode }));

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}

export default AppTheme;
