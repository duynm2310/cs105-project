import { useRef } from 'react';
import Plant from '../ultils';
import datas from '~/data/plants';
import { useFrame } from '@react-three/fiber';

function Earth() {
    const data = datas.earth;

    const ObjectRef = useRef();
    useFrame(() => {
        ObjectRef.current.rotateY(data.speedRevolution);
    });

    return (
        <group ref={ObjectRef}>
            <Plant
                radius={data.radius}
                img={data.img}
                type={'standard'}
                position={data.position}
                speedRotation={data.speedRotation}
            />
        </group>
    );
}

export default Earth;