import { createClient } from "next-sanity";

export default function Posts({ posts }) {
  return (
    <div className="m-10 flex flex-col justify-center items-center space-y-10">
      {posts.map((post) => (
        <>
          <h4 key={post._id} className="">
            {post.title}
          </h4>

          <img key={post._id} src={post.author.imageUrl} alt="" className=" w-3/4 h-3/4"></img>
        </>
      ))}
    </div>
  );
}

const client = createClient({
  projectId: "v4wxh53m",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]{
    _id, title, author-> {
      "imageUrl": image.asset->url
    }
  }`);

  return {
    props: {
      posts,
    },
  };
}
