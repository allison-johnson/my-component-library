import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
    .add('Primary', () => <Button 
      label="Primary" 
      type="primary"
      size="small"
      text="Do something"
    />) 
    .add('Primary Outline', () => <Button 
      label="Primary Outline"
      type="primary"
      outline
      size="small"
      text="Do something"
    />)
    .add('Primary Muted', () => <Button 
      label="Primary Muted"
      type="primary"
      muted
      size="large"
      text="Do something" 
    />)
    .add('Success', () => <Button 
      label="Success" 
      type="success"
      size="small"
      text="Do something" 
    />)
    .add('Success Outline', () => <Button 
      label="Success Outline"
      type="success"
      outline
      size="small"
      text="Do something"
    />)
    .add('Success Muted', () => <Button 
      label="Success Muted"
      type="success"
      muted
      size="small"
      text="Do something" 
    />)
    .add('Danger', () => <Button 
      label="Danger" 
      type="danger"
      size="small"
      text="Do something" 
    />)
    .add('Danger Outline', () => <Button 
      label="Danger Outline"
      type="danger"
      outline
      size="small"
      text="Do something"
    />)
    .add('Danger Muted', () => <Button 
      label="Danger Muted"
      type="danger"
      muted
      size="small"
      text="Do something" 
    />)
    .add('Warning', () => <Button 
      label="Warning"
      type="warning"
      size="small"
      text="Do something" 
    />)
    .add('Warning Outline', () => <Button 
      label="Warning Outline"
      type="warning"
      outline
      size="small"
      text="Do something"
    />)
    .add('Warning Muted', () => <Button 
      label="Warning Muted"
      type="warning"
      muted
      size="small"
      text="Do something" 
    />) 
    .add('Default', () => <Button 
      label="Default" 
      type="default"
      size="small"
      text="Do something" 
    />)
    .add('Default Outline', () => <Button 
      label="Default Outline"
      type="default"
      outline
      size="small"
      text="Do something"
    />)
    .add('Default Muted', () => <Button 
      label="Default Muted"
      type="default"
      muted
      size="small"
      text="Do something" 
    />) 
    .add('Add to Cart', () => <Button 
      label="Add to Cart"
      type="primary"
      muted
      size="small"
      icon="cart"
      text="Add To Cart"
    />)
    .add('Add to Favorites', () => <Button 
      label="Add to Favorites"
      type="primary"
      muted
      size="small"
      icon="heart"
      text="Add To Favorites"
    />)
    .add('Cart', () => <Button 
      label="Cart"
      type="primary"
      muted
      size="small"
      icon="cart"
    />)
    .add('Favorite', () => <Button 
      label="Favorite"
      type="primary"
      muted
      size="small"
      icon="heart"
  />)