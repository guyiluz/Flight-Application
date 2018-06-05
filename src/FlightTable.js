import React, { Component } from 'react'
import { Icon, Label, Menu, Table,Grid } from 'semantic-ui-react'

export default class FlightTable extends Component {
constructor(props){
super(props)



}


  render() { 
let tableBody=""

const flights = localStorage.getItem("flights")
if(flights==undefined){
  tableBody= <Table.Body>

  <Table.Row>
    <Table.Cell>No flights listed</Table.Cell>
    <Table.Cell>No flights listed</Table.Cell>
    <Table.Cell>No flights listed</Table.Cell>
    <Table.Cell>No flights listed</Table.Cell>
  
  </Table.Row>
</Table.Body>




}else{

  JSON.parse(flights)
  if(flights.data.length!==0){
    tableBody=  flights.data.map((item)=>{

      return ( 
        
     <div>
<Table.Body>

<Table.Row>
  <Table.Cell>{item.data}</Table.Cell>

</Table.Row>
</Table.Body>


     
            </div>

  )
  
  
  
    })

  }
 
}

    return (

  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>

          <Table >
          <Table.Header>
      <Table.Row>
        <Table.HeaderCell>From</Table.HeaderCell>
        <Table.HeaderCell>to​</Table.HeaderCell>
        <Table.HeaderCell>departure Time​</Table.HeaderCell>
        <Table.HeaderCell>Landing Time​,</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
          {tableBody}
          </Table>      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>
    </Grid>




    )
  }
}
