import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { useDarkMode } from '@/hooks/useDarkMode';
import { darkTheme, lightTheme } from '@/utils/Theme';

const AppThemeProvider = ({ children }) => {
  const mode = useDarkMode((state) => state.mode);

  return (
    <ThemeProvider theme={mode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
