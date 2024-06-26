

const Contact = () => {
  return (
    <div>
      <h1 className="p-4 m-4 font-bold text-3xl">Contact Us</h1>
      <form>
        <input type="text" placeholder="name" className="border border-black p-2 m-2" />
        <input type="text" placeholder="message" className="border border-black p-2 m-2" />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;