/**
 * Input component
 *
 */

import React, { useState } from "react";

const Input = ({
  placeholder,
  classes,
  type = "text",
  parentRef,
  ...other
}) => {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <input
      ref={parentRef}
      type={type}
      className={classes}
      value={search}
      onChange={(e) => handleChange(e)}
      placeholder={placeholder}
      {...other}
    />
  );
};

export default React.forwardRef((props, ref) => (
  <Input {...props} parentRef={ref} />
));
