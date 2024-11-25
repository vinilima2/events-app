"use client";
import { useToast } from "@/data/hooks/useToast";
import { createContext, useCallback } from "react";

export interface MessageContextProps {
  addSuccess: (texto: string) => void;
  addError: (texto: string) => void;
}

const MessageContext = createContext<MessageContextProps>({} as any);

export function MessageContextProvider(props: any) {
  const { toast } = useToast();

  const addMessage = useCallback(
    function (type: "success" | "error", text: string) {
      toast({
        title:
          type == "success" ? "Success for action!" : "Wrong result!",
        description: text
          .split(/\n/)
          .map((linha) => <p key={linha}>{linha}</p>),
        variant: type == "success" ? "default" : "destructive",
      });
    },
    [toast]
  );

  return (
    <MessageContext.Provider
      value={{
        addSuccess(texto) {
          addMessage("success", texto);
        },
        addError(texto) {
          addMessage("error", texto);
        },
      }}
    >
      {props.children}
    </MessageContext.Provider>
  );
}

export default MessageContext;
