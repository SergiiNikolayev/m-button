import React, { useState } from 'react';
import styles from './index.module.css';
import { AiOutlineClose, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { BiCoinStack } from 'react-icons/bi';
import { BsPiggyBank } from 'react-icons/bs';
import { RiHandCoinLine } from 'react-icons/ri';
import { TbLetterW } from 'react-icons/tb';
import Button, { ISizeList } from '../Button';

const iconSize = 25;

const buttonConfig = [
  {
    icon: <BiCoinStack size={iconSize} color='white' />,
    label: 'Stake',
    animate: { y: -35, x: -95},
    onClick: () => console.log('1')
  },
  {
    icon: <AiOutlineArrowUp size={iconSize} color='white' />,
    label: 'Send',
    animate: { y: -53, x: -40},
    onClick: () => console.log('2')
  },
  {
    icon: <AiOutlineArrowDown size={iconSize} color='white' />,
    label: 'Receive',
    animate: { y: -60, x: 15},
    onClick: () => console.log('3')
  },
  {
    icon: <BsPiggyBank size={iconSize} color='white' />,
    label: 'Supply',
    animate: { y: -53, x: 70},
    onClick: () => console.log('4')
  },
  {
    icon: <RiHandCoinLine size={iconSize} style={{ transform: 'scaleX(-1)' }} color='white' />,
    label: 'Borrow',
    animate: { y: -35, x: 125},
    onClick: () => console.log('5')
  },
]

function OrigamiButton() {
  const [showSmallButtons, setShowSmallButtons] = useState(false);
  const toggleShow = () => setShowSmallButtons(!showSmallButtons);

  return (
    <div className={styles.container}>
      {showSmallButtons && buttonConfig.map((btn, i) =>
        <Button
          size={ISizeList.small}
          label={btn.label}
          icon={btn.icon}
          animate={btn.animate}
          onClick={() => console.log(i)}
          style={{ position: 'absolute' }}
        />
      )}
      <Button
        size={ISizeList.big}
        label='label'
        closeIcon={<AiOutlineClose /> }
        icon={<TbLetterW size={40} style={{ transform: 'rotate(180deg)' }} />}
        onClick={toggleShow}
      />
    </div>
  );
}

export default OrigamiButton;
