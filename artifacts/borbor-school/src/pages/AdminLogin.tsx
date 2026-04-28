import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { SchoolCrest } from "@/components/SchoolCrest";
import { Lock, AlertCircle, Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const { isAuthed, login } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPwd, setShowPwd] = useState(false);
  useDocumentTitle("Admin Login | Borbor Memorial");

  useEffect(() => {
    if (isAuthed) setLocation("/admin/dashboard");
  }, [isAuthed, setLocation]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const r = login(email, password);
    if (r.ok) {
      setLocation("/admin/dashboard");
    } else {
      setError(r.error);
    }
  }

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center bg-secondary/30 py-16 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <SchoolCrest className="h-20 w-20 mx-auto" />
            <h1 className="mt-5 font-display text-3xl font-bold">Admin Panel</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage school content, activities, and messages.
            </p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-primary">
                <Lock className="h-4 w-4" />
                <p className="text-sm font-semibold uppercase tracking-wider">Sign In</p>
              </div>
              <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-1.5">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="borborschool.admin@gmail.com"
                    data-testid="input-admin-email"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="login-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showPwd ? "text" : "password"}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••"
                      data-testid="input-admin-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPwd((v) => !v)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1.5"
                      aria-label={showPwd ? "Hide password" : "Show password"}
                    >
                      {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                {error && (
                  <div className="flex items-start gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-md p-3">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}
                <Button type="submit" className="w-full font-semibold" size="lg" data-testid="button-admin-login">
                  Sign In
                </Button>
              </form>
              <div className="mt-6 pt-5 border-t">
                <p className="text-xs text-muted-foreground">
                  Default credentials are seeded on first load. You can change them anytime from
                  the dashboard. All admin data is stored locally in your browser.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
