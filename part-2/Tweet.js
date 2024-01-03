function Tweet({ date, message, name, username }) {
  return (
    <div className="tweet">
      <span>{name}</span>
      <span className="date">{date}</span>
      <span classname="username">{username}</span>
      <p>{message}</p>
    </div>
  );
}
