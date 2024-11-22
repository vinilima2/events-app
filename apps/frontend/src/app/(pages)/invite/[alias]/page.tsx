import { use } from "react";

export default function InvitePage(props: any) {
  const params: any = use(props.params)
  return (
    <div>{params.alias}</div>
  );
}