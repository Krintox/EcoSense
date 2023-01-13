import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

export default function Post({_id,title,summary,accepted,cover,content,createdAt,author}) {

  return (
    <div className="post">
      <div className="image">
          <img src={'http://localhost:4000/'+cover} alt=""/>
      </div>
      <div className="texts">
        <h2>Water clogged</h2>
        <p className="info">
          <a className="author">Author</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">Water clogged in Vellore</p>
      </div>
    </div>
  );
}