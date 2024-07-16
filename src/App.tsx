import Alert from "./assets/components/alert";
interface Props{
  text: string;
}


function App( {text}:Props) {
  return (
    <div className="alert alert-primary">
      <Alert></Alert>
    </div>
  );
}

export default App;
