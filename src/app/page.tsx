import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 pt-10">
      <section>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/daniilomello.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <h1 className="font-bold">Danilo Mello</h1>
        </div>
      </section>
    </main>
  );
}
