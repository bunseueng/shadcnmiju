import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginCard = () => {
  return (
    <Card className="w-85.5">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="miju@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
                placeholder="******"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="relative my-8">
          <div className="relative flex justify-center text-sm">
            <span className="px-3 text-muted-foreground">or continue with</span>
          </div>
        </div>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>

        <p className="text-sm text-center text-muted-foreground mt-8 font-medium">
          Don&apos;t have an account?
          <Button variant="link" className="text-primary font-semibold">
            Sign Up
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
