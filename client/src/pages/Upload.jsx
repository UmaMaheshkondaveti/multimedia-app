import React, { useState } from 'react';
import axios from '../api/axios';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState('');

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('tags', tags);

    await axios.post('/upload', formData);
    alert('Uploaded!');
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <input placeholder="Tags (comma separated)" onChange={e => setTags(e.target.value)} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
