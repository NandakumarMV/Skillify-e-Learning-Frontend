import axios from "axios";
import React, { useEffect, useState } from "react";
import TutorTable from "./TutorTable";

const TutorList = () => {
  const [tutor, setTutor] = useState([]);

  const getTutor = async () => {
    try {
      const res = await axios.get("https://skillify-backend.nandakumarmv.co/api/admin/tutors", {
        withCredentials: true,
      });
      setTutor(res.data);
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  useEffect(() => {
    getTutor();
  }, []);

  return (
    <div>
      <h1 className="mb-5 font-semibold">Tutors in Skillify</h1>
      <TutorTable tutor={tutor} />
    </div>
  );
};

export default TutorList;
