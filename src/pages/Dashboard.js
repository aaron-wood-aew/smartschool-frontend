import React, {Component } from 'react'
import MapViewer from '../components/googleMapsComponent/MapViewer'
import SchoolAPI from '../api/SchoolAPI';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { Container } from 'react-bootstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
    }
  }

  componentDidMount() {
    SchoolAPI.fetchClasses()
      .then((response) => { 
        console.log(response)
        this.setState({ classes: response })}
      )
  }
  
  render() {
    // if (this.state.classes.length == 0) {
    //   return (
    //     <div>Loading...</div>
    //   )
    // }
    return (
      <Container>
        <div className="text-center">
          <h1>Welcome to Smart School</h1>
        </div>
        <div className="text-center">
          Please see available teachers in your area on the map
          </div>

        <div className="row">
          <div className="col-md-4">
            <BootstrapTable data={this.state.classes}>
              <TableHeaderColumn isKey dataField='id'> ID </TableHeaderColumn>
              <TableHeaderColumn dataField='name'> Name </TableHeaderColumn>
              <TableHeaderColumn dataField='start_date'> Start Date </TableHeaderColumn>
              <TableHeaderColumn dataField='end_date'> End Date</TableHeaderColumn>
            </BootstrapTable>
          </div>
          <div className="col-md-8">
            <MapViewer />
          </div>
        </div>
      </Container>
    )
  }
}

export default Dashboard;