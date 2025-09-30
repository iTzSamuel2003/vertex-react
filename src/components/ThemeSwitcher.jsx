// src/components/ThemeSwitcher.jsx
import { useTheme } from '../context/ThemeContext.jsx';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const buttonStyle = {
    background: 'none',
    border: '1px solid var(--border-color)',
    color: 'var(--light-text)',
    padding: '8px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <button onClick={toggleTheme} style={buttonStyle} title="Mudar tema">
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeSwitcher;