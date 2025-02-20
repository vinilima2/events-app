import Page from "@/components/templates/Page";
import React from "react";
import {Toaster} from "@/components/ui/toaster";
import {MessageContextProvider} from "@/data/contexts/MessageContext";
import {EventProvider} from "@/data/contexts/EventContext";
import {EventsProvider} from "@/data/contexts/EventsContext";

export default function Layout(props: any) {
    return (
        <MessageContextProvider>
            <EventProvider>
                <EventsProvider>
                    <Page>{props.children}</Page>
                    <Toaster/>
                </EventsProvider>
            </EventProvider>
        </MessageContextProvider>
    );
}