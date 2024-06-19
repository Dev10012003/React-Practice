function Message(props) {
  return (
    <h1>
      Hello Dev , <span style={props.style}>{props.message}</span>
    </h1>
  );
}

export default Message;
