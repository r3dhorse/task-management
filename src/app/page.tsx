import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="gap-4 flex items-center justify-center h-screen">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="outline">outline</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="muted">muted</Button>
      <Button variant="teritary">teritary</Button>
      <Button variant="primary" size="sm">Primary Small</Button>
    </div>
  );
}
