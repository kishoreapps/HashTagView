import  React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TablePagination from '@mui/material/TablePagination';

export default function ForecastTable() {
  const [forecastInfo, setForecastInfo] = useState([]);
   const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number,
    ) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

  useEffect(() => {
    fetch("weather/forecast")
    .then(response => response.json())
    .then(data => setForecastInfo(data?.list))
  },[])

  return (
    <TableContainer component={Paper}>
    <Typography variant="h5" sx={{ padding: 3 }} component="div">
      Forecast Info
    </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Feels Like Temp</TableCell>
            <TableCell align="right">Temp</TableCell>
            <TableCell align="right">Humidity</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">wind</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forecastInfo.slice(page * rowsPerPage, (page * rowsPerPage) +  rowsPerPage).map((row) => (
            <TableRow
              key={row.dt}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.dt_txt}
              </TableCell>
              <TableCell align="right">{row.main.feels_like}</TableCell>
              <TableCell align="right">{row.main.temp}</TableCell>
              <TableCell align="right">{row.main.humidity}</TableCell>
              <TableCell align="right">{row?.weather?.length > 0 ? row?.weather[0]?.description:''}</TableCell>
              <TableCell align="right">Speed: {row.wind.speed} <br/>
              Gust: {row.wind.gust}<br/>
              Degree: {row.wind.deg}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TablePagination
          component="div"
          count={forecastInfo.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Table>
    </TableContainer>
  );
}
