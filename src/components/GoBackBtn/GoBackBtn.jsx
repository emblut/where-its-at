import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import './GoBackBtn.css';

function GoBackBtn() {
  const navigate = useNavigate();
  const existingHistory = useRef(false);

  useEffect(() => {
    existingHistory.current = window.history.length > 1;
  }, []);

  return (
    <ArrowBackIosIcon
      style={{ fontSize: 30 }}
      className='go-back'
      onClick={() => {
        existingHistory.current ? navigate(-1) : navigate('/');
      }}
    />
  );
}

export default GoBackBtn;
