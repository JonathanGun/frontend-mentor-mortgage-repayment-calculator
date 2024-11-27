import * as React from "react";
import "../styles/global.css";
import type { HeadFC, PageProps } from "gatsby";
import {
  Box,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import calculator_icon from "../images/icon-calculator.svg";
import calculator_image from "../images/illustration-empty.svg";

const IndexPage: React.FC<PageProps> = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Plus Jakarta Sans",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="min-h-screen w-screen">
        <Stack spacing={0}>
          <Box className="bg-white p-6 space-y-4">
            <Box className="space-y-1">
              <Typography
                variant="h5"
                className="text-2xl font-bold text-slate-700"
              >
                Mortgage Calculator
              </Typography>
              <button className="text-sm text-sky-700 underline">
                Clear All
              </button>
            </Box>
            <Box>
              <label
                htmlFor="Mortgage Amount"
                className="block text-sm font-medium text-sky-700 mb-2"
              >
                Mortgage Amount
              </label>
              <Box className="flex flex-row w-full h-full border border-slate-700 rounded-md">
                <Box className="flex justify-center pl-4 p-2 rounded-l-md bg-slate-200">
                  <span className="pr-2 font-bold">£</span>
                </Box>
                <Box className="flex flex-row grow justify-center rounded-r-md h-full w-full rounded-lg mt-2">
                  <input
                    id="Mortgage Amount"
                    name="Mortgage Amount"
                    type="number"
                    className="ms-3 grow h-full outline-0"
                  />
                </Box>
              </Box>
            </Box>
            <Box>
              <label
                htmlFor="Mortgage Term"
                className="block text-sm font-medium text-sky-700 mb-2"
              >
                Mortgage Term
              </label>
              <Box className="flex flex-row w-full h-full border border-slate-700 rounded-md">
                <Box className="flex flex-row grow justify-center rounded-r-md h-full w-full rounded-lg mt-2">
                  <input
                    id="Mortgage Term"
                    name="Mortgage Term"
                    type="number"
                    className="ms-3 grow h-full outline-0"
                  />
                </Box>
                <Box className="flex justify-center pl-4 p-2 rounded-r-md bg-slate-200">
                  <span className="pr-2 font-bold">years</span>
                </Box>
              </Box>
            </Box>
            <Box>
              <label
                htmlFor="Interest Rate"
                className="block text-sm font-medium text-sky-700 mb-2"
              >
                Interest Rate
              </label>
              <Box className="flex flex-row w-full h-full border border-slate-700 rounded-md">
                <Box className="flex flex-row grow justify-center rounded-r-md h-full w-full rounded-lg mt-2">
                  <input
                    id="Interest Rate"
                    name="Interest Rate"
                    type="number"
                    className="ms-3 grow h-full outline-0"
                  />
                </Box>
                <Box className="flex justify-center pl-4 p-2 rounded-r-md bg-slate-200">
                  <span className="pr-2 font-bold">%</span>
                </Box>
              </Box>
            </Box>
            <Box className="space-y-3">
              <label
                htmlFor="Mortgage Type"
                className="block text-sm font-medium text-sky-700"
              >
                Mortgage Type
              </label>
              <Box className="space-y-2">
                <Box className="pl-2 flex flex-row w-full h-max border border-slate-700 rounded-md">
                  <Box className="flex flex-row grow justify-left items-stretch rounded-r-md h-10 w-full rounded-lg">
                    <Box className="h-full flex flex-row">
                      <input
                        id="Mortgage Type"
                        name="Mortgage Type"
                        type="radio"
                        value="repayment"
                        className="outline-0"
                      />
                    </Box>
                    <Box className="h-full p-2 flex items-center">
                      <span className="text-slate-700 text-center font-bold">
                        Repayment
                      </span>
                    </Box>
                  </Box>
                </Box>
                <Box className="pl-2 flex flex-row w-full h-max border border-slate-700 rounded-md">
                  <Box className="flex flex-row grow justify-left items-stretch rounded-r-md h-10 w-full rounded-lg relative">
                    <Box className="h-full flex flex-row">
                      <input
                        id="Mortgage Only"
                        name="Mortgage Only"
                        type="radio"
                        value="Mortgage Only"
                        className="outline-0"
                      />
                    </Box>
                    <Box className="h-full p-2 flex items-center">
                      <span className="text-center font-bold text-slate-700">
                        Mortgage Only
                      </span>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="pt-2 flex flex-col w-full items-center pb-3">
              <button className="w-full items-center block font-sm p-4 bg-primary text-secondary font-bold rounded-3xl">
                <Box className="flex flex-row w-full items-center justify-center space-x-2">
                  <img
                    src={calculator_icon}
                    alt="calculator icon"
                    className=""
                  />
                  <p>Calculate Repayments</p>
                </Box>
              </button>
            </Box>
          </Box>
          <Box className="h-96 bg-secondary text-white">
            <Box className="flex flex-row w-full items-center justify-center space-x-2 pt-9">
              <img src={calculator_image} alt="calculator image" />
            </Box>
            <Typography
              variant="h5"
              className="text-2xl text-center font-bold text-white pt-2"
            >
              Results shown here
            </Typography>
            <Typography
              variant="h5"
              className="text-sm text-center text-secondary-light pt-3"
            >
              Complete the form and click "calculate repayments" to see what your monthly repayments would be.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Frontend Mentor | Mortgage Repayment Calculator</title>
);
