import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

class ClassroomList extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.classes}>
          <TableHeaderColumn isKey dataField='id'> ID </TableHeaderColumn>
          <TableHeaderColumn dataField='name'> Name </TableHeaderColumn>
          <TableHeaderColumn dataField='start_date'> Start Date </TableHeaderColumn>
          <TableHeaderColumn dataField='end_date'> End Date</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default ClassroomList