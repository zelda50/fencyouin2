import { useState } from 'react';
import { getSession } from 'next-auth/react';
import axios from 'axios';
import AuthButton from '../../components/AuthButton';

const AdminDashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [mediaType, setMediaType] = useState("photo"); // 'photo' or 'video'
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("mediaType", mediaType);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setUploadSuccess(true);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <label>
          Select Media Type:
          <select onChange={(e) => setMediaType(e.target.value)} value={mediaType}>
            <option value="photo">Photo</option>
            <option value="video">Video</option>
          </select>
        </label>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        {uploadSuccess && <p>Upload successful!</p>}
      </div>
      <AuthButton/>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default AdminDashboard;
