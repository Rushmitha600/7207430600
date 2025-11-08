function App() {
  return (
    <div>
      <Student name="Rushmitha"  />
      <Student name="Mani" />
    </div>
  );
}

function Student(props) {
  return <h2>Hello, {props.name}!</h2>
}

export default App;