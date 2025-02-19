export default async function ReadPage({
  params,
}: Readonly<{
  params: Promise<{ page: string }>;
}>) {
  const page = (await params).page;
  return <div>My Post: {page}</div>;
}
