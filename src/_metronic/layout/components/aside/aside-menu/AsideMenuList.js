/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();

  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  const listMenu = [
    {
      menu_name: "Dashboard",
      title: "Dasboard",
      url: "/dashbaord",
      icon: "icon-home",
      permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
      childs: [],
    },
    {
      menu_name: "Builder",
      title: "Builder",
      url: "/builder",
      icon: "icon-home",
      permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
      childs: [],
    },
    {
      menu_name: "Administration",
      title: "Administration",
      url: "/administration",
      icon: "icon-home",
      permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
      childs: [
        {
          menu_name: "Master User",
          title: "Master User",
          url: "/administration/master-user",
          icon: "icon-home",
          permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
          childs: [
            {
              menu_name: "User",
              title: "User",
              url: "/administration/master-user/user",
              icon: "icon-home",
              permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
              childs: [],
            },
            {
              menu_name: "Roles",
              title: "Roles",
              url: "/administration/master-user/roles",
              icon: "icon-home",
              permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
              childs: [],
            },
          ],
        },

        {
          menu_name: "Bussiness Parameter",
          title: "Bussiness Parameter",
          url: "/administration/bussiness-parameter",
          icon: "icon-home",
          permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
          childs: [
            {
              menu_name: "Parameter Group",
              title: "Parameter Group",
              url: "/administration/bussiness-parameter/grup",
              icon: "icon-home",
              permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
              childs: [],
            },
            {
              menu_name: "Parameter",
              title: "Parameter",
              url: "/administration/bussiness-parameter/paramater",
              icon: "icon-home",
              permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
              childs: [],
            },
          ],
        },
        {
          menu_name: "Master Menu",
          title: "Master Menu",
          url: "/administration/master-menu",
          icon: "icon-home",
          permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
          childs: [
            {
              menu_name: "Menu",
              title: "Menu",
              url: "/administration/master-menu/menu",
              icon: "icon-home",
              permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
              childs: [],
            },
            {
              menu_name: "Menu Tree",
              title: "Menu",
              url: "/administration/master-menu/menu-tree",
              icon: "icon-home",
              permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
              childs: [],
            },
          ],
        },
        {
          menu_name: "Email",
          title: "Email",
          url: "/administration/email",
          icon: "icon-home",
          permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
          childs: [
            {
              menu_name: "Template",
              title: "Template",
              url: "/administration/email/template",
              icon: "icon-home",
              permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
              childs: [],
            },
            {
              menu_name: "Account",
              title: "Account",
              url: "/administration/email/account",
              icon: "icon-home",
              permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
              childs: [],
            },
          ],
        },
        {
          menu_name: "Password Policy",
          title: "Password Policy",
          url: "/administration/Password Policy",
          icon: "icon-home",
          permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
          childs: [],
        },
        {
          menu_name: "General Setting",
          title: "General Setting",
          url: "/administration/general-setting",
          icon: "icon-home",
          permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
          childs: [],
        },
      ],
    },
  ];

  return (
    <>
      {/* Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/* Loop Menu Level 1 */}
        {listMenu.map((menu) => {
          if (menu.childs.length === 0) {
            // Render don't have child
            return (
              <li
                className={`menu-item ${getMenuItemActive(
                  `${menu.url}`,
                  false
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to={menu.url}>
                  <span className="svg-icon menu-icon">
                    <SVG src={toAbsoluteUrl(`/media/svg/icons/${menu.icon}`)} />
                  </span>
                  <span className="menu-text">{menu.title}</span>
                </NavLink>
              </li>
            );
          } else {
            // Render if have child
            return (
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  `${menu.url}`,
                  true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink className="menu-link menu-toggle" to={menu.url}>
                  <span className="svg-icon menu-icon">
                    <SVG
                      src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")}
                    />
                  </span>
                  <span className="menu-text">{menu.title}</span>

                  <i className="menu-arrow" />
                </NavLink>
                <div className="menu-submenu ">
                  <ul className="menu-subnav">
                    <ul className="menu-subnav">
                      {/* Loop Menu Level 2 */}
                      {menu.childs.map((submenu) => {
                        if (submenu.childs.length === 0) {
                          // Render if don't have child
                          return (
                            <li
                              className={`menu-item ${getMenuItemActive(
                                `${submenu.url}`
                              )}`}
                              aria-haspopup="true"
                            >
                              <NavLink className="menu-link" to={submenu.url}>
                                <i className="menu-bullet menu-bullet-dot">
                                  <span />
                                </i>
                                <span className="menu-text">
                                  {submenu.title}
                                </span>
                              </NavLink>
                            </li>
                          );
                        } else {
                          // Render if have child
                          return (
                            <li
                              className={`menu-item menu-item-submenu ${getMenuItemActive(
                                `${submenu.url}`,
                                true
                              )}`}
                              aria-haspopup="true"
                              data-menu-toggle="hover"
                            >
                              <NavLink
                                className="menu-link menu-toggle"
                                to={submenu.url}
                              >
                                <span className="svg-icon menu-icon">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      `/media/svg/icons/${submenu.icon}`
                                    )}
                                  />
                                </span>
                                <span className="menu-text">
                                  {submenu.title}
                                </span>

                                <i className="menu-arrow" />
                              </NavLink>

                              <div className="menu-submenu ">
                                <ul className="menu-subnav">
                                  <ul className="menu-subnav"></ul>
                                  {/* Loop Menu Level 3 */}
                                  {submenu.childs.map((child) => {
                                    return (
                                      <li
                                        className={`menu-item ${getMenuItemActive(
                                          `${child.url}`
                                        )}`}
                                        aria-haspopup="true"
                                      >
                                        <NavLink
                                          className="menu-link"
                                          to={child.url}
                                        >
                                          <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                          </i>
                                          <span className="menu-text">
                                            {child.title}
                                          </span>
                                        </NavLink>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </ul>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
