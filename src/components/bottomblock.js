import React, { useState } from "react";
import * as ReactDOMClient from "react-dom/client";
import Block1 from "./block1";

function Bottomblock(props) {
  return (
    <div
      className="Bottomblockp"
      style={{ width: `${props.hall.blocks[props.block].columns * 35}px` }}
    >
      <div className="Bottomblock">
        <div className="info">
          <div
            style={{
              fontSize: "15px",
            }}
          >
            Места
          </div>
          <div className="infobusy"></div> <>Занятое</> <br></br>
          <div className="infoyour"></div> <>Ваше</> <br></br>
          <div className="infofree"></div> <>Свободное</> <br></br>
          <div className="infochose"></div> <>Выбраное</> <br></br>
        </div>
        <Block1
          hall={props.hall.blocks[props.block]}
          columns={props.hall.blocks[props.block].columns}
          Changeseat={props.Changebutton}
          bbt={props.block}
          chosen={props.chosen}
          clicked={props.clicked}
          user={props.user}
          status={props.status}
        />
        <button
          className="Addbutton"
          disabled={props.check || props.chosen == 0}
          type="button"
          onClick={() => props.Allfunkadd(props.chosen)}
        >
          Выбрать
        </button>
        <button
          className="Delbutton"
          disabled={!props.check || props.chosen == 0}
          type="button"
          onClick={() => props.Allfunkdel(props.chosen)}
        >
          Отменить
        </button>
      </div>
    </div>
  );
}

export default Bottomblock;
