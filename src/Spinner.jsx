import { DotLoader  } from 'react-spinners';

const Spinner = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh' // full screen height
    }}>
        <DotLoader  color="#f54a00ff" size={80} />
    </div>
);

export default Spinner;
