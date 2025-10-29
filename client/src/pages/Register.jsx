import { useState } from "react";
export const Register = () => {
    const [user, setUser] =useState({
        username :"",
        email : "",
        phone : "",
        password : "",
    });

    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setUser({...user, 
            [name] : value,
        });
    };

    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(user);
    };
    //     try {
    //         const response = await fetch("https://localhost:5000/api/auth/register", {
    //             method :"POST",
    //             headers : {
    //                 "Content-Type" : "application/json",
    //             },
    //             body :JSON.stringify(user),
    //         });
    //         console.log("response data :" ,response );
    //         if(response.ok) {
    //             const responseData = await response.json();
    //             alert("registration successful");
    //             setUser({username :"", email: "", phone :"" ,password : ""});
    //             console.log(responseData);
    //         }else {
    //             console.log("Error inside response", "error");
    //         }
    //     } catch (error) {
    //         console.error("Error" , error);
            
    //     }
    // };

    return <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="registration-image reg-img">
                        <img src="/images/register.png" alt="registration image" width="500" height="500" />
                    </div>
                    <div className="registration-form">
                        <h1 className="main-heading mb-3">Registration Form</h1><br />
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" name="username" value={user.username} onChange={handleInput} placeholder="username" />
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" value={user.email} onChange={handleInput} placeholder="enter email" />
                            </div>
                            <div>
                                <label htmlFor="phone">phone</label>
                                <input type="number" name="phone" value={user.phone} onChange={handleInput} placeholder="phone" />
                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <input type="password" name="password" value={user.password} onChange={handleInput} placeholder="password" />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-submit">Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
}