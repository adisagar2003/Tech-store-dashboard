import React from 'react'
import Products from './SemiComponents/Products';
import {connect} from 'react-redux';
function mapStateToProps(state){
  return {
    open:state
  }
}
function Product(props) {
  return (
    <div class={props.open?'p-[10vh] ml-[40vh] gap-10 justify-around flex-wrap flex transition-all':'p-[10vh]  gap-10 justify-around flex-wrap flex transition-all'} >
    <Products name='Toshiba 8C60' price='450$' />
    <Products name='Lenovo 90CX' price='1200$' />
    <Products name='Dell inspirion 8908' price='1800$' />
    <Products name='Mac book air' price='9000$' />

    </div>
  )
}

export default connect(mapStateToProps)(Product)
