
import "quill/dist/quill.snow.css";
import fetchPosts from "@/lib/fetch-posts";
import DOMPurify from "isomorphic-dompurify";
// export const dynamic = 'force-dynamic';

export default async function VisionBoard() {
    const posts = await fetchPosts();
    return (
        <section className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="bg-gray-300 p-2 rounded-xs mb-4">
                My Vision Board
            </div>
            {posts.filter((post) => post.postType === "Vision Board").map((post, index) => (
                <div
                    key={post.id}
                    className="rounded-2xl mt-4 border border-neutral-200 bg-white p-6 transition hover:border-neutral-300 hover:shadow-sm"
                >
                    <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
                        Vision No {index + 1} : {post.title}
                    </h3>
                    <div className="ql-snow">
                        <div
                            className="ql-editor"
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
                        />
                    </div>
                </div>
            ))}
        </section>
    );
}