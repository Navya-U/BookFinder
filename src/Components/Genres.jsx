import React, { useState, useEffect } from "react";
import genresData from "../genres.json";
import FeaturedSections from "./FeaturedSections";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Genres = () => {
  const navigate = useNavigate();

  const handleGenreClick = (genre) => {
    navigate(`/genres/${genre}`);
  };

  return (
    <>
      <Search />
      <Navbar light expand="md" style={{ backgroundColor: "#fdfaf7" }}>
        <NavbarBrand href="/">
          <img
            alt="Book Finder Logo"
            src="booklogo.jpg"
            class="navbar-image1"
          />
        </NavbarBrand>
        <Nav ml-auto navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Categories
            </DropdownToggle>
            <DropdownMenu>
              {genresData.map((genre) => (
                <React.Fragment key={genre.id}>
                  <DropdownItem header>{genre.name}</DropdownItem>
                  {genre.subgenres && genre.subgenres.length > 0 && (
                    <div style={{ paddingLeft: "15px" }}>
                      {genre.subgenres.map((subgenre, index) => (
                        <DropdownItem
                          key={index}
                          onClick={() => handleGenreClick(subgenre)}
                        >
                          {subgenre}
                        </DropdownItem>
                      ))}
                    </div>
                  )}
                  <DropdownItem divider />
                </React.Fragment>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Fiction
            </DropdownToggle>
            <DropdownMenu>
              {genresData
                .filter((genre) => genre.name === "Fiction")
                .map((genre) => (
                  <React.Fragment key={genre.id}>
                    <DropdownItem header>{genre.name}</DropdownItem>
                    {genre.subgenres && genre.subgenres.length > 0 && (
                      <div style={{ paddingLeft: "15px" }}>
                        {genre.subgenres.map((subgenre, index) => (
                          <DropdownItem
                            key={index}
                            onClick={() => handleGenreClick(subgenre)}
                          >
                            {subgenre}
                          </DropdownItem>
                        ))}
                      </div>
                    )}
                    <DropdownItem divider />
                  </React.Fragment>
                ))}
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Biography & Autobiography
            </DropdownToggle>
            <DropdownMenu>
              {genresData
                .filter((genre) => genre.name === "Biography & Autobiography")
                .map((genre) => (
                  <React.Fragment key={genre.id}>
                    <DropdownItem header>{genre.name}</DropdownItem>
                    {genre.subgenres && genre.subgenres.length > 0 && (
                      <div style={{ paddingLeft: "15px" }}>
                        {genre.subgenres.map((subgenre, index) => (
                          <DropdownItem
                            key={index}
                            onClick={() => handleGenreClick(subgenre)}
                          >
                            {subgenre}
                          </DropdownItem>
                        ))}
                      </div>
                    )}
                    <DropdownItem divider />
                  </React.Fragment>
                ))}
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              General
            </DropdownToggle>
            <DropdownMenu>
              {genresData
                .filter((genre) => genre.name === "General")
                .map((genre) => (
                  <React.Fragment key={genre.id}>
                    <DropdownItem header>{genre.name}</DropdownItem>
                    {genre.subgenres && genre.subgenres.length > 0 && (
                      <div style={{ paddingLeft: "15px" }}>
                        {genre.subgenres.map((subgenre, index) => (
                          <DropdownItem
                            key={index}
                            onClick={() => handleGenreClick(subgenre)}
                          >
                            {subgenre}
                          </DropdownItem>
                        ))}
                      </div>
                    )}
                    <DropdownItem divider />
                  </React.Fragment>
                ))}
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Business
            </DropdownToggle>
            <DropdownMenu>
              {genresData
                .filter((genre) => genre.name === "Business")
                .map((genre) => (
                  <React.Fragment key={genre.id}>
                    <DropdownItem header>{genre.name}</DropdownItem>
                    {genre.subgenres && genre.subgenres.length > 0 && (
                      <div style={{ paddingLeft: "15px" }}>
                        {genre.subgenres.map((subgenre, index) => (
                          <DropdownItem
                            key={index}
                            onClick={() => handleGenreClick(subgenre)}
                          >
                            {subgenre}
                          </DropdownItem>
                        ))}
                      </div>
                    )}
                    <DropdownItem divider />
                  </React.Fragment>
                ))}
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              History
            </DropdownToggle>
            <DropdownMenu>
              {genresData
                .filter((genre) => genre.name === "History")
                .map((genre) => (
                  <React.Fragment key={genre.id}>
                    <DropdownItem header>{genre.name}</DropdownItem>
                    {genre.subgenres && genre.subgenres.length > 0 && (
                      <div style={{ paddingLeft: "15px" }}>
                        {genre.subgenres.map((subgenre, index) => (
                          <DropdownItem
                            key={index}
                            onClick={() => handleGenreClick(subgenre)}
                          >
                            {subgenre}
                          </DropdownItem>
                        ))}
                      </div>
                    )}
                    <DropdownItem divider />
                  </React.Fragment>
                ))}
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Wellness
            </DropdownToggle>
            <DropdownMenu>
              {genresData
                .filter((genre) => genre.name === "Wellness")
                .map((genre) => (
                  <React.Fragment key={genre.id}>
                    <DropdownItem header>{genre.name}</DropdownItem>
                    {genre.subgenres && genre.subgenres.length > 0 && (
                      <div style={{ paddingLeft: "15px" }}>
                        {genre.subgenres.map((subgenre, index) => (
                          <DropdownItem
                            key={index}
                            onClick={() => handleGenreClick(subgenre)}
                          >
                            {subgenre}
                          </DropdownItem>
                        ))}
                      </div>
                    )}
                    <DropdownItem divider />
                  </React.Fragment>
                ))}
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="/genres/Fantasy">Fantasy</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/genres/Literature">Literature</NavLink>
          </NavItem>
          <div className="divStyle">
            <FontAwesomeIcon icon={faUser} style={{ color: "#74C0FC" }} />
            <NavItem>
              <NavLink>Login</NavLink>
            </NavItem>
          </div>
        </Nav>
      </Navbar>
      <FeaturedSections />
    </>
  );
};

export default Genres;
