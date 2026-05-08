import { useState } from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
// import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Typography from '@mui/material/Typography'
import rows from './rowsEquilibrium'

const rowsWithId = rows.map((row, index) => ({
  ...row,
  id: `${index}-${row.ids}`
}))

function Row({ row }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow sx={{
        '& > *': {
          borderBottom: 'unset',
          borderLeft: 2,
          borderColor: '#339CFF',
          bgcolor: '#E6F3FF',
          minWidth: 800,
        }
      }}>
        <TableCell sx={{paddingBottom: 0.5, paddingTop: 0.5}}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </IconButton>
          {row.ids.slice(0,-1)}<span style={{fontWeight: 'bold'}}>{row.ids.at(-1)}</span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{paddingBottom: 1.25, paddingTop: 1, border: 'none'}}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {/* {row.description} */}
            {row.description && row.description.length > 1 && (
              <table>
                <tbody>
                  {row.description.map((child) => (
                    <Row key={child.ids} row={child} />
                  ))}
                </tbody>
              </table>
            ) || (
              <div>
                {row.description}
              </div>
              )
            }
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

function TableEquilibrium() {
  return(
    <Box sx={{ margin: 1 }}>
      <TableContainer component={Stack}>
        <Table aria-label="collapsible table">
          {/* <TableHead>
                <TableRow>
                  <TableCell>
                    header
                  </TableCell>
                </TableRow>
              </TableHead> */}
          <TableBody>
            {rowsWithId.map((row) => (
                  <Row key={row.id} row={row} />
                ))}
            {/* {rows.map((row, index) => (
                  <Row key={index} row={row} />
                ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default TableEquilibrium
