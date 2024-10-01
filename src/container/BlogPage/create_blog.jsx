import React, { useState, useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; 

const CreateBlogPage = () => {
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState('');
  const [content, setContent] = useState(''); 
  const quillRef = useRef(null);

  useEffect(() => {
    quillRef.current = new Quill('#editor', {
      theme: 'snow',
      placeholder: 'Start writing content here...',
    });
    quillRef.current.on('text-change', () => {
      setContent(quillRef.current.root.innerHTML);
    });
  }, []);

  const saveToJson = () => {
    const existingData = JSON.parse(localStorage.getItem('blogs')) || [];
    const newEntry = {
      title,
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
    quillRef.current.root.innerHTML = ''; // Clear the Quill editor content
  };

  return (
    <div>
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
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter a short description..."
          />
        </div>


        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">Content</label>
          <div id="editor" style={{ minHeight: '200px', border: '1px solid #ccc' }}></div>
        </div>


        <button
          onClick={saveToJson}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Save Blog to JSON
        </button>
      </div>
     
    </div>
  );
};

export default CreateBlogPage;
