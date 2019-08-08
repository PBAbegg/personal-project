import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Mui =() => {
  return (
    <MuiThemeProvider>
      <TextField
        hintText="What's New?"
        floatingLabelText="New Entry"
        floatingLabelFixed={true}/>
        <br/>
      <Card>
        <CardMedia
          overlay={<CardTitle title="Wistman's Woods" subtitle="Dartmoor, England" />}>
            <img src="http://www.fubiz.net/wp-content/uploads/2019/01/Neil-Burnell-mystical-02.jpg" alt="" />
        </CardMedia>
        <CardText>
          Photo by Neil Burnell
        </CardText>
      </Card>
    </MuiThemeProvider>
  )
}


export default Mui;
