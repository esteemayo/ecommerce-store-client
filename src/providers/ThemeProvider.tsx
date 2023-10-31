import { ThemeProvider } from 'styled-components';
import { FC } from 'react';

import { useDarkMode } from '@/hooks/useDarkMode';
import { AppThemeProviderProps } from '@/types';
import { darkTheme, lightTheme } from '@/utils/Theme';

const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => {
  const mode = useDarkMode((state) => state.mode);

  return (
    <ThemeProvider theme={mode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
