import React from 'react'

import { formatDate } from '@/lib/utils'

import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

import CountDown from './CountDown'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'

const DataTable = () => {
  const data = useSelector((state: RootState) => state.data.data);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S.No.</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Timestamp</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map(({ _id, price, symbol, timestamp }, index) => (
            <TableRow key={_id}>
              <TableCell className='text-center'>{index + 1}</TableCell>
              <TableCell>{symbol}</TableCell>
              <TableCell>₹ {price}</TableCell>
              <TableCell>{formatDate(timestamp)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell colSpan={4}>
              <CountDown />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default DataTable