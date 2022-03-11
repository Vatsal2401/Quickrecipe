import React,{ useContext ,useEffect} from 'react'
import recipeContext from '../context/recipes/recipeContext';
export default function Userprofile() {

  const context = useContext(recipeContext);
  const {getuser,user  } = context;
  useEffect(() => {
   
 
      getuser()
   
  //eslint-disable-next-line
    }, [])
  return (

            
    <div>
        
        <div className=" bg-light">
            <div className="container">
                <div className="row ">
                    {/* <div className="col-md-10 mt-5 pt-5"> */}
                        {/* <div className="row z-depth-3"> */}
                            <div className="col-sm-4 bg-info rounded-left">
                                <div className="card-block text-center text-white">
                                    <i className="fas fa-user-tie fa-7x mt-5"></i>
                                    {/* <i class="fas fa-user-chef fa-7x mt-5"></i> */}
                                    <h2 className="font-weight-bold mt-4">{user.name}</h2>
                                    {/* <p>role</p> */}
                                </div>
                            </div>
                            <div className="col-sm-6 bg-white rounded-right mx-4">
                                <h3 className="mt-3 text-center">Information</h3>
                                <hr className="bg-primary mt-0 w-25" />
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold">Username:</p>
                                        <h6 className=" text-muted">{user.username}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold">Name:</p>
                                        <h6 className=" text-muted">{user.name}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold">ID:</p>
                                        <h6 className=" text-muted">{user._id}</h6>
                                    </div>

                                </div>

                            {/* </div> */}

                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
        {/*     
 <div className="row">
 <div className="col-md-3 border-right">
   <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF2psCzfbB611rnUhxgMi-lc2oB78ykqDGYb4v83xQ1pAbhPiB&usqp=CAU" /><strong className="d-inline-block mb-2 text-primary">UserName</strong><span> </span></div>
 </div>
 <div className="col-md-9 border-right">
   <div className="p-3 py-5">
     <div className="d-flex justify-content-between align-items-center mb-3">
       <h4 className="text-right">Profile Settings</h4>
     </div>
     <div className="row mt-2">
       <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" value="" /></div>
       <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="" placeholder="surname" /></div>
     </div>
     <div className="row mt-3">
       <div className="col-md-12"><label className="labels">PhoneNumber</label><input type="text" className="form-control" placeholder="enter phone number" value="" /></div>
       <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="enter address" value=""/></div>
       <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value="" /></div>
       <div className="col-md-12"><label className="labels">About</label><input type="text" className="form-control" placeholder="Tell about yourself" value="" /></div>
     </div>

     <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
   </div>
 </div>

</div> */}
{/* <div className="container">

      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid  rounded-circle" alt="..." />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">user Name</h5>
              <strong className="d-inline-block mb-2 text-primary">UserId</strong>

            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center">

            <button type="button" className="btn btn-outline-warning mx-2">EditProfile</button>
            <button type="button" className="btn btn-outline-warning mx-2">Logout</button>

          </div>
        </div>
      </div>
    </div> */}
    </div>

  )
}
