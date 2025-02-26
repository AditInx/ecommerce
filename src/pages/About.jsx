import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="mt-6 flex justify-center items-center h-50">
        <div>
          <h1 className="text-6xl font-bold text-gray-700">
            We love{" "}
            <span className="bg-blue-500 text-gray-300 text-6xl rounded-xl p-4">
              comfy
            </span>
          </h1>
        </div>
      </div>
      <p className="flex justify-center items-center h-50 text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
        quam <br /> blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia
        optio aut! Perferendis <br /> ipsa cumque ipsam nostrum reprehenderit ad
        illo sed officiis ea tempore! <br />
        Similique eos minima sit porro, ratione aspernatur!
      </p>
    </>
  );
}

export default About;
