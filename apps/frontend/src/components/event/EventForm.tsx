import useEvent from "@/data/hooks/useEvent";
import Step from "../shared/Step";
import InputField from "../shared/InputField";
import { Alias, EventDate } from "core/dist";

export default function EventForm() {
  const { event, isValidAlias, changeEvent, saveEvent } = useEvent();

  const labels = [
    "Identifier of Event",
    "Locale e Date",
    "Final Information",
  ];

  const enableNextStep: boolean[] = [
    !!event?.alias && !!event?.name && isValidAlias,
    !!event?.date && !!event?.locale,
    !!event?.description && (event?.expectedAudience ?? 0) > 0
  ];

  return (
    <div>
      <Step
        labels={labels}
        actionLabel="Save"
        action={saveEvent}
        enableNextStep={enableNextStep}
      >
        <div className="flex flex-col gap-5">
          <InputField
            label="Identifier"
            description="Unique and unique identifier for the event (used in the URL)"
            value={Alias.format(event?.alias ?? "")}
            onChange={(e) =>
              changeEvent({
                ...event,
                alias: Alias.format(e.target.value),
              })
            }
            error={isValidAlias ? "" : "Alias has already been used in another event"}
          />
          <InputField
            label="Name"
            description='Name of the event (e.g. "John"s Birthday Party")'
            value={event?.name ?? ""}
            onChange={(e) =>
              changeEvent({
                ...event,
                name: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <InputField
            label="Date/Time"
            description="Date and time the event will occur"
            value={EventDate.format(event?.date ?? new Date())}
            onChange={(e) =>
              changeEvent({
                ...event,
                date: EventDate.parseToDate(e.target.value),
              })
            }
            type="datetime-local"
          />
          <InputField
            label="Local"
            description="Location where the event will be held"
            value={event?.locale ?? ""}
            onChange={(e) =>
              changeEvent({
                ...event,
                locale: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <InputField
            label="Description"
            description='Description of the event (e.g. "Only enter if you bring a gift!")'
            value={event?.description ?? ""}
            onChange={(e) =>
              changeEvent({
                ...event,
                  description: e.target.value,
              })
            }
          />
          <InputField
            label="Image"
            description="URL of the image that will be displayed on the invitation"
            value={event?.image ?? ""}
            onChange={(e) =>
              changeEvent({
                ...event,
                image: e.target.value,
              })
            }
          />
          <InputField
            label="Background"
            description="URL of the image that will be displayed as the background in the invitation"
            value={event?.backgroundImage ?? ""}
            onChange={(e) =>
              changeEvent({
                ...event,
                backgroundImage: e.target.value,
              })
            }
          />
          <InputField
            label="Expected Audience"
            description="Total expected guests and companions"
            value={event?.expectedAudience ?? 1}
            onChange={(e) =>
              changeEvent({
                ...event,
                expectedAudience: Number(e.target.value),
              })
            }
            type="number"
            min={1}
          />
        </div>
      </Step>
    </div>
  );
}
