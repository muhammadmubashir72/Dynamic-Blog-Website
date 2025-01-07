"use client";
import React, { useState } from "react";

interface Comment {
  id: number;
  name: string;
  comment: string;
  date: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [editingComment, setEditingComment] = useState<Comment | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingComment) {
      if (editingComment.name.trim() && editingComment.comment.trim()) {
        setComments((prevComments) =>
          prevComments.map((c) =>
            c.id === editingComment.id
              ? { ...c, name: editingComment.name, comment: editingComment.comment }
              : c
          )
        );
        setEditingComment(null);
      } else {
        alert("Both name and comment are required to update!");
      }
    } else {
      if (name.trim() && comment.trim()) {
        setComments([
          ...comments,
          {
            id: Date.now(), // Use timestamp for unique ID
            name: name.trim(),
            comment: comment.trim(),
            date: new Date().toLocaleString(),
          },
        ]);
        setName("");
        setComment("");
      } else {
        alert("Both name and comment are required to add a comment!");
      }
    }
  };

  const handleEdit = (comment: Comment) => {
    setEditingComment(comment);
  };

  const handleDelete = (id: number) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg mt-12">
      <div className="main-content flex flex-col lg:flex-row gap-8">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full lg:w-2/3">
          <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-6">
            {editingComment ? "Edit Your Comment" : "Leave a Comment"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={editingComment ? editingComment.name : name}
                onChange={(e) =>
                  editingComment
                    ? setEditingComment({ ...editingComment, name: e.target.value })
                    : setName(e.target.value)
                }
                className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Comment"
                value={editingComment ? editingComment.comment : comment}
                onChange={(e) =>
                  editingComment
                    ? setEditingComment({ ...editingComment, comment: e.target.value })
                    : setComment(e.target.value)
                }
                className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              {editingComment ? "Update Comment" : "Post Comment"}
            </button>
          </form>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl w-full lg:w-1/3">
          <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-6">
            Comments
          </h2>
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
              >
                <p className="font-semibold text-xl text-gray-800">{comment.name}</p>
                <p className="text-gray-500 text-sm mb-2">{comment.date}</p>
                <p className="text-lg text-gray-700">{comment.comment}</p>
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={() => handleEdit(comment)}
                    className="text-blue-500 hover:text-pink-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="text-red-500 hover:text-pink-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
