import React from "react";
import Block2 from "./block2";

function Topblock(props) {
  if (props.hall.blocks[3]) {
    return (
      <div>
        <button
          style={
            props.block === 0
              ? {
                  background: "rgb(210,234,213)",
                  border: "2px solid rgb(122,203,107)",
                }
              : {}
          }
          className="Topblock1"
          type="button"
          onClick={() => props.Changeblock(0)}
        >
          <Block2
            hall={props.hall.blocks[0]}
            columns={props.hall.blocks[0].columns}
            Changeblock={props.Changeblock}
            blockid={0}
            param={props.param}
            user={props.user}
          />
        </button>
        <button
          style={
            props.block === 1
              ? {
                  background: "rgb(210,234,213)",
                  border: "2px solid rgb(122,203,107)",
                }
              : {}
          }
          className="Topblock1"
          type="button"
          onClick={() => props.Changeblock(1)}
        >
          <Block2
            hall={props.hall.blocks[1]}
            columns={props.hall.blocks[1].columns}
            Changeblock={props.Changeblock}
            blockid={1}
            param={props.param}
            user={props.user}
          />
        </button>
        <button
          style={
            props.block === 2
              ? {
                  background: "rgb(210,234,213)",
                  border: "2px solid rgb(122,203,107)",
                }
              : {}
          }
          className="Topblock1"
          type="button"
          onClick={() => props.Changeblock(2)}
        >
          <Block2
            hall={props.hall.blocks[2]}
            columns={props.hall.blocks[2].columns}
            Changeblock={props.Changeblock}
            blockid={2}
            param={props.param}
            user={props.user}
          />
        </button>
        <button
          style={
            props.block === 3
              ? {
                  background: "rgb(210,234,213)",
                  border: "2px solid rgb(122,203,107)",
                }
              : {}
          }
          className="Topblock1"
          type="button"
          onClick={() => props.Changeblock(3)}
        >
          <Block2
            hall={props.hall.blocks[3]}
            columns={props.hall.blocks[3].columns}
            Changeblock={props.Changeblock}
            blockid={3}
            param={props.param}
            user={props.user}
          />
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button
          style={
            props.block === 0
              ? {
                  background: "rgb(210,234,213)",
                  border: "2px solid rgb(122,203,107)",
                }
              : {}
          }
          className="Topblock1"
          type="button"
          onClick={() => props.Changeblock(0)}
        >
          <Block2
            hall={props.hall.blocks[0]}
            columns={props.hall.blocks[0].columns}
            Changeblock={props.Changeblock}
            blockid={0}
            param={props.param}
            user={props.user}
          />
        </button>
        <button
          style={
            props.block === 1
              ? {
                  background: "rgb(210,234,213)",
                  border: "2px solid rgb(122,203,107)",
                }
              : {}
          }
          className="Topblock1"
          type="button"
          onClick={() => props.Changeblock(1)}
        >
          <Block2
            hall={props.hall.blocks[1]}
            columns={props.hall.blocks[1].columns}
            Changeblock={props.Changeblock}
            blockid={1}
            param={props.param}
            user={props.user}
          />
        </button>
        <button
          style={
            props.block === 2
              ? {
                  background: "rgb(210,234,213)",
                  border: "2px solid rgb(122,203,107)",
                }
              : {}
          }
          className="Topblock1"
          type="button"
          onClick={() => props.Changeblock(2)}
        >
          <Block2
            hall={props.hall.blocks[2]}
            columns={props.hall.blocks[2].columns}
            Changeblock={props.Changeblock}
            blockid={2}
            param={props.param}
            user={props.user}
          />
        </button>
      </div>
    );
  }
}

export default Topblock;
