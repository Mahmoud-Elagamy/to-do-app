const applyTheme = (
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const isDarkTheme = matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || (isDarkTheme && storedTheme !== "light")) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  } catch (error) {
    console.error("Error applying theme:", error);
  } finally {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }
};

export default applyTheme;
