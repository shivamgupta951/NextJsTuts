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
      {username}'s about page!
    </div>
  );
}

export default Page;
