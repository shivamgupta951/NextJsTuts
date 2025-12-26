import Image from "next/image";

export default function Home() {
  return (
    <div>
      Make hand written notes for next js better!!🐼
      <div> 💠  Normal Dynamic routes ~ catches all dynamic routes! , with "[...]"</div>
      <div> 💠  Catch-all Segments routes (Dynamic Routes Subpart) ~ Catch-all Segments catches one dynamic routes! , with "[]"</div>
      <div> 💠  
        Optional Catch-all Segments routes (Dynamic Routes Subpart) ~ catches all dynamic routes and gives optional catching for the routes! ,with "[[...]]"
      </div>
      <div> 💠  Route Groups skips the folder name in the url! , with "()"</div>
      <div> 💠  Parallel routes ~ Uses inside layo`ut folder only by imported with children . cannot be accessed by url! , with "@"</div>
    </div>
  );
}
