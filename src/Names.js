import React, { Component } from "react";
import "./Names.css";
import { MockDb } from "./mockDb";

export default class Names extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: MockDb,
    };
  }

  render() {
    console.log(MockDb[5]);
    return this.state.db.map((nameObj) => {
      return <RenderNameCard nameObj={nameObj} />;
    });
  }
}

function RenderNameCard({ nameObj }) {
  const { name, age } = nameObj;
  return (
    <div className="name">
      {name}
      <p>... is a student, age {age}</p>
    </div>
  );
}
