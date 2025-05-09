import QrCode2Icon from '@mui/icons-material/QrCode2';

import './TicketId.css';

function TicketId({ tickedId }) {
  return (
    <section className='ticket__id'>
      <QrCode2Icon className='qr-code' style={{ fontSize: '150px' }} />
      <p className='ticket__id-text'>#{tickedId}</p>
    </section>
  );
}

export default TicketId;
