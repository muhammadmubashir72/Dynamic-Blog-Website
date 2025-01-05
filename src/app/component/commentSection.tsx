"use client";
import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedName, setEditedName] = useState('');
  const [editedComment, setEditedComment] = useState('');

  // Handle Submit (Add or Edit)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && (comment || editedComment)) {
      if (editingId !== null) {
        // Editing an existing comment
        setComments((prevComments) =>
          prevComments.map((c) =>
            c.id === editingId
              ? { ...c, name: editedName, comment: editedComment }
              : c
          )
        );
        // Reset edit state and clear the edited fields
        setEditingId(null);
        setEditedName('');
        setEditedComment('');
      } else {
        // Adding a new comment
        setComments([
          ...comments,
          { id: comments.length + 1, name, comment, date: new Date().toLocaleString() },
        ]);
      }
      // Clear the comment field after submission (name remains)
      setComment('');
      
      
    }
  };

  // Handle Edit (Fill form with existing comment)
  const handleEdit = (id: number, currentName: string, currentComment: string) => {
    setEditingId(id); // Set the comment ID to edit
    setEditedName(currentName); // Pre-fill the name field with the current name
    setEditedComment(currentComment); // Pre-fill the comment field with the current comment
  };

  // Handle Delete (Remove comment)
  const handleDelete = (id: number) => {
    setComments(comments.filter((c) => c.id !== id)); // Remove the comment with the matching ID
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg mt-12">
      <div className="main-content flex flex-col lg:flex-row gap-8">
        {/* Comment Form */}
        <div className="bg-white p-8 rounded-lg shadow-xl w-full lg:w-2/3">
          <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-6">
            {editingId !== null ? 'Edit Your Comment' : 'Leave a Comment'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={editingId !== null ? editedName : name}
                onChange={(e) => (editingId !== null ? setEditedName(e.target.value) : setName(e.target.value))}
                className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Comment"
                value={editingId !== null ? editedComment : comment}
                onChange={(e) => (editingId !== null ? setEditedComment(e.target.value) : setComment(e.target.value))}
                className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              {editingId !== null ? 'Update Comment' : 'Post Comment'}
            </button>
          </form>
        </div>

        {/* Comments Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl w-full lg:w-1/3">
          <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-6">Comments</h2>
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300">
                <p className="font-semibold text-xl text-gray-800">{comment.name}</p>
                <p className="text-gray-500 text-sm mb-2">{comment.date}</p>
                <p className="text-lg text-gray-700">{comment.comment}</p>
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={() => handleEdit(comment.id, comment.name, comment.comment)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="text-red-500 hover:underline"
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
