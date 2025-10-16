import { Box } from "@components/ui/box";
import { useThemeContext } from "@hooks/ThemeContext";
import "@styles/global.css";
import { ScrollView, StyleSheet } from "react-native";
import Landing from "./Landing";

export default function index() {
  // const userContext = useUser();
  const { colorMode, toggleColorMode } = useThemeContext();

  return (
    <ScrollView
      style={[
        styles.scrollView,
        { backgroundColor: colorMode === "dark" ? "#000" : "#fff" },
      ]}
      contentContainerStyle={styles.contentContainer}
    >
      <Box className="w-full h-full relative">
        <Landing colorMode={colorMode} toggleColorMode={toggleColorMode}
        />
      </Box>

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    // padding: 16,
  },
});
