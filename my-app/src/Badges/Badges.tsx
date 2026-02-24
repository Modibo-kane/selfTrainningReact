import React from 'react';
import style from './Badges.module.css'

type BadgeType = {
    color?: string;
    size?: string;
    type?: string;
    children: React.ReactNode;
  }
export const Badge = ({type, children }: BadgeType) => {

  const badgeType = style[`${type}`] || style.primary;
  return (
    <div>
        <div className={`${style.badge} ${badgeType}`}>{children}</div>
    </div>
  );
};