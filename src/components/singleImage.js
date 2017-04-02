import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import img from "../data/IMG_8627.jpg";
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

export default class SingleImage extends Component {
  render () {
    var iconStyles = {
      marginRight: 24,
    }
    return (
      <Card style={{width: "80%", margin: "20px auto"}}>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar={img}
        />
        <CardMedia
          style={{height: "50%"}}
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src={img} />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardText style={{textAlign: "center"}}>
          <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
          <FontIcon className="material-icons" style={iconStyles} color={red500}>flight_takeoff</FontIcon>
          <FontIcon className="material-icons" style={iconStyles} color={yellow500}>cloud_download</FontIcon>
          <FontIcon className="material-icons" style={iconStyles} color={blue500}>videogame_asset</FontIcon>
        </CardText>
      </Card>
    );
  }
}
