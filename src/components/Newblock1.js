import React from "react";
import * as ReactDOMClient from "react-dom/client";

function Newblock(props) {
  if (props.param.key != 0) {
    if (
      props.ele.booked_by_id != null &&
      props.user.id != props.ele.booked_by_id
    ) {
      if (props.ele.column + 1 != props.columns) {
        return <div className="seatbusy1"></div>;
      } else {
        return (
          <>
            <div className="seatbusy1"></div>
            <br></br>
          </>
        );
      }
    } else if (props.ele.id == props.param.key.seat.id) {
      if (props.ele.column + 1 != props.columns) {
        return <div className="seatch1"></div>;
      } else {
        return (
          <>
            <div className="seatch1"></div>
            <br></br>
          </>
        );
      }
    } else if (props.user.id == props.ele.booked_by_id) {
      if (props.ele.column + 1 != props.columns) {
        return <div className="seatyour1"></div>;
      } else {
        return (
          <>
            <div className="seatyour1"></div>
            <br></br>
          </>
        );
      }
    } else {
      if (props.ele.column + 1 != props.columns) {
        return <div className="seat1"></div>;
      } else {
        return (
          <>
            <div className="seat1"></div>
            <br></br>
          </>
        );
      }
    }
  } else {
    if (
      props.ele.booked_by_id != null &&
      props.user.id != props.ele.booked_by_id
    ) {
      if (props.ele.column + 1 != props.columns) {
        return <div className="seatbusy1"></div>;
      } else {
        return (
          <>
            <div className="seatbusy1"></div>
            <br></br>
          </>
        );
      }
    } else if (props.user.id == props.ele.booked_by_id) {
      if (props.ele.column + 1 != props.columns) {
        return <div className="seatyour1"></div>;
      } else {
        return (
          <>
            <div className="seatyour1"></div>
            <br></br>
          </>
        );
      }
    } else {
      if (props.ele.column + 1 != props.columns) {
        return <div className="seat1"></div>;
      } else {
        return (
          <>
            <div className="seat1"></div>
            <br></br>
          </>
        );
      }
    }
  }
}

export default Newblock;
