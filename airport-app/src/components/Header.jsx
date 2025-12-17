import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="header-title">Airport Flight Tracker</h1>
        <nav className="header-nav">
          <Link to="/" className="nav-link">
            Flight Arrivals
          </Link>
          <Link to="/admin" className="nav-link">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
