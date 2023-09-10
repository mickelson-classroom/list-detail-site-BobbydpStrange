import { FC } from "react";
import {Movie} from "../models/movie";


export const Item: FC<{
  item: Movie;
  onClick: (m: Movie) => void;
  onDelete: (m: Movie) => void;
  isSelected: boolean;
  
}> = ({ item, onClick, onDelete, isSelected }) => {
  const handleDelete = () => {
    onDelete(item);
  };
  return (
    <li
      onClick={() => onClick(item)}
      className={`list-group-item btn-primary  ${isSelected && "active"}`}
      role="button"
      >
        <div className="row">
          <div className="col col-8  ">
            {item.title}
          </div>
          <div className="col">
            <button
                className="btn btn-danger"
                onClick={handleDelete}>Delete
            </button>
          </div>
        </div>
    </li>
  );
};

export default Item;
