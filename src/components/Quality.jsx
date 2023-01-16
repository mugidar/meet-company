const Quality = ({id, color, name}) => {
  return(<>
  <span key={id} className={"badge m-1 bg-" + color}>
    {name}
  </span>
  </>)
  
};

export default Quality