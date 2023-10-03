import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar({ list }) {
  return (
    <div className="sidebar">
      {list.map((i, key) => (
        <SideBarContent path={i.path} title={i.title} key={key} />
      ))}
    </div>
  );
}

function SideBarContent({ path, title }) {
  return (
    <div className="sidebar-content">
      <Link to={path}>{title}</Link>
    </div>
  );
}