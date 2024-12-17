import React from "react";
import Newblock1 from "./Newblock1";

function Block2(props) {
  return (
    <div className="iskl">
      {props.hall.seats.map((el) => (
        <Newblock1
          key={el.id}
          ele={el}
          columns={props.columns}
          param={props.param}
          user={props.user}
        />
      ))}
    </div>
  );
}

export default Block2;
