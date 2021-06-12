import React from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Header } from "./Header";

class TrelloBoard extends React.Component {
  render() {
    return (
      /*Can start Coding from Here*/
      <div>
        <Header />
      </div>
    );
  }
}

export default TrelloBoard;
