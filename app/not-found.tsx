import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-5 py-32">
      <Eyebrow>404</Eyebrow>
      <h1 className="font-display text-4xl font-bold sm:text-5xl">This page isn’t part of the plan.</h1>
      <p className="text-lg text-muted">The page you’re looking for doesn’t exist or has moved.</p>
      <ButtonLink href="/">Back to home</ButtonLink>
    </Container>
  );
}
