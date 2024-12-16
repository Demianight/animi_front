import React from "react";

function SeatButton({ className, disabled, onClick, needsBreak }) {
  return (
    <>
      <button
        className={className}
        type="button"
        disabled={disabled}
        onClick={onClick}
      ></button>
      {needsBreak && <br />}
    </>
  );
}

function Newblock(props) {
  const { ele, chosen, clicked, columns, Changeseat } = props;

  const key = {
    id: props.bbt,
    seat: {
      row: ele.row,
      column: ele.column,
      block_id: ele.block_id,
      booked_by_id: null,
      id: ele.id,
      status: "available",
    },
  };

  const isLastColumn = ele.column + 1 === columns;
  const needsBreak = isLastColumn;

  if (ele.booked_by_id != null && ele.booked_by_id != props.user.id) {
    return (
      <SeatButton
        className="seatbusy"
        disabled={true}
        needsBreak={needsBreak}
      />
    );
  }

  if (ele.booked_by_id == props.user.id) {
    return (
      <SeatButton
        className="seatyour"
        disabled={true}
        needsBreak={needsBreak}
      />
    );
  }

  if (chosen && ele.id === chosen.seat.id) {
    return (
      <SeatButton
        className="seatch"
        disabled={clicked === 1}
        onClick={() => Changeseat(key)}
        needsBreak={needsBreak}
      />
    );
  }

  return (
    <SeatButton
      className="seat"
      disabled={clicked === 1}
      onClick={() => Changeseat(key)}
      needsBreak={needsBreak}
    />
  );
}

export default Newblock;
