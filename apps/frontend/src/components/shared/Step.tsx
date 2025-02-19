"use client";
import { useState } from "react";

export interface StepProps {
  labels: string[];
  actionLabel: string;
  enableNextStep?: boolean[];
  action: () => void;
  children: any;
}

export default function Step(props: StepProps) {
  const [actualStep, setActualStep] = useState(0);

  function nonPreviousStep() {
    return actualStep === 0;
  }

  function nonNextStep() {
    return actualStep === props.labels.length - 1;
  }

  function previousStep() {
    if (nonPreviousStep()) return;
    setActualStep(actualStep - 1);
  }

  function nextStep() {
    if (nonNextStep()) return;
    setActualStep(actualStep + 1);
  }

  function renderLabels() {
    return (
      <div className="flex gap-4 select-none">
        {props.labels.map((label, i) => {
          const selected = actualStep === i;
          return (
            <div key={i} className="flex items-center gap-2">
              <span
                className={`
                    flex items-center justify-center
                    w-9 h-9 rounded-full
                    ${selected ? "bg-white text-black" : "bg-zinc-700 text-zinc-400"}    
                `}
              >
                {i + 1}
              </span>
              <span className={selected ? "text-white" : "text-zinc-600"}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  const enableNextStep = props.enableNextStep?.[actualStep] ?? true;

  return (
    <div className="flex-1 flex flex-col gap-10 w-full">
      <div className="self-center">{renderLabels()}</div>
      <div>{props.children[actualStep]}</div>
      <div className="flex justify-between">
        <button
          onClick={previousStep}
          className={`
            button
            ${
              nonPreviousStep()
                ? "bg-zinc-400 cursor-not-allowed opacity-50"
                : "bg-zinc-700 hover:bg-zinc-600 text-white"
            }
          `}
          disabled={nonPreviousStep()}
        >
          <span>Previous</span>
        </button>
        {nonNextStep() ? (
          <button
            onClick={props.action}
            disabled={!enableNextStep}
            className={`
                button 
                ${
                  !enableNextStep
                    ? "bg-zinc-400 cursor-not-allowed opacity-50"
                    : "bg-green-700 hover:bg-green-600 text-white"
                }
            `}
          >
            <span>{props.actionLabel}</span>
          </button>
        ) : (
          <button
            onClick={nextStep}
            disabled={!enableNextStep || nonNextStep()}
            className={`
            button
            ${
              !enableNextStep || nonNextStep()
                ? "bg-zinc-400 cursor-not-allowed opacity-50"
                : "bg-green-700 hover:bg-green-600 text-white"
            }
          `}
          >
            <span>Next</span>
          </button>
        )}
      </div>
    </div>
  );
}
