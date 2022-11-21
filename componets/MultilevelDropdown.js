import React from "react";
// import { useHistory } from "react-router-dom";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";
import { set } from "lodash";
import Link from "next/link";

const MultilevelDropdown = (props) => {
  // let history = useHistory();
  const gotoScreen = (screenName) => {
    // history.push(screenName);
  };
  const menu = [
    { title: "Home", screen: "/" },
    {
      title: "About SKUAST",
      subMenu: [
        {
          id: 0,
          name: "Background of RCFC North II",
          screen: "/about-skuast",
        },
        {
          id: 1,
          name: "Establishment of RCFC North II",
          screen: "/about-skuast",
        },
        {
          id: 2,
          name: "Functions of RCFC North II",
          screen: "/about-skuast",
        },
      ],
    },
    {
      title: "Planting Details",
      subMenu: [
        { id: 0, name: "Herbal Gardens", screen: "/planting-details" },
        {
          id: 1,
          name: "Medicinal Plant Cultivators",
          screen: "/planting-details",
        },
        { id: 2, name: "Medicinal Plant Sellers", screen: "/planting-details" },
        {
          id: 3,
          name: "Medicinal Plant Traders",
          screen: "/planting-details",
        },
        {
          id: 4,
          name: "Medicinal Plant Buyers",
          screen: "/planting-details",
        },
        {
          id: 6,
          name: "Availability of Quality Planting Material and seed",
          screen: "/planting-details",
        },
      ],
    },
    {
      title: "Publications",
      subMenu: [
        { id: 0, name: "Pamphlets", screen: "/publications" },
        { id: 1, name: "Brochures", screen: "/publications" },
        { id: 2, name: "Boooklets", screen: "/publications" },
      ],
    },
    {
      title: "Activities",
      subMenu: [
        { id: 0, name: "Workshops", screen: "/activities" },
        { id: 1, name: "Training Programmes", screen: "/activities" },
        { id: 2, name: "Interstate Visits", screen: "/activities" },
        { id: 3, name: "Data Collected", screen: "/activities" },
      ],
    },
    {
      title: "Pricing Details",
      screen: "/pricing-details",
    },
    {
      title: "Gallery",
      screen: "/gallery",
    },
    {
      title: "Contact Us",
      screen: "/contact-us",
    },
  ];

  return (
    <div className="multi-level-dropdown-container">
      {menu.map((mainMenuItem, key) => {
        return mainMenuItem.subMenu ? (
          <Dropdown
            title={mainMenuItem.title}
            trigger="hover"
            placement="bottomStart"
            style={{ marginRight: 6 }}
            key={key}
          >
            {mainMenuItem &&
              mainMenuItem.subMenu &&
              mainMenuItem.subMenu.map((subMenuItem) => {
                return subMenuItem && subMenuItem.subMenu ? (
                  <Dropdown
                    title={subMenuItem.name}
                    trigger="hover"
                    placement="rightStart"
                    style={{ marginRight: 10 }}
                  >
                    {subMenuItem.subMenu.map((innerSubItem) => {
                      return (
                        <Link href={innerSubItem.screen} key={innerSubItem.id}>
                          <Dropdown.Item
                            key={innerSubItem.id}
                            // onClick={() => gotoScreen(innerSubItem.screen)}
                          >
                            {innerSubItem.name}
                          </Dropdown.Item>
                        </Link>
                      );
                    })}
                  </Dropdown>
                ) : (
                  <Link href={subMenuItem.screen} key={subMenuItem.id}>
                    <Dropdown.Item
                      key={subMenuItem.id}
                      // onClick={() => gotoScreen(subMenuItem.screen)}
                    >
                      {subMenuItem.name}
                    </Dropdown.Item>
                  </Link>
                );
              })}
          </Dropdown>
        ) : (
          <Link href={mainMenuItem.screen} key={mainMenuItem.id}>
            <div
              className="rs-dropdown"
              // onClick={() =>
              // mainMenuItem.screen ? gotoScreen(mainMenuItem.screen) : null
              // }
              key={key}
            >
              <button className="rs-btn">{mainMenuItem.title}</button>{" "}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MultilevelDropdown;
