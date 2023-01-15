import React, { useState } from 'react';
import './MainBlog.css';

function MainBlog() {
  const [blog, setBlog] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitting blog: ', blog);
    // add code here to submit the blog
    setBlog('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={blog} onChange={(e) => setBlog(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MainBlog;