import "quill/dist/quill.snow.css";
import fetchPosts from "@/lib/fetch-posts";
import sanitizeHtml from "sanitize-html";

export const dynamic = 'force-dynamic';

const sanitizeOptions: sanitizeHtml.IOptions = {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        'img', 'span', 'h1', 'h2', 'u', 's', 'strike', 'sub', 'sup'
    ]),
    allowedAttributes: {
        '*': ['class', 'style'],
        'a': ['href', 'name', 'target', 'rel'],
        'img': ['src', 'alt', 'width', 'height']
    },
    allowedClasses: {
        '*': ['ql-*']
    }
};

export default async function VisionBoard() {
    const posts = await fetchPosts();
    const visionBoardPosts = posts.filter((post) => post.postType === "Vision Board");

    return (
        <section className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="bg-gray-300 p-2 rounded-xs mb-4">
                My Vision Board
            </div>
            {visionBoardPosts.map((post, index) => (
                <div
                    key={post.id}
                    className="rounded-2xl mt-4 border border-neutral-200 bg-white p-6 transition hover:border-neutral-300 hover:shadow-sm"
                >
                    <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
                        Vision No {index + 1} : {post.title}
                    </h3>
                    <div className="ql-snow mt-4">
                        <div
                            className="ql-editor"
                            dangerouslySetInnerHTML={{
                                __html: sanitizeHtml(post.content || "", sanitizeOptions)
                            }}
                        />
                    </div>
                </div>
            ))}
        </section>
    );
}