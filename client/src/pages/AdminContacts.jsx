// import { useEffect, useState } from "react";
// import {useAuth} from "../store/Auth";
// import {toast} from "react-toastify";
// export const AdminContacts = () => {
//     const [contactData, setContactData] = useState([]);
//     const {authorizationToken} = useAuth();
//     const getContactsData = async () => {
//         try {
//             const response = await fetch("http://localhost:5000/api/admin/contacts", {
//                 method : "GET",
//                 headers : {
//                     Authorization : authorizationToken,
//                 },
//             });
//             const data = await response.json();
//             console.log("Contact Data", data);
//             if(response.ok) {
//                 setContactData(data);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     //delete contact functionality 
//     const deleteContactById = async (id) => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/admin/contact/delete/${id}`, {
//                 method : "DELETE",
//                 headers : {
//                     Authorization : authorizationToken,
//                 }
//             });
//             if(response.ok) {
//                 getContactsData();
//                 toast.success("deleted successfully");
//             }else {
//                 toast.error("not deleted");
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     useEffect(()=> {
//         getContactsData();
//     },[])
//    return (
//     <>
//     <section className="admin-contacts-section">
//         <h1>Admin Contact Data</h1>
//         <div className="container admin-users">
//             {contactData.map((curContactData , index) => {
//                 const {username, email, message, _id} = curContactData;
//                 return (
//                     <div key={index}>
//                         <p>{username}</p>
//                         <p>{email}</p>
//                         <p>{message}</p>
//                         <button className="btn" onClick={() => deleteContactById(_id)}>Delete</button>
//                     </div>
//                 );
//             })}
//         </div>
//     </section>
//     </>
//    )
// }


import { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { authorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ If data is empty array, just set it (no toast)
        setContactData(data);
      } else if (response.status === 404) {
        // ✅ No contacts found
        setContactData([]);
      } else {
        // 🚫 Only show toast for real errors
        toast.error(data.message || "Failed to fetch contact data");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  // delete contact functionality
  const deleteContactById = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contact/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        toast.success("Contact deleted successfully");
        getContactsData(); // refresh list
      } else {
        toast.error("Failed to delete contact");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <>
      <section className="admin-contacts-section">
        <div className="container">
          <h1>Admin Contact Data</h1>
        </div>

        <div className="container admin-users">
          {isLoading ? (
            <p style={{ fontSize: "1.8rem" }}>Loading contacts...</p>
          ) : contactData.length === 0 ? (
            <p style={{ fontSize: "1.8rem", color: "#555" }}>
              No contact messages available.
            </p>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {contactData.map((curContact, index) => {
                  const { username, email, message, _id } = curContact;
                  return (
                    <tr key={index}>
                      <td>{username}</td>
                      <td>{email}</td>
                      <td>{message}</td>
                      <td>
                        <button
                          className="btn btn-delete"
                          onClick={() => deleteContactById(_id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </>
  );
};
