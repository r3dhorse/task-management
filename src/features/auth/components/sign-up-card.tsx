import { FcGoogle } from "react-icons/fc";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const SignUpCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign Up!</CardTitle>
        <CardDescription>
          By signing up, you agree to our{" "}
          <a href="/terms" className="text-blue-500 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
          .
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            required
            type="text"
            value={""}
            placeholder="Enter your full name"
            onChange={() => {}}
            disabled={false}
            min={8}
            max={256}
          />

          <Input
            required
            type="email"
            value={""}
            placeholder="Enter your email"
            onChange={() => {}}
            disabled={false}
          />

          <Input
            required
            type="password"
            value={""}
            placeholder="Enter your password"
            onChange={() => {}}
            disabled={false}
            min={8}
            max={256}
          />
          <div className="w-full">
            <Button disabled={false} size="lg" className="w-full">
              Register
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
