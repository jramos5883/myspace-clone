import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect("api/auth/signin");
  }

  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: { email: currentUserEmail },
  });

  return (
    <main>
      <h1>Hello Next.js!</h1>
    </main>
  );
}
