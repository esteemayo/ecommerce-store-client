import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from '@/utils/Theme';

const Darkmode = ({ children }) => {
  const { darkMode } = useSelector((state) => ({ ...state.darkMode }));

  return (
    <div>Darkmode</div>
  );
}

export default Darkmode;
