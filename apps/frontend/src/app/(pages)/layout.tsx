import Page from "@/components/templates/Page";

export default function Layout(props: any) {
    return (
        <Page>
            {props.children}
        </Page>
    );
}