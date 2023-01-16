// import Bookmark from "./components/Bookmark";

import Bookmark from "./Bookmark"
import Quality from "./Quality"

const User = ({_id,name,qualities,profession,completedMeetings,rate,onDelete,bookmark,onToggleBookmark}) => {
    return (<>
        
        <tr key={_id} className="text-center">
          <td className="text-start">{name}</td>
          <td className="text-start">
            {qualities.map((quality) => (
              <Quality key={quality._id} name={quality.name} id={quality._id} color={quality.color} />
            ))}
          </td>
          <td>{profession.name}</td>
          <td>{completedMeetings}</td>
          <td
            className={"bg-dark text-" + (rate > 4 ? "success" : "danger")}
          >
            {rate} / 5
          </td>
          <td>
           <Bookmark onClick={()=>onToggleBookmark(_id)} status={bookmark} />
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => onDelete(_id)}
            >
              Delete
            </button>
          </td>
        </tr>
    </>)
}

export default User