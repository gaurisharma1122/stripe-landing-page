import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
import { sublinks } from '../../data';
import "./Sidebar.css";

const Sidebar = () => {

  const { isSidebarOpen, closeSidebar }= useGlobalContext();
  return (
    <section className={isSidebarOpen?'sidebar show-sidebar': 'sidebar'}>
      <div className="sidebar-container">
        <div className="sidebar-close-btn">
        <button onClick={closeSidebar}>
          <FaTimes/>
        </button>
        </div>

        <div className='sidebar-menu'>
          {
            sublinks.map((item, index) => {
              return (
                <article className='sidebar-links' key={index}>
                  <h4>{item.page}</h4>
                  <div className="sidebar-sublinks">
                    {
                      item.links.map((link, index) => {
                        return (
                          <a key={index} href={link.url}>
                            <span>{link.icon}</span> {link.label}
                          </a>
                        )
                      })
                    }
                  </div>
                </article>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Sidebar;

