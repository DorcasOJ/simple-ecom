import { Box } from "@components/ui/box";
import { useThemeContext } from "@hooks/ThemeContext";
import { ScrollView, StyleSheet } from "react-native";
import Landing from "./landing";

export default function Index() {
  const { colorMode, toggleColorMode } = useThemeContext();
  return (
    <ScrollView
      style={[
        styles.scrollView,
        { backgroundColor: colorMode === "dark" ? "#000" : "#fff" },
      ]}
      contentContainerStyle={styles.contentContainer}
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <Box>
        <Landing colorMode={colorMode} toggleColorMode={toggleColorMode} />
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
