import React, { useRef } from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  //or InputField: React.FC<Props> =({todo,setTodo})
  const inputRef = useRef<HTMLInputElement>(null); //HTMLInputElement是type喔

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur(); //shift the focus on the input box
        //using current? is because maybe the input is empty
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="Enter a task"
        className="input_box"
      />

      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
