import '../App.css';
import Entry from "./Entry";
import profiles from "./profiles";

function getData(faculty_pic) {
  return (
    <div>
      <Entry 
      key={faculty_pic.id}
      image={faculty_pic.faculty_img}
      faculty_name={faculty_pic.name}/>
    </div>
  );
}

function FacultyPictures() {
    return (
      <div className="App">
        <div className="ProfileContainer">
            {profiles.map(getData)}
        </div>
      </div>
    );
  }

export default FacultyPictures;
