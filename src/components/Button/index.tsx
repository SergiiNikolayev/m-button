import React, { ReactNode, useState } from 'react';
import styles from './index.module.css';

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
}
const sizeList = {
  small: '50px',
  big: '75px',
}
function Button({ size, icon, label, closeIcon, onClick, style }: IButtonProps) {
  const buttonSize = sizeList[size]
  const isSmall = size === ISizeList.small
  const [open, setOpen] = useState(false);
  const onPress = () => {
    onClick && onClick()
    return isSmall ? console.log('clicked', label) : setOpen(!open);
  }
  const Icon = open ? !isSmall && closeIcon : icon

  return (
    <div
      onClick={onPress}
      className={styles.container}
      style={{
        height: buttonSize,
        width: buttonSize,
        ...style,
      }}
    >
      {label && isSmall && <div className={styles.label}>{label}</div>}
      {icon && Icon}
    </div>
  );
}

export default Button;
