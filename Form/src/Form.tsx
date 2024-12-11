
function Form() {


  return (
    <div className="flex justify-center relative bg-cover bg-center" id='main-container'>
      <div className="flex items-center justify-center">
        <form noValidate className="bg-white p-8 shadow-md rounded-2xl">
          <p className="text-xl font-semibold pb-2">Sign Up</p>
          <p className="text-gray-500 pb-2 text-sm font-semibold">Welcome To Craft!</p>
          <div className="flex flex-col">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <select id="country" name="country" required>
              <option value="">Select your country</option>
              <option value="us">United States</option>
              <option value="in">India</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="au">Australia</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />
          </div>

          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
