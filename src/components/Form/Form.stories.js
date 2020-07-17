import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from './Form';

storiesOf('Form', module)
    .add('Text Input with Label (Small)', () => <Form
        type="textInput"
        formLabel="Email"
        size="small"
    />) 
    .add('Text Input with Label (Med)', () => <Form
        type="textInput"
        formLabel="Email"
        placeholder="Blah Blah"
        size="medium"
    />) 
    .add('Text Input with Label (Large)', () => <Form
        type="textInput"
        formLabel="Email"
        placeholder="Blah Blah"
        size="large"
    />) 
    .add('Select Input (Small)', () => <Form
        type="selectInput"
        size="small"
    />) 
    .add('Select Input (Medium)', () => <Form
        type="selectInput"
        formLabel="Custom Text"
        size="medium"
    />) 
    .add('Select Input (Large)', () => <Form
        type="selectInput"
        formLabel="Custom Text"
        size="large"
    />) 
    .add('Select Input Filled (Small)', () => <Form
        type="selectInput"
        size="small"
        filled
    />) 
    .add('Select Input Filled (Medium)', () => <Form
        type="selectInput"
        size="medium"
        filled
    />) 
    .add('Select Input Filled (Large)', () => <Form
        type="selectInput"
        size="large"
        filled
    />) 