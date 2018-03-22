import React, { Component } from 'react';
import Home from "./components/home";
import SushiGrid from "./components/sushigrid";
import Location from "./components/location";
import SideBar from "./components/sidebar";
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      onPage: 2,
      sidebarWidth: 400,
    }
    this.pages = {
      0: <Home width={this.state.sidebarWidth}></Home>,
      1: <SushiGrid width={this.state.sidebarWidth}></SushiGrid>,
      2: <Location width={this.state.sidebarWidth}></Location>,
    }
  }

  renderPage() {
    return this.pages[this.state.onPage];
  }

  changeState(n) {
    this.setState({ onPage: n });
  }

  render() {
    return (
      <div>
        <SideBar width={this.state.sidebarWidth}
                 clickCallback={(n) => this.changeState(n)}>
        </SideBar>
        {this.renderPage()}
      </div>
    );
  }
}
