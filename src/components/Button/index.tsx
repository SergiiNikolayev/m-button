import React, { ReactNode, useState } from 'react';
import styles from './index.module.css';
import { motion } from "framer-motion";
import { LongPressDetectEvents, useLongPress } from 'use-long-press';

export enum ISizeList {
  small = 'small',
  big = 'big',
}

interface IButtonProps {
  size: ISizeList
  icon: ReactNode | null
  label: string
  closeIcon?: ReactNode
  onClick?: () => void
  style?: object
  animate?: object
}

const sizeList = {
  small: '40px',
  big: '70px',
}
function Button({ size, icon, label, closeIcon, onClick, style, animate }: IButtonProps) {
  const buttonSize = sizeList[size]
  const isSmall = size === ISizeList.small
  const [open, setOpen] = useState(false);
  const [buttonVisibility, setButtonVisibility] = useState('visible');
  const onPress = () => {
    onClick && onClick()
    return isSmall ? console.log('clicked', label) : setOpen(!open);
    setButtonVisibility('visible')
  }

  const longPressCallback = () => {
    setButtonVisibility('hidden');
  }

  const Icon = open ? !isSmall && closeIcon : icon

  const callback = React.useCallback(() => {
    console.log("Long pressed!");
  }, []);

  const longPress = useLongPress(longPressCallback, {
    onStart: () => console.log("Press started"),
    // onStart: onPress,
    onFinish: () => console.log("Long press finished"),
    // onCancel: () => console.log("Press cancelled"),
    onCancel: () => setButtonVisibility('visible'),
    onMove: () => console.log("Detected mouse or touch movement"),
    threshold: 1000,
    captureEvent: true,
    cancelOnMovement: false,
    detect: LongPressDetectEvents.BOTH,
    // ...(open ? {threshold: 1000} : {}),
    // ...(open ? {detect: LongPressDetectEvents.BOTH} : {}),
  });

  // const longPressData = open ? longPress : callback

  // console.log('debug-buttonVisibility', buttonVisibility)

  return (
    <motion.div
      className="box"
      // whileHover={{ scale: 1.2 }}
      animate={animate}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: isSmall ? 30 : 15 }}
    >
      <div
        {...longPress()}
        onClick={onPress} // OK
        className={styles.container}
        style={{
          height: buttonSize,
          width: buttonSize,
          // @ts-ignore
          // visibility: buttonVisibility,
          ...style,
        }}
      >
        {label && isSmall && <div className={styles.label}>{label}</div>}
        {icon && Icon}
      </div>
    </motion.div>
  );
}

export default Button;
