import {Guest} from "core/dist";
import InputField from "@/components/shared/InputField";
import CheckboxField from "@/components/shared/CheckboxField";

export interface GuestFormProps {
    guest: Partial<Guest>;
    isGuestChanged: (guest: Partial<Guest>) => void;
}

export default function GuestForm(props: GuestFormProps) {
    return (
        <div className="flex flex-col gap-5">
            <InputField
                label="Name"
                value={props.guest.name ?? ""}
                onChange={(e: any) =>
                    props.isGuestChanged({...props.guest, name: e.target.value})
                }
            />
            <InputField
                label="E-mail"
                value={props.guest.email ?? ""}
                onChange={(e) =>
                    props.isGuestChanged({...props.guest, email: e.target.value})
                }
            />
            <div className="flex gap-5">
                <CheckboxField
                    label="Confirmed?"
                    value={props.guest.confirmed ?? true}
                    onChange={(valor) =>
                        props.isGuestChanged({...props.guest, confirmed: valor})
                    }
                    className="flex-1"
                />
                {props.guest.confirmed && (
                    <div className="flex-1 flex gap-5">
                        <CheckboxField
                            label="Is there guests?"
                            value={props.guest.isAccompanied ?? false}
                            onChange={(valor) =>
                                props.isGuestChanged({
                                    ...props.guest,
                                    isAccompanied: valor,
                                    numberCompanions: valor ? 1 : 0,
                                })
                            }
                            className="flex-1"
                        />
                        {props.guest.isAccompanied && (
                            <InputField
                                label="Number of Companions?"
                                value={props.guest.numberCompanions ?? 1}
                                onChange={(e) =>
                                    props.isGuestChanged({
                                        ...props.guest,
                                        numberCompanions: +e.target.value,
                                    })
                                }
                                min={1}
                                type="number"
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
