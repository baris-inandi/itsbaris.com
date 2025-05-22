export default async function ReadPage({
  params,
}: Readonly<{
  params: Promise<{ page: string }>;
}>) {
  const slug = (await params).slug;
  return <div>My Post: {slug}</div>;
}
