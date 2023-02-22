const Hero = () => {
  return (
    <section className="grid grid-cols-2 p-2 mt-10 justify-center items-center">
      <div>
        <h3>image goes here</h3>
        <img src="" alt="trash" />
      </div>
      <div className="flex flex-col">
        <h2 className="tracking-wide font-not text-cyan-200">Who are we?</h2>
        <p className="text-white leading-7 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quam
          quasi cupiditate corporis, libero maxime aperiam? Velit natus sed
          ipsum? Deleniti debitis porro accusantium, animi blanditiis amet fuga
          esse nulla!
        </p>
        <div>
          <h3>features</h3>
          <ul>
            <li>collect watse</li>
          </ul>
        </div>
        <div>
          <h3>benefits</h3>
          <ul>
            <li>Easy access</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
