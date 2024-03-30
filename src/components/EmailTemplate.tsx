import { Body, Container, Head, Hr, Html, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

type ContactFormEmailProps = {
    message: string;
    email: string;
};

function EmailTemplate({ email, message }: ContactFormEmailProps) {
    console.log(email, message);

    return (
        <Html>
            <Head />
            <Preview>New message from your personal website</Preview>
            <Tailwind>
                <Body>
                    <Container className="mx-auto max-w-[600px] pb-12 pt-5">
                        <Section className="rounded border p-6 text-center">
                            <Text className="mb-2">The sender email is {email}</Text>
                            <Hr />
                            <Text className="mt-0">{message}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}

export default EmailTemplate;
