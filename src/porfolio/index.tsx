import React from "react";
import { useState } from "react";
import "./style.css";
// import FrontPage from "./components/frontPage";
import AppHeader from "./common/header";
import FrontPage from "./components/frontPage";
import ReactPageScroller from "react-page-scroller";
import AboutMe from "./components/aboutMe";
import Experience from "./components/experience";
// @ts-ignore
import chatBox from "../assets/chat_bubble.svg";
import ChatBox from "./common/chatBox";
import Projects from "./components/projects";
// @ts-ignore
import linkedIn from "../assets/images/linkedin.svg";
// @ts-ignore
import devpost from "../assets/images/devpost.svg";
// @ts-ignore
import gmail from "../assets/images/gmail-logo.svg";
// @ts-ignore
import github from "../assets/images/github.svg";
import { Menu } from "antd";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonIcon from "@mui/icons-material/Person";
import ViewTimelineOutlinedIcon from "@mui/icons-material/ViewTimelineOutlined";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import Icon from "@ant-design/icons";
const { SubMenu } = Menu;

const tabs = [
  {
    key: 0,
    label: "Home",
    icon: <HomeOutlinedIcon />,
    selectedIcon: <HomeIcon />,
  },
  {
    key: 1,
    label: "About Me",
    icon: <PersonOutlineOutlinedIcon />,
    selectedIcon: <PersonIcon />,
  },
  {
    key: 2,
    label: "Experience",
    icon: <ViewTimelineOutlinedIcon />,
    selectedIcon: <ViewTimelineIcon />,
  },
  {
    key: 3,
    label: "Projects",
    icon: <IntegrationInstructionsOutlinedIcon />,
    selectedIcon: <IntegrationInstructionsIcon />,
  },
];
function Portfolio() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isScrollEnabled, setIsScrollEnabled] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const handleTabChange = (number: number) => {
    setSelectedTab(number);
  };
  React.useEffect(() => {
    if (openSideMenu) setOpenSideMenu(false);
    // if (selectedTab === 2) {
    //   setIsScrollEnabled(false); // Disable page scroller on the last section
    // } else {
    //   setIsScrollEnabled(true); // Enable page scroller on other sections
    // }
  }, [selectedTab]);

  const handleChatIconClick = () => {
    setOpenDialog(true);
  };
  return (
    <>
      {selectedTab > 0 && (
        <>
          <header
            style={{
              width: "100%",
              background: "#f8f8f8",
              position: "fixed",
              zIndex: "3",
            }}
          >
            <AppHeader
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              handleTabChange={handleTabChange}
            />
          </header>
          <div className="small-header">
            {openSideMenu && <div className="small-header-body"></div>}
            {openSideMenu && (
              // <div className="overlay-small-header">
              <div
                className={`overlay-small-header ${openSideMenu ? "open" : ""}`}
              >
                <div
                  className="overlay-small-header-cancel"
                  onClick={() => {
                    setOpenSideMenu(false);
                  }}
                >
                  &#x2715;
                </div>
                <div className="overlay-small-header-list">
                  {tabs.map((val: any) => (
                    <div
                      className={
                        selectedTab.toString() !== val.key.toString()
                          ? "overlay-small-header-list-element"
                          : "overlay-small-header-list-selected-element"
                      }
                      onClick={() => handleTabChange(val.key)}
                    >
                      <span className="overlay-small-header-list-element-icon">
                        {selectedTab.toString() !== val.key.toString()
                          ? val.icon
                          : val.selectedIcon}
                      </span>
                      <span>{val.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {!openSideMenu && (
              <span
                className="small-header-menu"
                onClick={() => {
                  setOpenSideMenu(true);
                }}
              >
                &#9776;
              </span>
            )}
          </div>
        </>
      )}
      <div className="body">
        <ReactPageScroller
          pageOnChange={handleTabChange}
          // onBeforePageScroll={handleTabChange}
          customPageNumber={selectedTab}
          blockScrollUp={!isScrollEnabled}
          blockScrollDown={!isScrollEnabled}
        >
          <FrontPage
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          <AboutMe
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            setIsScrollEnabled={setIsScrollEnabled}
          />
          <Experience
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            setIsScrollEnabled={setIsScrollEnabled}
          />
          <Projects
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            setIsScrollEnabled={setIsScrollEnabled}
          />
        </ReactPageScroller>
        {openDialog && (
          <ChatBox openDialog={openDialog} setOpenDialog={setOpenDialog} />
        )}
        <div className="linksSection">
          <a
            href="https://www.linkedin.com/in/aayushi-agarwal-3126961b9/"
            target="blank"
          >
            <img src={linkedIn} className="linkIcons" />
          </a>
          <a href="mailto:aayushi08agarwal@gmail.com" target="blank">
            <img src={gmail} className="linkIcons" />
          </a>
          <a href="https://github.com/aayushi02agarwal" target="blank">
            <img src={github} className="linkIcons" />
          </a>
          <a
            href="https://devpost.com/aayushi08agarwal?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
            target="blank"
          >
            <img src={devpost} className="linkIcons" />
          </a>
        </div>
        <button className="dialogButton" onClick={handleChatIconClick}>
          <img src={chatBox} style={{ maxWidth: "45%" }} />
        </button>
      </div>
      <footer
        style={{
          backgroundColor: selectedTab === 0 ? "#0D1117" : "white",
          color: selectedTab === 0 ? "#D3D3D3" : "",
          fontSize: "12px",
        }}
      >
        <p style={{opacity: "0.6"}}>&copy; 2024 Aayushi Agarwal</p>
      </footer>
    </>
  );
}

export default Portfolio;
