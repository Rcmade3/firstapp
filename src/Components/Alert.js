import React from "react";

export default function Alert(props) {
  const capitalText = (text) => {
    const toLowerCase = text.toLowerCase();
    return toLowerCase.charAt(0).toUpperCase() + toLowerCase.slice(1);
  };
  return (
    <>
      <div className="contHeight" style={{ height: "60px" }}>
        {props.alert && (
          <div className="alert alert-success" role="alert">
            <strong>{capitalText(props.alert.type)} : </strong>
            {capitalText(props.alert.msg)}
            <button
              type="button"
              className="btn"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
      </div>
    </>
  );
}
