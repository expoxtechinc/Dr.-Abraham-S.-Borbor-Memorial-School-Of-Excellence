import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { SchoolCrest } from "@/components/SchoolCrest";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-lg">
          <SchoolCrest className="h-20 w-20 mx-auto opacity-70" />
          <p className="mt-6 font-display text-7xl font-bold text-primary">404</p>
          <h1 className="mt-2 font-display text-2xl sm:text-3xl font-bold">
            This page seems to have wandered off campus.
          </h1>
          <p className="mt-3 text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <Link href="/">
              <Button size="lg" className="font-semibold">
                <Home className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
