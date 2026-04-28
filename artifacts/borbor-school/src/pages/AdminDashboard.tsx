import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useStoreValue } from "@/hooks/useStore";
import {
  getSchoolInfo,
  setSchoolInfo,
  getActivities,
  setActivities,
  getNews,
  setNews,
  getGallery,
  setGallery,
  getMessages,
  setMessages,
  getAdmin,
  getEvents,
  setEvents,
  getTestimonials,
  setTestimonials,
  type Activity,
  type NewsItem,
  type GalleryItem,
  type EventItem,
  type Testimonial,
  uid,
} from "@/lib/store";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useToast } from "@/hooks/use-toast";
import {
  LayoutDashboard,
  Settings,
  Calendar,
  CalendarDays,
  Newspaper,
  Image as ImageIcon,
  Inbox,
  KeyRound,
  LogOut,
  Plus,
  Trash2,
  Save,
  Mail,
  CheckCircle2,
  MessageSquareQuote,
} from "lucide-react";
import { SchoolCrest } from "@/components/SchoolCrest";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { isAuthed, logout, changePassword } = useAdminAuth();
  const { toast } = useToast();
  const school = useStoreValue(getSchoolInfo);
  const activities = useStoreValue(getActivities);
  const news = useStoreValue(getNews);
  const gallery = useStoreValue(getGallery);
  const messages = useStoreValue(getMessages);
  const admin = useStoreValue(getAdmin);
  const events = useStoreValue(getEvents);
  const testimonials = useStoreValue(getTestimonials);
  useDocumentTitle("Dashboard | Admin · Borbor Memorial");

  useEffect(() => {
    if (!isAuthed) setLocation("/admin");
  }, [isAuthed, setLocation]);

  if (!isAuthed) return null;

  const unread = messages.filter((m) => !m.read).length;

  return (
    <Layout>
      <section className="bg-brand-radial text-white pt-24 sm:pt-28 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <SchoolCrest className="h-14 w-14" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                  Administrator Portal
                </p>
                <h1 className="font-display text-2xl sm:text-3xl font-bold">Dashboard</h1>
                <p className="text-sm text-white/70">Signed in as {admin.email}</p>
              </div>
            </div>
            <Button
              onClick={() => {
                logout();
                setLocation("/admin");
              }}
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
              data-testid="button-logout"
            >
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <DashStat icon={Calendar} label="Activities" value={activities.length} />
            <DashStat icon={CalendarDays} label="Events" value={events.length} />
            <DashStat icon={Newspaper} label="News" value={news.length} />
            <DashStat icon={ImageIcon} label="Gallery" value={gallery.length} />
            <DashStat icon={MessageSquareQuote} label="Voices" value={testimonials.length} />
            <DashStat icon={Inbox} label="Messages" value={messages.length} highlight={unread} />
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="info" className="w-full">
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <TabsList className="h-auto p-1.5 bg-secondary/70 flex w-max lg:w-full lg:grid lg:grid-cols-9 gap-1">
                <TabsTrigger value="info" className="gap-1.5">
                  <LayoutDashboard className="h-4 w-4" /> Info
                </TabsTrigger>
                <TabsTrigger value="activities" className="gap-1.5">
                  <Calendar className="h-4 w-4" /> Activities
                </TabsTrigger>
                <TabsTrigger value="events" className="gap-1.5">
                  <CalendarDays className="h-4 w-4" /> Events
                </TabsTrigger>
                <TabsTrigger value="news" className="gap-1.5">
                  <Newspaper className="h-4 w-4" /> News
                </TabsTrigger>
                <TabsTrigger value="gallery" className="gap-1.5">
                  <ImageIcon className="h-4 w-4" /> Gallery
                </TabsTrigger>
                <TabsTrigger value="testimonials" className="gap-1.5">
                  <MessageSquareQuote className="h-4 w-4" /> Voices
                </TabsTrigger>
                <TabsTrigger value="inbox" className="gap-1.5">
                  <Inbox className="h-4 w-4" /> Inbox{unread > 0 && (
                    <Badge className="ml-1 bg-destructive text-destructive-foreground border-0 px-1.5 py-0 h-5 text-[10px]">
                      {unread}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger value="security" className="gap-1.5">
                  <KeyRound className="h-4 w-4" /> Security
                </TabsTrigger>
                <TabsTrigger value="settings" className="gap-1.5">
                  <Settings className="h-4 w-4" /> Settings
                </TabsTrigger>
              </TabsList>
            </div>

            {/* INFO */}
            <TabsContent value="info" className="mt-6">
              <SchoolInfoEditor onSaved={() => toast({ title: "School info saved" })} />
            </TabsContent>

            {/* ACTIVITIES */}
            <TabsContent value="activities" className="mt-6">
              <ActivitiesEditor onChanged={() => toast({ title: "Activities updated" })} />
            </TabsContent>

            {/* EVENTS */}
            <TabsContent value="events" className="mt-6">
              <EventsEditor onChanged={() => toast({ title: "Events updated" })} />
            </TabsContent>

            {/* NEWS */}
            <TabsContent value="news" className="mt-6">
              <NewsEditor onChanged={() => toast({ title: "News updated" })} />
            </TabsContent>

            {/* GALLERY */}
            <TabsContent value="gallery" className="mt-6">
              <GalleryEditor onChanged={() => toast({ title: "Gallery updated" })} />
            </TabsContent>

            {/* TESTIMONIALS */}
            <TabsContent value="testimonials" className="mt-6">
              <TestimonialsEditor onChanged={() => toast({ title: "Testimonials updated" })} />
            </TabsContent>

            {/* INBOX */}
            <TabsContent value="inbox" className="mt-6">
              <Inbox_ />
            </TabsContent>

            {/* SECURITY */}
            <TabsContent value="security" className="mt-6">
              <Card className="max-w-2xl">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-display text-xl font-bold">Change Login Credentials</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Update the admin email or password. Stored locally in your browser.
                  </p>
                  <ChangePasswordForm changePassword={changePassword} adminEmail={admin.email} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-6">
              <Card>
                <CardContent className="p-6 sm:p-8 space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-bold">Reset Demo Data</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Clear all custom content and restore the original demo content. Useful when
                      preparing for production hand-off.
                    </p>
                    <Button
                      variant="destructive"
                      className="mt-4"
                      onClick={() => {
                        if (!confirm("This will erase all your edits. Continue?")) return;
                        localStorage.removeItem("borbor.seeded.v2");
                        localStorage.removeItem("borbor.seeded.v1");
                        location.reload();
                      }}
                      data-testid="button-reset-demo"
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Reset & Reseed
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}

function DashStat({ icon: Icon, label, value, highlight }: { icon: any; label: string; value: number; highlight?: number }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
      <div className="flex items-center justify-between">
        <Icon className="h-5 w-5 text-accent" />
        {highlight && highlight > 0 ? (
          <Badge className="bg-accent text-accent-foreground border-0 text-[10px]">
            {highlight} new
          </Badge>
        ) : null}
      </div>
      <p className="mt-3 font-display text-3xl font-bold">{value}</p>
      <p className="text-xs uppercase tracking-wider text-white/70 mt-1">{label}</p>
    </div>
  );
}

function SchoolInfoEditor({ onSaved }: { onSaved: () => void }) {
  const current = useStoreValue(getSchoolInfo);
  const [draft, setDraft] = useState(current);
  useEffect(() => setDraft(current), [current]);
  function update<K extends keyof typeof draft>(key: K, val: (typeof draft)[K]) {
    setDraft({ ...draft, [key]: val });
  }
  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <h3 className="font-display text-xl font-bold">School Information</h3>
        <p className="text-sm text-muted-foreground mt-1">
          These fields appear across the public website.
        </p>
        <form
          className="mt-6 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setSchoolInfo(draft);
            onSaved();
          }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="School Name">
              <Input value={draft.name} onChange={(e) => update("name", e.target.value)} data-testid="input-school-name" />
            </Field>
            <Field label="Short Name / Acronym">
              <Input value={draft.shortName} onChange={(e) => update("shortName", e.target.value)} />
            </Field>
            <Field label="Motto">
              <Input value={draft.motto} onChange={(e) => update("motto", e.target.value)} />
            </Field>
            <Field label="Established">
              <Input value={draft.established} onChange={(e) => update("established", e.target.value)} />
            </Field>
          </div>
          <Field label="Tagline">
            <Input value={draft.tagline} onChange={(e) => update("tagline", e.target.value)} />
          </Field>
          <Field label="About">
            <Textarea rows={5} value={draft.about} onChange={(e) => update("about", e.target.value)} />
          </Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Mission">
              <Textarea rows={4} value={draft.mission} onChange={(e) => update("mission", e.target.value)} />
            </Field>
            <Field label="Vision">
              <Textarea rows={4} value={draft.vision} onChange={(e) => update("vision", e.target.value)} />
            </Field>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Email">
              <Input type="email" value={draft.email} onChange={(e) => update("email", e.target.value)} />
            </Field>
            <Field label="WhatsApp Number (digits only)">
              <Input value={draft.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} />
            </Field>
            <Field label="Facebook URL">
              <Input value={draft.facebook} onChange={(e) => update("facebook", e.target.value)} />
            </Field>
            <Field label="Address">
              <Input value={draft.address} onChange={(e) => update("address", e.target.value)} />
            </Field>
            <Field label="City / County">
              <Input value={draft.city} onChange={(e) => update("city", e.target.value)} />
            </Field>
            <Field label="Country">
              <Input value={draft.country} onChange={(e) => update("country", e.target.value)} />
            </Field>
          </div>
          <Field label="Phone Numbers (one per line)">
            <Textarea
              rows={3}
              value={draft.phones.join("\n")}
              onChange={(e) => update("phones", e.target.value.split("\n").map((s) => s.trim()).filter(Boolean))}
            />
          </Field>
          <Button type="submit" size="lg" className="font-semibold" data-testid="button-save-info">
            <Save className="mr-2 h-4 w-4" /> Save Changes
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      {children}
    </div>
  );
}

