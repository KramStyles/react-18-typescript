interface ButtonProps {
  children: string;
  // ?: to make it optional. Below are allowed options
  color?: "primary" | "secondary" | "success" | "warning";
  onclick: () => void;
}

const Button = ({ children, onclick, color = "primary" }: ButtonProps) => {
  return (
    <button type="button" onClick={onclick} className={"mx-1 btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
