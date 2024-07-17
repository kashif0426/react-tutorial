interface Props{
    color: string;
    onClick: () => void;
    text: string;
}

const Button = ({ color, text, onClick}: Props) => {
  return (
    <button className={"btn btn-"+color} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button;