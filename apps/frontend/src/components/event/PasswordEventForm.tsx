import InputField from "@/components/shared/InputField";

export interface PasswordEventFormProps {
  password: string | null;
  setPassword: (password: string) => void;
  accessEvent: () => void;
}

export default function PasswordEventForm(props: PasswordEventFormProps) {
  return (
    <div className="flex flex-col items-center p-5 gap-4 bg-zinc-900 p-8rounded-lg shadow-lg w-[500px] border border-zinc-800">
      <h1 className="text-3xl font-black">Welcome</h1>
      <h2 className="text-lg font-semibold -mt-3">Admin</h2>
      <p className="text-sm text-zinc-400">
        Put your password and acess your event
      </p>
      <InputField
        value={props.password ?? ''}
        onChange={(e) => props.setPassword(e.target.value)}
        placeholder="Put your password"
        type="password"
        outterClassName="w-full"
      />
      <button className="button blue" onClick={props.accessEvent}>
        Access Event
      </button>
    </div>
  );
}
