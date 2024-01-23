import { Body, Button, Head, Html } from "@react-email/components";
import * as React from "react";

interface Props {
  ctaText: string;
  ctaUrl: URL;
}

export default function UrlReproEmail({ ctaText, ctaUrl }: Props) {
  return (
    <Html>
      <Head />
      <Body>
        <Button href={ctaUrl.toString()}>{ctaText}</Button>
      </Body>
    </Html>
  );
}

UrlReproEmail.PreviewProps = {
  ctaText: "Click me",
  // ReferenceError: URL is not defined
  ctaUrl: new URL("https://example.com"),
} as Props;
