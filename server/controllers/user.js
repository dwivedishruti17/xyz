import userModel from "../models/user.js";

// class userController {
//   static getAllUsers = async (req, res) => {
//     try {
//       const allUsers = await userModel.find({});
//       if (allUsers) {
//         return res.status(200).json(allUsers);
//       }
//     } catch (error) {
//       return res.status(400).json(error);
//     }
//   };

//   static createUser = async (req, res) => {
//     const { name, email, RegNo , Section} = req.body;
//     try {
//       if (name && email && RegNo && Section) {
//         const newUser = userModel({
//           name,
//           email,
//           RegNo,
//           Section,
//         });

//         const saved_user = await newUser.save();
//         if (saved_user) {
//           return res.status(201).json(saved_user);
//         } else {
//           return res.status(400).json({ message: "something wrong" });
//         }
//       } else {
//         return res.status(400).json({ message: "all fields are required" });
//       }
//     } catch (error) {
//       return res.status(400).json(error);
//     }
//   };

//   static getSingleUser = async (req, res) => {
//     const { id } = req.params;
//     try {
//       if (id) {
//         const getSingleData = await userModel.findById(id);
//         return res.status(200).json(getSingleData);
//       } else {
//         return res.status(400).json({ message: "Id not found" });
//       }
//     } catch (error) {
//       return res.status(400).json(error);
//     }
//   };

//   static updateUser = async (req, res) => {
//     const { id } = req.params;
//     try {
//       if (id) {
//         const getUpdatedData = await userModel.findByIdAndUpdate(id, req.body);
//         return res.status(200).json(getUpdatedData);
//       } else {
//         return res.status(400).json({ message: "Id not found" });
//       }
//     } catch (error) {
//       return res.status(400).json(error);
//     }
//   };

//   static deleteUser = async (req, res) => {
//     const { id } = req.params;
//     try {
//       if (id) {
//         const getDeletedData = await userModel.findByIdAndDelete(id);
//         return res.status(200).json(getDeletedData);
//       } else {
//         return res.status(400).json({ message: "Id not found" });
//       }
//     } catch (error) {
//       return res.status(400).json(error);
//     }
//   };
// }

// export default userController;


// user.js
class userController {
  static getAllUsers = async (req, res) => {
    try {
      const allUsers = await userModel.find({});
      if (allUsers) {
        return res.status(200).json(allUsers);
      }
    } catch (error) {
      return res.status(400).json({ message: "Error fetching users", error });
    }
  };

  static createUser = async (req, res) => {
    const { name, email, RegNo, Section } = req.body;
    try {
      if (name && email && RegNo && Section) {
        const newUser = new userModel({ name, email, RegNo, Section });
        const savedUser = await newUser.save();
        if (savedUser) {
          return res.status(201).json(savedUser);
        } else {
          return res.status(400).json({ message: "Error saving user" });
        }
      } else {
        return res.status(400).json({ message: "All fields are required" });
      }
    } catch (error) {
      return res.status(400).json({ message: "Error creating user", error });
    }
  };

  static getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const user = await userModel.findById(id);
        if (user) {
          return res.status(200).json(user);
        } else {
          return res.status(400).json({ message: "User not found" });
        }
      } else {
        return res.status(400).json({ message: "ID is required" });
      }
    } catch (error) {
      return res.status(400).json({ message: "Error fetching user", error });
    }
  };

  static updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, RegNo, Section } = req.body;
    try {
      if (id && name && email && RegNo && Section) {
        const updatedUser = await userModel.findByIdAndUpdate(id, { name, email, RegNo, Section }, { new: true });
        if (updatedUser) {
          return res.status(200).json(updatedUser);
        } else {
          return res.status(400).json({ message: "Error updating user" });
        }
      } else {
        return res.status(400).json({ message: "All fields are required" });
      }
    } catch (error) {
      return res.status(400).json({ message: "Error updating user", error });
    }
  };

  static deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const deletedUser = await userModel.findByIdAndDelete(id);
        if (deletedUser) {
          return res.status(200).json(deletedUser);
        } else {
          return res.status(400).json({ message: "Error deleting user" });
        }
      } else {
        return res.status(400).json({ message: "ID is required" });
      }
    } catch (error) {
      return res.status(400).json({ message: "Error deleting user", error });
    }
  };
}

export default userController;

