import { useState } from "react";

const Profile = () => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        bio: "",
        gender: "",
        specialization: "",
        ticketPrice: null, 
        qualifications:[{startingDate: " " , endingDate: " "  }],
        experiencies: [],
        timeSlots: [],
    });
    
    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };
    
    return (
        <div>
            <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
                Profile Information
            </h2>

            <form>
                <div className="mb-5">
                    <p className="form_label">Name*</p>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange}
                        placeholder="Enter your name" 
                        className="form_input"
                    />
                </div>
                <div className="mb-5">
                    <p className="form_label">Email*</p>
                    <input 
                        type="text" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange}
                        placeholder="Enter your email" 
                        className="form_input"
                        readOnly
                        aria-readonly
                        disabled="true"
                    />
                </div>
                <div className="mb-5">
                    <p className="form_label">Phone*</p>
                    <input 
                        type="text" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange}
                        placeholder="Phone number" 
                        className="form_input"
                    />
                </div>
                <div className="mb-5">
                    <p className="form_label">Bio*</p>
                    <input 
                        type="text" 
                        name="bio" 
                        value={formData.bio} 
                        onChange={handleInputChange}
                        placeholder="Bio" 
                        className="form_input"
                        maxLength={100}
                    />
                </div>
                <div className="mb-5">
                    <div className="grid grid-cols-3 gap-5 mb-[30px]">
                        <div>
                            <p className="form_label">Gender*</p>
                            <select 
                                name="gender" 
                                value={formData.gender} 
                                onChange={handleInputChange} 
                                className="form_input py-3.5"
                            >
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>                                
                        </div>
                        <div>
                            <p className="form_label">specialization*</p>
                            <select 
                                name="specialization" 
                                value={formData.specialization} 
                                onChange={handleInputChange} 
                                className="form_input py-3.5"
                            >
                                <option value="">Select</option>
                                <option value="surgeon">Surgeon</option>
                                <option value="neurologist">Neurologist</option>
                                <option value="dermatologist">Dermatologist</option>
                            </select>                                
                        </div>
                        <div>
                            <p className="form_label">Ticket Price*</p>
                            <input 
                                type="number"
                                placeholder="100" 
                                name="ticketPrice" 
                                value={formData.ticketPrice}
                                className="form_input"
                                onChange={handleInputChange}
                            />
                        </div>    
                    </div>        
                </div>

                <div className="mb-5">
                    <p className="form_label"> Qualifications*</p>
                    {formData.qualifications?.map((item, index) => (
                        <div key={index}>
                            <div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div>
                                        <p className="form_label">Starting Date*</p>
                                        <input 
                                            type="date" 
                                            name="startingDate" 
                                            value={item.startingDate}
                                            className="form_input"
                                        />
                                    </div>
                                    <div>
                                        <p className="form_label">Ending Date*</p>
                                        <input 
                                            type="date" 
                                            name="endingDate" 
                                            value={item.endingDate}
                                            className="form_input"
                                        />
                                    </div>
                                </div>
                            </div>                    
                        </div>
                    ))}
                </div>

            </form>
        </div>
    );
};

export default Profile;