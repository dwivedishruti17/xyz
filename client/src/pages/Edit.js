import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    RegNo: "",
    Section: "",
  });
  useEffect(() => {
    const getAllData = async () => {
      const res = await axios.get(
        `http://localhost:9000/api/v1/users/single/${id}`
      );
      setInput(res.data);
    };
    getAllData();
  }, [id]);

  // const handleEditData = async (e) => {
  //   e.preventDefault();
  //   await axios.put(`http://localhost:9000/api/v1/users/${id}`, input);
  //   navigate("/");
  // };


  const handleEditData = async (e) => {
    e.preventDefault();
    console.log("Sending data:", input);
    try {
      await axios.put(`http://localhost:9000/api/v1/users/${id}`, input);
      navigate("/");
    } catch (error) {
      console.error("Error response:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <div style={{ backgroundColor: "blue" }}>
              <h1 className="text-white text-center mt-2">Update</h1>
            </div>
          </div>
          <div className="col-md-12">
            <form onSubmit={handleEditData}>
              <div class="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  value={input.email}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  type="email"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  RegNo
                </label>
                <input
                  value={input.RegNo}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  name="RegNo"
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Section
                </label>
                <input
                  value={input.Section}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  name="Section"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                update
              </button>
            </form>
          </div>
        </div>
        <button onClick={() => navigate("/")} className="btn btn-info mt-2">
          Go To Home
        </button>
      </div>
    </>
  );
};

export default Edit;
