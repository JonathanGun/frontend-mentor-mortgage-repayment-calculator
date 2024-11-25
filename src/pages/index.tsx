import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Stack } from "@mui/material";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box className="min-h-screen w-screen bg-gray-300">
      <Stack spacing={0}>
        <Box className="min-h-screen bg-white">
          Buat tengahin flex
          // flexbox css
          // tailwind flex
          // align center, justify center, items center
          Mortgage Calculator
          Form input
          Radio button
          Button rounded
        </Box>
        <Box className="h-96 bg-slate-700 text-white">
          Biru
          Image Material UI
        </Box>
      </Stack>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Frontend Mentor | Mortgage Repayment Calculator</title>;