function ActivitiesEditor({ onChanged }: { onChanged: () => void }) {
  const items = useStoreValue(getActivities);
  const [draft, setDraft] = useState<Activity>({
    id: "",
    title: "",
    description: "",
    date: "",
    category: "Event",
    image: "",
  });
  function add() {
    if (!draft.title.trim() || !draft.description.trim()) return;
    const next = [{ ...draft, id: uid("act") }, ...items];
    setActivities(next);
    setDraft({ id: "", title: "", description: "", date: "", category: "Event", image: "" });
    onChanged();
  }
  function remove(id: string) {
    setActivities(items.filter((i) => i.id !== id));
    onChanged();
  }
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-6 sm:p-8">
          <h3 className="font-display text-xl font-bold">Add Activity</h3>
          <div className="mt-5 space-y-4">
            <Field label="Title"><Input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} data-testid="input-activity-title" /></Field>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Date / Period"><Input value={draft.date} onChange={(e) => setDraft({ ...draft, date: e.target.value })} placeholder="e.g. June 2026" /></Field>
              <Field label="Category"><Input value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} placeholder="Sports, Event, Community..." /></Field>
            </div>
            <Field label="Image URL (optional)"><Input value={draft.image || ""} onChange={(e) => setDraft({ ...draft, image: e.target.value })} placeholder="https://..." /></Field>
            <Field label="Description"><Textarea rows={4} value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} data-testid="input-activity-desc" /></Field>
            <Button onClick={add} className="font-semibold" data-testid="button-add-activity">
              <Plus className="mr-2 h-4 w-4" /> Add Activity
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="space-y-3">
        {items.length === 0 && (
          <Card><CardContent className="p-6 text-sm text-muted-foreground">No activities yet.</CardContent></Card>
        )}
        {items.map((a) => (
          <Card key={a.id}>
            <CardContent className="p-5 flex gap-4">
              {a.image && (
                <img src={a.image} alt="" className="h-20 w-20 rounded-md object-cover shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="secondary" className="text-xs">{a.category}</Badge>
                  {a.date && <span className="text-xs text-muted-foreground">{a.date}</span>}
                </div>
                <p className="font-semibold mt-1 truncate">{a.title}</p>
                <p className="text-sm text-muted-foreground line-clamp-2">{a.description}</p>
              </div>
              <Button size="icon" variant="ghost" onClick={() => remove(a.id)} aria-label="Delete">
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function NewsEditor({ onChanged }: { onChanged: () => void }) {
  const items = useStoreValue(getNews);
  const [draft, setDraft] = useState<NewsItem>({ id: "", title: "", excerpt: "", body: "", date: "" });
  function add() {
    if (!draft.title.trim()) return;
    const next = [{ ...draft, id: uid("news") }, ...items];
    setNews(next);
    setDraft({ id: "", title: "", excerpt: "", body: "", date: "" });
    onChanged();
  }
  function remove(id: string) {
    setNews(items.filter((i) => i.id !== id));
    onChanged();
  }
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-6 sm:p-8">
          <h3 className="font-display text-xl font-bold">Add News Post</h3>
          <div className="mt-5 space-y-4">
            <Field label="Title"><Input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} /></Field>
            <Field label="Date"><Input value={draft.date} onChange={(e) => setDraft({ ...draft, date: e.target.value })} placeholder="e.g. November 1, 2025" /></Field>
            <Field label="Excerpt"><Input value={draft.excerpt} onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })} /></Field>
            <Field label="Body"><Textarea rows={5} value={draft.body} onChange={(e) => setDraft({ ...draft, body: e.target.value })} /></Field>
            <Button onClick={add} className="font-semibold">
              <Plus className="mr-2 h-4 w-4" /> Publish
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="space-y-3">
        {items.length === 0 && <Card><CardContent className="p-6 text-sm text-muted-foreground">No news yet.</CardContent></Card>}
        {items.map((n) => (
          <Card key={n.id}>
            <CardContent className="p-5 flex gap-4">
              <div className="flex-1 min-w-0">
                {n.date && <p className="text-xs uppercase tracking-wider text-muted-foreground">{n.date}</p>}
                <p className="font-semibold mt-1">{n.title}</p>
                <p className="text-sm text-muted-foreground line-clamp-2">{n.excerpt || n.body}</p>
              </div>
              <Button size="icon" variant="ghost" onClick={() => remove(n.id)} aria-label="Delete">
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function GalleryEditor({ onChanged }: { onChanged: () => void }) {
  const items = useStoreValue(getGallery);
  const [draft, setDraft] = useState<GalleryItem>({ id: "", url: "", caption: "" });
  function add() {
    if (!draft.url.trim()) return;
    const next = [{ ...draft, id: uid("g") }, ...items];
    setGallery(next);
    setDraft({ id: "", url: "", caption: "" });
    onChanged();
  }
  function remove(id: string) {
    setGallery(items.filter((i) => i.id !== id));
    onChanged();
  }
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 sm:p-8">
          <h3 className="font-display text-xl font-bold">Add Image to Gallery</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Paste any public image URL (or a base64 data URL). For real production uploads, connect
            an image host or storage service.
          </p>
          <div className="mt-5 grid sm:grid-cols-[1fr,1fr,auto] gap-3 items-end">
            <Field label="Image URL"><Input value={draft.url} onChange={(e) => setDraft({ ...draft, url: e.target.value })} placeholder="https://..." /></Field>
            <Field label="Caption"><Input value={draft.caption} onChange={(e) => setDraft({ ...draft, caption: e.target.value })} /></Field>
            <Button onClick={add} className="font-semibold h-10">
              <Plus className="mr-2 h-4 w-4" /> Add
            </Button>
          </div>
          {draft.url && (
            <div className="mt-4 flex items-center gap-3 p-3 rounded-lg border bg-secondary/40">
              <img src={draft.url} alt="" className="h-16 w-16 object-cover rounded" onError={(e) => ((e.currentTarget.style.display = "none"))} />
              <p className="text-sm text-muted-foreground truncate">Preview</p>
            </div>
          )}
        </CardContent>
      </Card>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((g) => (
          <div key={g.id} className="relative rounded-lg overflow-hidden border group">
            <img src={g.url} alt={g.caption} className="aspect-square w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-2">
              <span className="text-white text-[10px] line-clamp-2">{g.caption}</span>
              <button
                onClick={() => remove(g.id)}
                className="h-7 w-7 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center"
                aria-label="Delete"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Inbox_() {
  const items = useStoreValue(getMessages);
  function markRead(id: string) {
    setMessages(items.map((m) => (m.id === id ? { ...m, read: true } : m)));
  }
  function remove(id: string) {
    setMessages(items.filter((m) => m.id !== id));
  }
  if (items.length === 0) {
    return (
      <Card>
        <CardContent className="p-10 text-center">
          <Mail className="h-10 w-10 mx-auto text-muted-foreground" />
          <p className="mt-3 font-semibold">No messages yet</p>
          <p className="text-sm text-muted-foreground mt-1">
            Messages from the contact form will appear here.
          </p>
        </CardContent>
      </Card>
    );
  }
  return (
    <div className="space-y-3">
      {items.map((m) => (
        <Card key={m.id} className={m.read ? "" : "border-primary/40"}>
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-semibold">{m.name}</p>
                  {!m.read && <Badge className="bg-primary text-primary-foreground border-0 text-[10px]">New</Badge>}
                  <span className="text-xs text-muted-foreground">
                    {new Date(m.createdAt).toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {m.email}{m.phone ? ` · ${m.phone}` : ""}
                </p>
                <p className="mt-3 font-medium">{m.subject}</p>
                <p className="mt-1 text-sm text-foreground/85 whitespace-pre-wrap">{m.message}</p>
              </div>
              <div className="flex flex-col gap-2">
                {!m.read && (
                  <Button size="sm" variant="outline" onClick={() => markRead(m.id)}>
                    <CheckCircle2 className="mr-2 h-4 w-4" /> Mark read
                  </Button>
                )}
                <Button size="sm" variant="ghost" onClick={() => remove(m.id)}>
                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ChangePasswordForm({
  changePassword,
  adminEmail,
}: {
  changePassword: (oldPwd: string, newPwd: string, newEmail?: string) => { ok: true } | { ok: false; error: string };
  adminEmail: string;
}) {
  const { toast } = useToast();
  const [email, setEmail] = useState(adminEmail);
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  useEffect(() => setEmail(adminEmail), [adminEmail]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (newPwd !== confirm) {
      toast({ title: "Passwords do not match", variant: "destructive" });
      return;
    }
    const r = changePassword(oldPwd, newPwd, email);
    if (r.ok) {
      toast({ title: "Credentials updated" });
      setOldPwd(""); setNewPwd(""); setConfirm("");
    } else {
      toast({ title: r.error, variant: "destructive" });
    }
  }

  return (
    <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
      <Field label="Admin Email">
        <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
      </Field>
      <Field label="Current Password">
        <Input value={oldPwd} onChange={(e) => setOldPwd(e.target.value)} type="password" required data-testid="input-old-password" />
      </Field>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="New Password">
          <Input value={newPwd} onChange={(e) => setNewPwd(e.target.value)} type="password" required data-testid="input-new-password" />
        </Field>
        <Field label="Confirm New Password">
          <Input value={confirm} onChange={(e) => setConfirm(e.target.value)} type="password" required data-testid="input-confirm-password" />
        </Field>
      </div>
      <Button type="submit" className="font-semibold" data-testid="button-save-password">
        <KeyRound className="mr-2 h-4 w-4" /> Update Credentials
      </Button>
    </form>
  );
}

function EventsEditor({ onChanged }: { onChanged: () => void }) {
  const items = useStoreValue(getEvents);
  const update = (next: EventItem[]) => { setEvents(next); onChanged(); };
  const add = () =>
    update([
      {
        id: uid("evt"),
        title: "New event",
        date: new Date().toISOString().slice(0, 10),
        category: "School",
        location: "",
        description: "",
      },
      ...items,
    ]);
  const sorted = [...items].sort((a, b) => a.date.localeCompare(b.date));
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <div>
          <h3 className="font-display text-xl font-bold">Events Calendar</h3>
          <p className="text-sm text-muted-foreground mt-1">Add upcoming exams, meetings, holidays and ceremonies.</p>
        </div>
        <Button onClick={add} className="font-semibold" data-testid="button-add-event">
          <Plus className="mr-2 h-4 w-4" /> Add event
        </Button>
      </div>
      <div className="grid gap-4">
        {sorted.map((e, idx) => {
          const realIdx = items.findIndex((x) => x.id === e.id);
          return (
            <Card key={e.id}>
              <CardContent className="p-5 space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <Field label="Title">
                    <Input
                      value={e.title}
                      onChange={(ev) => {
                        const copy = [...items]; copy[realIdx] = { ...e, title: ev.target.value }; update(copy);
                      }}
                      data-testid={`input-event-title-${idx}`}
                    />
                  </Field>
                  <Field label="Category">
                    <Input
                      value={e.category}
                      onChange={(ev) => {
                        const copy = [...items]; copy[realIdx] = { ...e, category: ev.target.value }; update(copy);
                      }}
                    />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  <Field label="Start date">
                    <Input
                      type="date"
                      value={e.date}
                      onChange={(ev) => {
                        const copy = [...items]; copy[realIdx] = { ...e, date: ev.target.value }; update(copy);
                      }}
                    />
                  </Field>
                  <Field label="End date (optional)">
                    <Input
                      type="date"
                      value={e.endDate || ""}
                      onChange={(ev) => {
                        const copy = [...items]; copy[realIdx] = { ...e, endDate: ev.target.value || undefined }; update(copy);
                      }}
                    />
                  </Field>
                  <Field label="Location">
                    <Input
                      value={e.location || ""}
                      onChange={(ev) => {
                        const copy = [...items]; copy[realIdx] = { ...e, location: ev.target.value }; update(copy);
                      }}
                    />
                  </Field>
                </div>
                <Field label="Description">
                  <Textarea
                    rows={2}
                    value={e.description}
                    onChange={(ev) => {
                      const copy = [...items]; copy[realIdx] = { ...e, description: ev.target.value }; update(copy);
                    }}
                  />
                </Field>
                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => update(items.filter((x) => x.id !== e.id))}
                    data-testid={`button-delete-event-${idx}`}
                  >
                    <Trash2 className="mr-2 h-3.5 w-3.5" /> Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
        {items.length === 0 && (
          <Card><CardContent className="p-8 text-sm text-muted-foreground text-center">No events yet — add the first one.</CardContent></Card>
        )}
      </div>
    </div>
  );
}

function TestimonialsEditor({ onChanged }: { onChanged: () => void }) {
  const items = useStoreValue(getTestimonials);
  const update = (next: Testimonial[]) => { setTestimonials(next); onChanged(); };
  const add = () =>
    update([
      { id: uid("tst"), quote: "", author: "", role: "" },
      ...items,
    ]);
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <div>
          <h3 className="font-display text-xl font-bold">Voices From the Community</h3>
          <p className="text-sm text-muted-foreground mt-1">Quotes from parents, alumni, and supporters shown on the Home page.</p>
        </div>
        <Button onClick={add} className="font-semibold" data-testid="button-add-testimonial">
          <Plus className="mr-2 h-4 w-4" /> Add quote
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((t, idx) => (
          <Card key={t.id}>
            <CardContent className="p-5 space-y-3">
              <Field label="Quote">
                <Textarea
                  rows={3}
                  value={t.quote}
                  onChange={(ev) => {
                    const copy = [...items]; copy[idx] = { ...t, quote: ev.target.value }; update(copy);
                  }}
                  data-testid={`input-testimonial-quote-${idx}`}
                />
              </Field>
              <div className="grid sm:grid-cols-2 gap-3">
                <Field label="Author name">
                  <Input
                    value={t.author}
                    onChange={(ev) => {
                      const copy = [...items]; copy[idx] = { ...t, author: ev.target.value }; update(copy);
                    }}
                  />
                </Field>
                <Field label="Role / relationship">
                  <Input
                    value={t.role}
                    placeholder="Parent · Class of 2025"
                    onChange={(ev) => {
                      const copy = [...items]; copy[idx] = { ...t, role: ev.target.value }; update(copy);
                    }}
                  />
                </Field>
              </div>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => update(items.filter((x) => x.id !== t.id))}
                  data-testid={`button-delete-testimonial-${idx}`}
                >
                  <Trash2 className="mr-2 h-3.5 w-3.5" /> Remove
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        {items.length === 0 && (
          <Card className="md:col-span-2"><CardContent className="p-8 text-sm text-muted-foreground text-center">No testimonials yet — add the first one.</CardContent></Card>
        )}
      </div>
    </div>
  );
}
