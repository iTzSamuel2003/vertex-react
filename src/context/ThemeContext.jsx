// src/context/ThemeContext.jsx
import { createContext, useState, useContext } from 'react';

// 1. Criamos o Contexto
const ThemeContext = createContext();

// 2. Criamos o Provedor (o componente que vai fornecer a informação)
export function ThemeProvider({ children }) {
  // O estado que guarda o tema atual ('dark' ou 'light')
  const [theme, setTheme] = useState('dark'); // Começa com o tema escuro

  // A função que o botão irá chamar para trocar o tema
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // O Provedor "disponibiliza" o tema atual e a função para trocá-lo
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Criamos um "Hook" customizado para facilitar o uso do contexto
export function useTheme() {
  return useContext(ThemeContext);
}