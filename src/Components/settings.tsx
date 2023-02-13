const Settings = () => {
  return (
    <div className="setttings">
      <div className="settting-item">
        <label htmlFor="model">Model</label>
        <div className="select">
          <select>
            <option value="0">Select car:</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Citroen</option>
            <option value="4">Ford</option>
            <option value="5">Honda</option>
            <option value="6">Jaguar</option>
            <option value="7">Land Rover</option>
            <option value="8">Mercedes</option>
            <option value="9">Mini</option>
            <option value="10">Nissan</option>
            <option value="11">Toyota</option>
            <option value="12">Volvo</option>
          </select>
        </div>

        <p>
          The model parameter controls the engine used to generate the response
          . Davinci produces best results.
        </p>
      </div>
      <div className="settting-item">
        <label htmlFor="model">Temperature</label>
        <input type={"text"} />
        <p>
          The model parameter controls the engine used to generate the response
          . Davinci produces best results.
        </p>
      </div>
    </div>
  );
};

export default Settings;
