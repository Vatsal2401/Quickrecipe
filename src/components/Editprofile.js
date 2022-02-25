
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
       {/* <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="enter address" value=""/></div> */}
       <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value="" /></div>
       <div className="col-md-12"><label className="labels">About</label><input type="text" className="form-control" placeholder="Tell about yourself" value="" /></div>
     </div>

     <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
   </div>
 </div>

</div>
