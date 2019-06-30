import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Cards =() => {
  return (
    <MuiThemeProvider>
  <Card>
      <CardMedia
        overlay={<CardTitle title="Mossy Forest" subtitle="Dartmoor, England" />}>
          <img src="http://www.fubiz.net/wp-content/uploads/2019/01/Neil-Burnell-mystical-02.jpg" alt="" />
      </CardMedia>
      <CardText>
        Wistman's Wood
        Photo by Neil Burnell
      </CardText>
    </Card>
    </MuiThemeProvider>
  )
}

export default Cards;
