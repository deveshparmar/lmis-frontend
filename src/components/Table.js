import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));



const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, abhaId, mobileNo) {
  return { name, abhaId, mobileNo };
}

const rows = [
  createData("Devesh","12345678904567","8888888888"),
  createData("Devesh","12345678904567","8888888888"),
  createData("Devesh","12345678904567","8888888888"),
  createData("Devesh","12345678904567","8888888888"),
  createData("Devesh","12345678904567","8888888888"),
  createData("Devesh","12345678904567","8888888888"),
  createData("Devesh","12345678904567","8888888888"),
  createData("Devesh","12345678904567","8888888888"),
  createData("Devesh","12345678904567","8888888888"),
  createData("Devesh","12345678904567","8888888888"),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '98%', margin: '0 auto'  }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Abha Number</StyledTableCell>
            <StyledTableCell align="right">Mobile No</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell style={{ width: '30%' }} component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.abhaId}</StyledTableCell>
              <StyledTableCell align="right">{row.mobileNo}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}