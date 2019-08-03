import React, { Component } from 'react'
import './TourList.sass'
import Tour from '../Tour/Tour'
import {tourData} from '../tourData'

export default class TourList extends Component {
 state = {
  tours: tourData
 }
 //удаление тура
 removeTour = idid => {
  const {tours} = this.state
  const sortedTours = tours.filter(tou => tou.id !== idid)
  this.setState({
   tours: sortedTours
  })
 }

 render() {
  //console.log(this.state.tours);
  const {tours} = this.state;
  
  return (
   <section className="toutlist">
    {tours.map(tour => {
     return (
      <Tour 
       key={tour.id} 
       item={tour}
       deleteTour={this.removeTour}
       />
     )
    })}
    
   </section>
    
  )
 }
}
