import { useEffect, useState } from "react";
import { getComments, addComment } from "../service/api";

const CommentSection = ({ gameId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Get comments
  const fetchComments = async () => {
    const data = await getComments(gameId);

    if (data) {
      setComments(data);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [gameId]);

  // Image select
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // Post comment
  const handlePostComment = async () => {
    if (!commentText.trim()) return;

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("game", gameId);
      formData.append("comment", commentText);

      if (selectedImage) {
        formData.append("image", selectedImage);
      }

      const data = await addComment(formData);

      if (data) {
        setCommentText("");
        setSelectedImage(null);
        setImagePreview(null);

        // Get updated comments
        fetchComments();
      }
    } catch (error) {
      console.log("Post comment error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-5 text-white">

      {/* Header */}
      <div className="mb-5">
        <h2 className="text-xl font-semibold">
          Comments
        </h2>

        <p className="text-sm text-slate-400">
          {comments.length} comments
        </p>
      </div>

      {/* Comment input */}
      <div className="mb-6">

        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
          className="w-full resize-none rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none placeholder:text-slate-500 focus:border-slate-500"
          rows="3"
        />

        {/* Image preview */}
        {imagePreview && (
          <div className="mt-3">
            <img
              src={imagePreview}
              alt="Preview"
              className="h-32 w-32 rounded-lg object-cover"
            />
          </div>
        )}

        {/* Bottom controls */}
        <div className="mt-3 flex items-center justify-between">

          {/* Image upload */}
          <label className="cursor-pointer rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800">
            📷 Add Image

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {/* Post */}
          <button
            onClick={handlePostComment}
            disabled={loading || !commentText.trim()}
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Posting..." : "Post"}
          </button>

        </div>
      </div>

      {/* Comments */}
      <div className="space-y-5">

        {comments.map((comment) => (
          <div
            key={comment._id}
            className="border-b border-slate-800 pb-5"
          >

            {/* Username + date */}
            <div className="mb-1 flex items-center gap-3">
              <span className="font-medium">
                {comment.user?.username}
              </span>

              <span className="text-xs text-slate-500">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>

            {/* Comment */}
            <p className="text-sm leading-6 text-slate-300">
              {comment.comment}
            </p>

            {/* Uploaded image */}
            {comment.image && (
              <img
                src={comment.image}
                alt="Comment"
                className="mt-3 max-h-60 rounded-lg object-cover"
              />
            )}

          </div>
        ))}

        {comments.length === 0 && (
          <p className="text-center text-sm text-slate-500">
            No comments yet. Be the first to comment!
          </p>
        )}

      </div>
    </div>
  );
};

export default CommentSection;