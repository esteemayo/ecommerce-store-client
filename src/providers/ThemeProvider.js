import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { darkTheme, lightTheme } from '@/utils/Theme';

const AppThemeProvider = ({ children }) => {
  const { mode } = useSelector((state) => ({ ...state.darkMode }));

  return (
    <ThemeProvider theme={mode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
