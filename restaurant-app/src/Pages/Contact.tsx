import React from "react";
import Layout from "../components/Layout";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Call, Mail, SupportAgent } from "@mui/icons-material";

export function Contact() {
  return (
    <Layout>
      <Box sx={{ minHeight: "67vh" }}>
        <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
          <Typography variant="h4">Contact My Resturant</Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
            beatae ducimus magni nobis culpa praesentium velit expedita quae,
            corrupti, pariatur inventore laboriosam consectetur modi impedit
            error, repudiandae obcaecati doloribus.
          </p>
        </Box>
        <Box
          sx={{
            m: 3,
            width: "600px",
            ml: 10,
            "@media (max-width:600px)": {
              width: "300px",
            },
          }}
        >
          <TableContainer>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ bgcolor: "black", color: "white" }}
                    align="center"
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgent sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                    (tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Mail sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Call sx={{ color: "green", pt: 1 }} /> 1234567890
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  );
}
