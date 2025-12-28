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
      <div> 💠  Route Groups ~ skips the folder name in the url! , with "()"</div>
      <div> 💠  Parallel routes ~ Uses inside layout folder only by imported with children . cannot be accessed by url! , with "@"</div>
      <div> 💠  Types of files ~ different types of files ie. loading.tsx , page.tsx etc</div>
      <div> 💠  change file page type ~ to change server based files to client based file for usestates etc things write 'use client' at the top of the file!</div>
      <div> 💠  Types of Navigation ~ different types of Navigation ie. Link tag , UseRouter(New Version)!</div>
      <div> 💠  New Image Tag ~ use for better optimation and faster loading than img tag!</div>
      <div> 💠  Image tag outer images ~ needs to be triggered in config using hostnames and other things for outer websites abstraction for better performance. ie cloudinary , google etc!</div>
      <div> 💠  Nextjs Font file ~ use for better optimation and faster loading for fonts by just importing the subset of that perticular font style from the font world file!</div>
    </div>
  );
}
