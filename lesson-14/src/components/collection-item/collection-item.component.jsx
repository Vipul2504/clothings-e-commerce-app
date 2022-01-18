import React from 'react';
import {connect} from 'react-redux'
import { Additem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ item,Additem }) => {
  const {name, price,imageUrl} =item
  return(
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton onClick={()=>Additem(item)} inverted>Add to cart</CustomButton>
  </div>
)};

const mapDisptachToProps = dispatch => ({
  Additem:item =>dispatch(Additem(item))
})
export default connect(null, mapDisptachToProps)(CollectionItem);
