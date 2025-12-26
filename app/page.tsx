import Image from "next/image";

export default function Home() {
  return (
    <div>
      Make hand written notes for next js better!!🐼
      <div>catches all dynamic routes! , with "[...]"</div>
      <div>catches one dynamic routes! , with "[]"</div>
      <div>
        catches all dynamic routes and gives optional catching for the routes! ,
        with "[[...]]"
      </div>
      <div>skips the folder name in the url! , with "()"</div>
    </div>
  );
}
