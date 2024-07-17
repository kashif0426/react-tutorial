import Button from "./assets/components/button"

const App = () => {
  const handleClick = ()=> console.log('Clicked');
  return (
    <Button color="primary" text="test" onClick={handleClick}/>
  )
}

export default App