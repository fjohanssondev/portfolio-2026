export default function NotFound() {
  return (
    <main className="flex flex-col h-[calc(100vh-26rem)]">
      <div className="flex flex-col space-y-4 justify-center items-center w-full h-full">
        <h1 className="text-8xl md:text-[16rem] text-muted-foreground">404</h1>
        <p className="text-sm text-center max-w-sm md:max-w-full">
          The page you tried to navigate to, couldn&apos;t be found. The website
          is under construction. Hence could be why.
        </p>
      </div>
    </main>
  );
}
