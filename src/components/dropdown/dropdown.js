import AnimatedNav from "../animations/animateddropdown.component";

// eslint-disable-next-line no-unused-vars
const items = [
  "Engineer (Full Tech Stack)",
  "Front End Engineer (Web)",
  "Front End Engineer (Android)",
  "Front End Engineer (iOS)",
  "Backend Engineer",
  "Data Engineer",
  "System Engineer",
  "Site Reliability Engineer",
  "Corporate Sales",
  "Marketing",
  "HR and Legal",
  "Salesforce Developer",
  "Salesforce Administrator",
  "Software Development - Test",
  "Quality Analyst",
  "Finance and Risk Management",
  "Accounting & Reconciliation",
  "Product and Strategy",
  "Operations and Supply Chain",
  "Customer Care",
  "Educator",
  "Security / Quality Management",
  "Project Management",
  "Growth Hacker",
  "Media Personnel/Presenter",
  "Movie/Photo Editing",
  "R&D",
];
// for future reference

export default function DropDown({
  items,
  filterConditions,
  SetFilterConditions,
  dropdownstate,
  SetDropdownstate,
}) {
  const checkboxchange = (event) => {
    const temp = { ...filterConditions };
    if (temp.jobField) {
      const fi = temp.jobField.findIndex((item) => {
        return item === event.target.name;
      });
      if (fi !== -1) {
        temp.jobField.splice(fi, 1);
      } else {
        temp.jobField.push(event.target.name);
      }
    } else {
      temp.jobField = [event.target.name];
    }
    SetFilterConditions(temp);
  };

  const dropdownhandler = (n) => {
    n--;
    const temp = [...dropdownstate];
    for (let i = 0; i < 4; i++) {
      if (i === n) {
        temp[n] = !temp[n];
      } else {
        temp[i] = false;
      }
    }
    SetDropdownstate(temp);
  };
  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={() => dropdownhandler(1)}>
        <p>All</p>
        <p>
          <i className="fa-solid fa-angle-down"></i>
        </p>
      </button>
      {dropdownstate[0] ? (
        <AnimatedNav className="dropdown-content">
          {items.map((item, i) => {
            return (
              <div className="inp-container" key={i}>
                <input type="checkbox" name={item} onChange={(event) => checkboxchange(event)} />
                <label>{item}</label>
              </div>
            );
          })}
        </AnimatedNav>
      ) : (
        ""
      )}
    </div>
  );
}
