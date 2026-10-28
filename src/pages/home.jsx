import { useEffect, useState,useRef } from "react";
import profilesData from "./profile";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate=useNavigate();
  const [showBio, setShowBio] = useState(Array(profilesData.length).fill(false));

    let focusRef=useRef();
    useEffect(()=>{

      focusRef.current.focus();


    });
 useEffect(() => {
  document.title = "Profile cards";
  console.log("Title updated");
}, []);
   

  return (
    <>
    <nav>
       <div className="nav mt-3 ">
            <button onClick={()=>navigate("/")}>
              Home
            </button>
            <button onClick={()=> navigate("/about")}>
              About us
            </button>
          </div>
        </nav>
      <div className="container ">
      
        <div className="search d-flex justify-content-center mb-4">
        <input type="text" ref={focusRef} placeholder="Search by Professionals..."/>
        </div>
        <h1 className="main-heading">Meet the Professionals</h1>
        <p className="main-subtitle">
          Discover talented professionals across leading technology domains.
        </p>
        <div className="row g-4">
          {profilesData.map((v,index) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-2" key={v.id}>
                <div className="card shadow-sm profile-card">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="card-img-top profile-image"
                  />

                  <div className="card-body">
                    <h6 className="card-title">{v.name}</h6>
                    <p className="card-role">{v.role}</p>
                    {showBio[index] && <p className="card-bio">{v.bio}</p>}
                    <button className="bio-btn" onClick={()=>{
                      const newBio=[...showBio];
                      newBio[index]=!showBio[index];
                      setShowBio(newBio);
                    }}>
                      {showBio[index] ? "Hide Bio" : "Show Bio"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Profile;
