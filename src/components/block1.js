import React from "react";
import * as ReactDOMClient from "react-dom/client";
import Newblock from "./Newblock";

function Block1(props) {
  return (
    <div>
      {props.hall.seats.map((el) => (
        <Newblock
          key={el.id}
          ele={el}
          columns={props.columns}
          Changeseat={props.Changeseat}
          bbt={props.bbt}
          chosen={props.chosen}
          clicked={props.clicked}
          user={props.user}
        />
      ))}
    </div>
  );
}

export default Block1;
