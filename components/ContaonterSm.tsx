import { Box } from "./ui/box";

const ContainerSm = ({
  children,
  colorMode = "light",
}: {
  children: React.ReactNode;
  colorMode?: "dark" | "light";
}) => {
  return (
    <Box
      className="w-full px-4 sm:px-8 max-w-sm mx-auto text-black dark:text-white relative "
      style={{
        position: "relative",
        paddingHorizontal: 4,
        maxWidth: 700,
        marginHorizontal: "auto",
        // color: colorMode === "light" ? "black" : "white",
        backgroundColor: "transparent",
      }}
    >
      {children}
    </Box>
  );
};

export default ContainerSm;
