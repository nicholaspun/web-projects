import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';

export default class SingleImage extends Component {
  render () {
    var iconStyles = {
      zIndex: 100,
      position: "absolute",
      cursor: "pointer",
      marginLeft: "20px",
      marginTop: "20px"
    }
    var imgStyle = {
      width: "80%",
      margin: "0 auto",
      display: "block",
      minWidth:"none"
    }
    return (
      <Card style={{width: "80%", margin: "50px auto"}}>
        {/* Image */}
        <CardMedia style={{overflow: 'hidden', position: "relative"}}
                   overlay={<CardTitle title={this.props.name} />}>
          <FontIcon className="material-icons"
                    style={iconStyles}
                    onClick={this.props.renderImageGrid.bind(this)}>
                    arrow_back
          </FontIcon>
          <img style={imgStyle} alt={this.props.name} src={this.props.image_url} />
        </CardMedia>

        {/* Body */}
        <CardText>{this.props.description ? this.props.description : "No Description"}</CardText>
        <CardText style={{textAlign: "center"}}>
          <ActionFavorite />
          <span style={{fontSize: "18px"}}>&nbsp;{this.props.likes}</span>
        </CardText>
      </Card>
    );
  }
}
