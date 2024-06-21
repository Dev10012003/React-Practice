function Message(props) {
  return (
    <div>
      <h1>
        Hello Dev , <span style={props.style}>{props.message}</span>
      </h1>
    </div>
  );
}

export default Message;
