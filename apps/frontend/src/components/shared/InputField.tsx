import React from "react";

export interface InputFieldProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  value: string | number;
  onChange: (event: any) => void;
  description?: string;
  observation?: string;
  error?: string;
  outterClassName?: string;
}

export default function InputField(props: InputFieldProps) {
  function propsInput() {
    const propsInput = { ...props };
    delete propsInput.label;
    delete propsInput.description;
    delete propsInput.observation;
    delete propsInput.error;
    delete propsInput.outterClassName;
    return propsInput;
  }

  return (
    <div className={`flex flex-col gap-2 ${props.outterClassName ?? ""}`}>
      <div className="flex flex-col">
        {props.label && (
          <label className="text-lg font-black text-white">{props.label}</label>
        )}
        {props.description && (
          <p className="text-sm font-light text-zinc-400 -mt-1">
            {props.description}
          </p>
        )}
      </div>
      <input
        {...propsInput()}
        type={props.type ?? "text"}
        className="w-full px-3 py-2 border border-white/20 focus:border-white/50 rounded-md bg-black/50"
      />
      {props.error && (
        <span className="pl-2 text-sm text-red-500">{props.error}</span>
      )}
      {!props.error && props.observation && (
        <span className="pl-2 text-xs text-yellow-300">{props.observation}</span>
      )}
    </div>
  );
}
