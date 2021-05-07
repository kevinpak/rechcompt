import styles from './table.module.scss'
import link from 'next/link'
import {useMemo} from 'react'
import { useTable } from 'react-table'
import makeData from './MOCK_DATA.json'

const TableCpn = () => {

  /*
  *
  */
  const Table = ({ columns, data }) => {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    })

    return (
      <table {...getTableProps()} className={styles.tableCpn}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  /*
  * Structuration
  */
  const columns =  [
    {
      Header: 'Date',
      accessor: 'date',
    },
    {
      Header: 'Codes',
      accessor: 'codes',
    },
    {
      Header: 'Type',
      accessor: 'type',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
  ]
  
  /*
  * DATA
  */
  const data = makeData

 
  return (
    <>
      <Table columns={columns} data={data} />

    </>
  )
}

export default TableCpn