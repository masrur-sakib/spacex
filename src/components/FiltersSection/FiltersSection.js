import React from "react";

const FiltersSection = () => {
  return (
    <div className="container py-2 bg-white d-flex flex-wrap justify-content-center align-items-center shadow-sm border border-light missions-filters-section">
      <div className="m-2 d-flex justify-content-end align-items-center">
        <div className="m-1 px-2 border border-secondary">
          Launch Year: Dropdown
        </div>
        <div className="mx-1 px-2 border border-secondary">
          Launch Status: Dropdown
        </div>
        <div className="mx-1 px-2 border border-secondary">
          Checkbox: Upcoming
        </div>
      </div>
    </div>
  );
};

export default FiltersSection;
