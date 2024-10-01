import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import images from '../../constants/images';

const CreateBlogPage = () => {
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [content, setContent] = useState('');

  const generateIdFromTitle = (title) => {
    return title.toLowerCase().split(' ').join('-');
  };

  const saveToJson = () => {
    const existingData = [];
    const id = generateIdFromTitle(title); // Generate id from title
    const newEntry = {
      id,
      title,
      imageUrl : images.about3,
      description,
      content,
    };
    const updatedData = [...existingData, newEntry];
    localStorage.setItem('blogs', JSON.stringify(updatedData));
    const blob = new Blob([JSON.stringify(updatedData, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'blogs.json';
    link.click();
    setTitle('');
    setDescription('');
    setContent('');
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Enter the title here..."
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 mb-2">Description</label>
        <ReactQuill
          value={description}
          onChange={setDescription}
          placeholder="Enter a short description..."
          modules={{
            toolbar: [
              [{ header: '1' }, { header: '2' }, { font: [] }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['bold', 'italic', 'underline'],
              ['link', 'image', 'blockquote', 'code-block'],
              [{ align: [] }],
            ],
          }}
          style={{ minHeight: '150px', border: '1px solid #ccc' }}
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 mb-2">Content</label>
        <ReactQuill
          value={content}
          onChange={setContent}
          placeholder="Start writing content here..."
          modules={{
            toolbar: [
              [{ header: '1' }, { header: '2' }, { font: [] }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['bold', 'italic', 'underline'],
              ['link', 'image', 'blockquote', 'code-block'],
              [{ align: [] }],
            ],
          }}
          style={{ minHeight: '200px', border: '1px solid #ccc' }}
        />
      </div>

      <button
        onClick={saveToJson}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save Blog to JSON
      </button>
    </div>
  );
};

export default CreateBlogPage;
