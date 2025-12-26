import React from "react";

type PageProps = {
  params: {
    username: string;
  };
};

async function Page({ params }: PageProps) {
  const { username } = await params;

  return (
    <div>
      catches one dynamic routes! , with "[]"
    </div>
  );
}

export default Page;
