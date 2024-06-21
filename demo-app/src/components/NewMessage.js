function Newmessage(props) {
  const onButtonClick = (event) => {
    event.preventDefault();
    const data = "Thank you For clicking ";
    props.saveData(data);
  };

  return <button onClick={onButtonClick}>Click me</button>;
}

export default Newmessage;
