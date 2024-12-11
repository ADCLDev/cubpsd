import React from 'react';

const FeedbackForm = () => {
  return (
    <div className="hero min-h-screen bg-blue-400" style={{backgroundImage: 'https://newxel.com/wp-content/uploads/2022/08/game-development-roles.jpeg'}}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Student Feedback Form</h1>
          <p className="py-6">
            We value your feedback! Please take a moment to share your thoughts and help us improve our educational experience.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Enter your name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Enter your email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Feedback</span>
              </label>
              <textarea className="textarea textarea-bordered h-24" placeholder="Enter your feedback"></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;