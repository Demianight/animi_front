import React from "react";

function Newblock(props) {
  const { ele, user, columns, param } = props;

  const isLastColumn = ele.column + 1 === columns;
  const isBookedByOthers =
    ele.booked_by_id != null && ele.booked_by_id !== user.id;
  const isSelectedSeat = param.clicked === 1 && ele.id === param.key?.seat?.id;
  const isBookedByUser = ele.booked_by_id === user.id;

  let className = "seat1";
  if (isBookedByOthers) {
    className = "seatbusy1";
  } else if (isSelectedSeat || isBookedByUser) {
    className = "seatyour1";
  } else if (ele.id === param.key?.seat?.id) {
    className = "seatch1";
  }

  return (
    <>
      <div className={className}></div>
      {isLastColumn && <br />}
    </>
  );
}

export default Newblock;
