import React, { useState } from 'react';
import logo from '../../logo.svg';
import styles from './index.module.css';
import { AiOutlineClose, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { BiCoinStack } from 'react-icons/bi';
import { BsPiggyBank } from 'react-icons/bs';
import { RiHandCoinLine } from 'react-icons/ri';
import Button, { ISizeList } from '../Button';

const buttonConfig = [
  {
    icon: <BiCoinStack size={35} color='white' />,
    label: 'Stake',
    margin: '-25px',
    onClick: () => console.log('1')
  },
  {
    icon: <AiOutlineArrowUp size={35} color='white' />,
    label: 'Send',
    margin: '-5px',
    onClick: () => console.log('2')
  },
  {
    icon: <AiOutlineArrowDown size={35} color='white' />,
    label: 'Receive',
    onClick: () => console.log('3')
  },
  {
    icon: <BsPiggyBank size={35} color='white' />,
    label: 'Supply',
    margin: '-5px',
    onClick: () => console.log('4')
  },
  {
    icon: <RiHandCoinLine size={33} style={{ transform: 'scaleX(-1)' }} color='white' />,
    label: 'Borrow',
    margin: '-25px',
    onClick: () => console.log('5')
  },
]

function OrigamiButton() {
  const [showSmallButtons, setShowSmallButtons] = useState(false);
  const toggleShow = () => setShowSmallButtons(!showSmallButtons);

  return (
    <div className={styles.container}>
      <div className={styles.smallButtonContainer}>
        {showSmallButtons && buttonConfig.map((btn, i) =>
          <Button
            size={ISizeList.small}
            label={btn.label}
            icon={btn.icon}
            onClick={() => console.log(i)}
            style={{ marginBottom: btn.margin }}
          />
        )}
      </div>
      <Button
        size={ISizeList.big}
        label='label'
        closeIcon={<AiOutlineClose /> }
        icon={<img src={logo} className={styles.logo} alt="logo" />}
        onClick={toggleShow}
      />
    </div>
  );
}

export default OrigamiButton;
