const UsersWantCount = ({length}) => {
    const renderPhrase = (number) => {
        if (number > 4 && number < 15) return " человек тусанёт";
    
        const lastOne = Number(number.toString().slice(-1));
        if ([2, 3, 4].indexOf(lastOne) >= 0) return " человека тусанут";
        if (number === 1) return " человек тусанёт";
      };
  return <>
  <h2>
        {" "}
        <span
          className={"badge bg-" + (length > 0 ? "primary" : "danger")}
        >
          {length > 0
            ? length + `${renderPhrase(length)} с тобой сегодня`
            : "Никто с тобой не тусанёт"}{" "}
        </span>
      </h2>
  </>;
};
export default UsersWantCount;
