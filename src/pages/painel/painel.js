// PainelPage.js
import './painel.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FolderIcon from "../../assets/folder.png";

function PainelPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('logged');
    const storedUsername = localStorage.getItem('user-logged');
    if (loggedInStatus !== 'true') {
      navigate('/login');
    }
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('logged');
    localStorage.removeItem('user-logged');
    navigate('/login');
  };

  return (
    <body>
        <div className='container1'>
            <div className='background1'>
                <p>ADMINISTRADOR</p>
                <span className='bg-text1'>NG GANG</span>
            </div>
            <div className='infos-container'>
              <div className='infos'>
                <span className='usuario'>Painel {username}</span>
              </div>
              <div className='folders-container'>
                <div className='folder'>
                  <img className='folder-image' id="folder-ico" src={FolderIcon} alt='Folder'/>
                  <span className='folder-name'>Roblox</span>
                </div>
                <div className='folder'>
                  <img className='folder-image' id="folder-ico" src={FolderIcon} alt='Folder'/>
                  <span className='folder-name'>Netflix</span>
                </div>
                <div className='folder'>
                  <img className='folder-image' id="folder-ico" src={FolderIcon} alt='Folder'/>
                  <span className='folder-name'>Crunchyroll</span>
                </div>
                <div className='folder'>
                  <img className='folder-image' src={FolderIcon} alt='Folder'/>
                  <span className='folder-name'>Discord</span>
                </div>
              </div>
            </div>
        </div>
        <button id='logout' onClick={handleLogout}>Logout</button>
    </body>
  );
}

export default PainelPage;
