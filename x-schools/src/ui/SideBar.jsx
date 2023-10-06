import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function SideBar({ list }) {

  SideBar.propTypes = {
    list: PropTypes.array.isRequired
  }

  return (
    <div className="sidebar">
      {list.map((i, key) => (
        <SideBarContent path={i.path} title={i.title} key={key} />
      ))}
    </div>
  );
}

function SideBarContent({ path, title }) {

  SideBarContent.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  return (
    <div className="sidebar-content">
      <Link to={path}>{title}</Link>
    </div>
  );
}