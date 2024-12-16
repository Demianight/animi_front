import React, { useState } from "react";
import * as ReactDOMClient from "react-dom/client";
import Block1 from "./block1";

function Bottomblock(props) {
  return (
    <>
      <div
        className="info"
        style={props.block == 1 || props.block == 2 ? { left: "35%" } : {}}
      >
        <div style={{ fontSize: "30px" }}>Места</div>
        <div className="infobusy"></div> <>Занятое</> <br></br>
        <div className="infoyour"></div> <>Ваше</> <br></br>
        <div className="infofree"></div> <>Свободное</> <br></br>
        <div className="infochose"></div> <>Выбраное</> <br></br>
      </div>
      <div
        className="Bottomblock"
        style={
          props.block == 1 || props.block == 2
            ? { margin: "400px 0px 0px 82vh" }
            : {}
        }
      >
        <Block1
          hall={props.hall.blocks[props.block]}
          columns={props.hall.blocks[props.block].columns}
          Changeseat={props.Changebutton}
          bbt={props.block}
          chosen={props.chosen}
          clicked={props.clicked}
          user={props.user}
        />
      </div>
      <button
        className="Delbutton"
        disabled={!props.check || props.chosen == 0}
        type="button"
        onClick={() => props.Allfunkdel(props.chosen)}
      >
        Отменить
      </button>
      <button
        className="Addbutton"
        disabled={props.check || props.chosen == 0}
        type="button"
        onClick={() => props.Allfunkadd(props.chosen)}
      >
        Выбрать
      </button>
    </>
  );
}

export default Bottomblock;
