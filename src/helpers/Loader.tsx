const Loader = () => {
  return (
    <div className="loader">
      <svg
        className="spinner"
        width={65}
        height={65}
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle className="circle" fill="none" cx={33} cy={33} r={30} />
      </svg>
    </div>
  );
};

export default Loader;
